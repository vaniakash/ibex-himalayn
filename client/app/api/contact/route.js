import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { sendMail, confirmationHtml } from '@/lib/mailer';
import mongoose from 'mongoose';

// ── Enquiry Schema ──────────────────────────────────────────────
const enquirySchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     String,
  trek:      String,
  trekDate:  String,
  message:   String,
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

export async function POST(req) {
  try {
    const { name, email, phone, trek, trekDate, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // 1. Save to MongoDB
    await connectDB();
    await Enquiry.create({ name, email, phone, trek, trekDate, message });

    // 2. Notify admin
    await sendMail({
      to: process.env.MAIL_FROM,
      subject: `New Enquiry: ${trek || 'General'} — ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;color:#1a1a1a">
          <h2 style="color:#1e3d2f">New Trek Enquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:0.5rem;font-weight:600;width:120px">Name</td><td>${name}</td></tr>
            <tr><td style="padding:0.5rem;font-weight:600">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:0.5rem;font-weight:600">Phone</td><td>${phone || '—'}</td></tr>
            <tr><td style="padding:0.5rem;font-weight:600">Trek</td><td>${trek || '—'}</td></tr>
            <tr><td style="padding:0.5rem;font-weight:600">Trek Date</td><td>${trekDate || '—'}</td></tr>
            <tr><td style="padding:0.5rem;font-weight:600;vertical-align:top">Message</td><td>${message || '—'}</td></tr>
          </table>
        </div>
      `,
    });

    // 3. Send confirmation to user
    await sendMail({
      to: email,
      subject: `We got your enquiry, ${name.split(' ')[0]}! — Himalayan Ibex`,
      html: confirmationHtml(name.split(' ')[0], trek),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}
