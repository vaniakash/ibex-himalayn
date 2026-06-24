import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const OVERRIDES_PATH = path.join(process.cwd(), 'lib', 'treks-overrides.json');
const SECRET = process.env.ADMIN_SECRET || 'ibex-secret-2026';

async function isAuthed() {
  const cookieStore = await cookies();
  return cookieStore.get('ibex_admin_token')?.value === SECRET;
}

async function readOverrides() {
  try {
    const raw = await readFile(OVERRIDES_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

// GET — return all current overrides
export async function GET() {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await readOverrides();
  return NextResponse.json(data);
}

// POST — upsert override for a trek slug
export async function POST(req) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { slug, price, images } = await req.json();
  if (!slug) return NextResponse.json({ error: 'slug is required' }, { status: 400 });

  const overrides = await readOverrides();
  overrides[slug] = {
    ...(overrides[slug] || {}),
    ...(price !== undefined ? { price: Number(price) } : {}),
    ...(images !== undefined ? { images } : {}),
    updatedAt: new Date().toISOString(),
  };
  await writeFile(OVERRIDES_PATH, JSON.stringify(overrides, null, 2), 'utf-8');
  return NextResponse.json({ ok: true, override: overrides[slug] });
}

// DELETE — remove override for a trek slug
export async function DELETE(req) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { slug } = await req.json();
  const overrides = await readOverrides();
  delete overrides[slug];
  await writeFile(OVERRIDES_PATH, JSON.stringify(overrides, null, 2), 'utf-8');
  return NextResponse.json({ ok: true });
}
