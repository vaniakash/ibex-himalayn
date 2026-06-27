import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_FROM,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

/**
 * Send an email via Gmail (Nodemailer)
 * @param {Object} opts
 * @param {string} opts.to
 * @param {string} opts.subject
 * @param {string} opts.html
 * @param {string} [opts.replyTo]
 */
export async function sendMail({ to, subject, html, replyTo }) {
  return transporter.sendMail({
    from: `"Himalayan Ibex" <${process.env.MAIL_FROM}>`,
    to,
    replyTo: replyTo || process.env.MAIL_FROM,
    subject,
    html,
  });
}

/** Standard confirmation email sent to the user */
export function confirmationHtml(name, trekName) {
  return `
    <div style="font-family:Inter,sans-serif;max-width:580px;margin:0 auto;color:#1a1a1a">
      <div style="background:#1e3d2f;padding:2rem;text-align:center">
        <h1 style="color:#fff;margin:0;font-size:1.5rem">🏔️ Himalayan Ibex</h1>
      </div>
      <div style="padding:2rem;background:#fff">
        <h2 style="color:#1e3d2f">Hi ${name},</h2>
        <p>Thank you for reaching out about <strong>${trekName || 'your trek enquiry'}</strong>. We've received your message and our team will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our other treks:</p>
        <a href="https://himalayanibex.com/treks" style="display:inline-block;background:#1e3d2f;color:#fff;padding:0.75rem 1.5rem;border-radius:4px;text-decoration:none;font-weight:600;margin:1rem 0">Browse Treks →</a>
        <hr style="border:none;border-top:1px solid #f0ece6;margin:1.5rem 0"/>
        <p style="font-size:0.8rem;color:#888">Himalayan Ibex · himalayanibexofficial@gmail.com · +91 6398 978 309</p>
      </div>
    </div>
  `;
}
