#!/usr/bin/env node
// upload-kedarkantha.mjs — uploads all images in public/assets/kedarkantha/ to Cloudinary
// Run: node upload-kedarkantha.mjs

import { readFileSync, readdirSync } from 'fs';
import { resolve, join, extname } from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dir = dirname(__filename);

const CLOUD_NAME = 'dirsimqmr';
const API_KEY    = '813462389331858';
const API_SECRET = 'eafLX8kkvy_lM6G29PztqVRIsig';
const FOLDER     = 'treks/kedarkantha';

const IMAGES_DIR = resolve(__dir, 'public/assets/kedarkantha');

function sign(params) {
  const str = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
  return crypto.createHash('sha1').update(str + API_SECRET).digest('hex');
}

function getExt(filename) {
  return extname(filename).slice(1).toLowerCase(); // e.g. "jpg"
}

async function uploadFile(filename) {
  const filePath = join(IMAGES_DIR, filename);
  const fileBuffer = readFileSync(filePath);
  const timestamp = Math.round(Date.now() / 1000);
  const params = { folder: FOLDER, timestamp };
  const signature = sign(params);

  // Build multipart body manually using native FormData (Node 18+)
  const form = new FormData();
  form.append('file', new Blob([fileBuffer], { type: `image/${getExt(filename)}` }), filename);
  form.append('folder', FOLDER);
  form.append('timestamp', String(timestamp));
  form.append('api_key', API_KEY);
  form.append('signature', signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: form,
  });

  return res.json();
}

const VALID_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const files = readdirSync(IMAGES_DIR).filter(f => VALID_EXT.includes(extname(f).toLowerCase()));

console.log(`\n🏔️  Uploading ${files.length} images → Cloudinary: ${FOLDER}\n`);

const results = [];
for (const file of files) {
  process.stdout.write(`  ↑ ${file} … `);
  try {
    const data = await uploadFile(file);
    if (data.secure_url) {
      console.log(`✓`);
      console.log(`    ${data.secure_url}`);
      results.push({ file, url: data.secure_url });
    } else {
      console.log(`✗  Error: ${data.error?.message || JSON.stringify(data)}`);
    }
  } catch (err) {
    console.log(`✗  ${err.message}`);
  }
}

console.log('\n\n📋  Paste this into treks-data.js for Kedarkantha:\n');
console.log('images: [');
results.forEach(r => {
  const caption = r.file.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
  console.log(`  { url: '${r.url}', caption: '${caption}' },`);
});
console.log('],');
console.log('\nDone! ✅\n');
