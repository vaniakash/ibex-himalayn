import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({ 
  cloud_name: 'dirsimqmr', 
  api_key: '813462389331858', 
  api_secret: 'eafLX8kkvy_lM6G29PztqVRIsig' 
});

const dirPath = '/Users/akashrana/Desktop/project - trekking/tbx/client/public/assets/treks/treks';

async function uploadImages() {
  const files = fs.readdirSync(dirPath);
  const mappings = {};
  
  for (const file of files) {
    if (file === '.' || file === '..') continue;
    const filePath = path.join(dirPath, file);
    if (!fs.statSync(filePath).isFile()) continue;
    if (!file.match(/\.(jpe?g|png|gif|svg)$/i)) continue;
    
    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, { folder: 'treks' });
      mappings[file] = result.secure_url;
      console.log(`Uploaded! URL: ${result.secure_url}`);
    } catch (err) {
      console.error(`Error uploading ${file}:`, err);
    }
  }
  
  fs.writeFileSync(path.join(process.cwd(), 'cloudinary-mappings.json'), JSON.stringify(mappings, null, 2));
  console.log('Upload complete. Mappings saved.');
}

uploadImages();
