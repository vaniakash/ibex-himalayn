require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dataFilePath = path.join(__dirname, 'lib/treks-data.js');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

const targetTreks = [
  { folder: 'Gaumukh Tapovan', nameInFile: 'Gaumukh Tapovan Trek' },
  { folder: 'Pangarchulla', nameInFile: 'Pangarchulla Peak Trek' },
  { folder: 'Pin Bhaba', nameInFile: 'Pin Bhaba Pass Trek' }
];

async function run() {
  for (const { folder, nameInFile } of targetTreks) {
    const dirPath = path.join(__dirname, 'public/assets/treks', folder);
    if (!fs.existsSync(dirPath)) {
      console.log(`Folder not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath).filter(file => {
      if (file.startsWith('.')) return false;
      const lower = file.toLowerCase();
      return lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp') || lower.endsWith('.avif');
    });

    if (files.length === 0) continue;

    console.log(`Uploading ${files.length} images for ${folder}...`);
    const uploadedUrls = [];
    for (const file of files.slice(0, 5)) {
      const filePath = path.join(dirPath, file);
      try {
        const result = await cloudinary.uploader.upload(filePath, { folder: 'treks' });
        uploadedUrls.push(result.secure_url);
        console.log(`  -> Uploaded ${file}`);
      } catch (err) {
        console.error(`  -> Failed ${file}: ${err.message}`);
      }
    }

    const imagesArrayStr = uploadedUrls.map(url => `    { url: '${url}', caption: 'Trek View' }`).join(',\n');
    const imagesReplacement = `images: [\n${imagesArrayStr}\n  ],`;

    const nameIndex = fileContent.indexOf(`name: '${nameInFile}'`);
    if (nameIndex === -1) {
      console.log(`Could not find name in file: ${nameInFile}`);
      continue;
    }

    const startOfImages = fileContent.indexOf('images:', nameIndex);
    if (startOfImages !== -1 && startOfImages < nameIndex + 1000) {
      const endOfImages = fileContent.indexOf('],', startOfImages);
      if (endOfImages !== -1) {
        const oldImagesStr = fileContent.substring(startOfImages, endOfImages + 2);
        fileContent = fileContent.replace(oldImagesStr, imagesReplacement);
        console.log(`Replaced images array for ${nameInFile}`);
      } else {
        console.log(`Could not find end of images array for ${nameInFile}`);
      }
    } else {
      const highlightsIndex = fileContent.indexOf('highlights:', nameIndex);
      if (highlightsIndex !== -1) {
        const endOfHighlights = fileContent.indexOf('],', highlightsIndex);
        if (endOfHighlights !== -1) {
          const before = fileContent.substring(0, endOfHighlights + 2);
          const after = fileContent.substring(endOfHighlights + 2);
          fileContent = before + `\n  ${imagesReplacement}` + after;
          console.log(`Injected images array for ${nameInFile}`);
        }
      }
    }
  }

  fs.writeFileSync(dataFilePath, fileContent, 'utf8');
  console.log('All done!');
}

run();
