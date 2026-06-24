import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ibex2026admin';
const SESSION_TOKEN = 'ibex_admin_token';
const SECRET = process.env.ADMIN_SECRET || 'ibex-secret-2026';

export async function POST(req) {
  const { password } = await req.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_TOKEN, SECRET, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
    sameSite: 'lax',
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_TOKEN, '', { maxAge: 0, path: '/' });
  return res;
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('ibex_admin_token')?.value;
  const SECRET_VAL = process.env.ADMIN_SECRET || 'ibex-secret-2026';
  if (token === SECRET_VAL) {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
