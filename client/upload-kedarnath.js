import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: '/Users/akashrana/Desktop/project - trekking/tbx/client/.env.local' });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function run() {
  const dirPath = '/Users/akashrana/Desktop/project - trekking/tbx/client/public/assets/treks/KEDARNATH_TREK';
  const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));
  const urls = [];
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: `treks/galleries/kedarnath`,
        use_filename: true,
        unique_filename: false
      });
      urls.push({ url: result.secure_url, caption: 'Shri Kedarnath Jyotirlinga Temple' });
      console.log(`Uploaded ${file}`);
    } catch(e) {
      console.error(e);
    }
  }
  console.log('RESULTS_JSON:');
  console.log(JSON.stringify(urls, null, 2));
}

run();
