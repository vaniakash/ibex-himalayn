import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const SECRET       = process.env.ADMIN_SECRET    || 'ibex-secret-2026';
const CLOUD_NAME   = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dirsimqmr';
const API_KEY      = process.env.CLOUDINARY_API_KEY;
const API_SECRET   = process.env.CLOUDINARY_API_SECRET;

export async function POST(req) {
  // Auth check
  const cookieStore = await cookies();
  if (cookieStore.get('ibex_admin_token')?.value !== SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { folder } = await req.json().catch(() => ({}));
  const timestamp = Math.round(Date.now() / 1000);
  const uploadFolder = folder || 'treks';

  // Always use signed upload (credentials are set)
  const params = { folder: uploadFolder, timestamp };

  const signStr = Object.keys(params)
    .sort()
    .map(k => `${k}=${params[k]}`)
    .join('&');

  const signature = crypto
    .createHash('sha1')
    .update(signStr + API_SECRET)
    .digest('hex');

  return NextResponse.json({
    signature,
    timestamp,
    apiKey: API_KEY,
    cloudName: CLOUD_NAME,
    folder: uploadFolder,
    unsigned: false,
  });
}
