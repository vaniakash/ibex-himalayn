/**
 * Quick email test — run with:
 *   node test-mail.mjs
 *
 * No build step needed. Uses the same credentials as mailer.js.
 */

import nodemailer from 'nodemailer';

// ── Credentials (paste here or set as env vars) ──────────────────────────────
const MAIL_FROM        = process.env.MAIL_FROM        || 'himalayanibexofficial@gmail.com';
const MAIL_APP_PASSWORD = process.env.MAIL_APP_PASSWORD || 'ipyuapvgjifzgpag';   // ← app password
const SEND_TO          = MAIL_FROM;   // send to yourself for a quick smoke-test
// ─────────────────────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAIL_FROM,
    pass: MAIL_APP_PASSWORD,
  },
});

async function main() {
  console.log('⏳  Verifying SMTP connection …');
  await transporter.verify();
  console.log('✅  SMTP connection OK!\n');

  console.log(`📨  Sending test email to: ${SEND_TO}`);
  const info = await transporter.sendMail({
    from   : `"Himalayan Ibex Test" <${MAIL_FROM}>`,
    to     : SEND_TO,
    subject: '🏔️ Mail test – Himalayan Ibex mailer',
    html   : `
      <div style="font-family:Inter,sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a">
        <div style="background:#1e3d2f;padding:1.5rem;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:1.4rem">🏔️ Himalayan Ibex</h1>
        </div>
        <div style="padding:2rem;background:#fff;border:1px solid #eee">
          <h2 style="color:#1e3d2f">Mail test passed ✅</h2>
          <p>If you can read this, your nodemailer + Gmail app-password setup is working correctly.</p>
          <p style="font-size:0.85rem;color:#888">Sent at: ${new Date().toISOString()}</p>
        </div>
      </div>
    `,
  });

  console.log('✅  Email sent!');
  console.log('   Message-ID :', info.messageId);
  console.log('   Accepted   :', info.accepted);
}

main().catch(err => {
  console.error('❌  Error:', err.message);
  process.exit(1);
});
