const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(process.cwd(), 'public', 'Logo.png');
  const publicDir = path.join(process.cwd(), 'public');

  // Generate favicon.ico (16x16)
  await sharp(inputFile)
    .resize(16, 16)
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // Generate favicon-32x32.png
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // Generate apple-touch-icon.png (180x180)
  await sharp(inputFile)
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate favicon.ico
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 