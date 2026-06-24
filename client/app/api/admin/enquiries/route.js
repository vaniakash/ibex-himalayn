import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectDB } from '@/lib/mongodb';
import mongoose from 'mongoose';

const SECRET = process.env.ADMIN_SECRET || 'ibex-secret-2026';

const enquirySchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     String,
  trek:      String,
  message:   String,
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);

export async function GET(req) {
  const cookieStore = await cookies();
  if (cookieStore.get('ibex_admin_token')?.value !== SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '50');
  const page  = parseInt(searchParams.get('page') || '1');
  const skip  = (page - 1) * limit;

  const [enquiries, total] = await Promise.all([
    Enquiry.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Enquiry.countDocuments(),
  ]);

  return NextResponse.json({ enquiries, total, page, limit });
}
