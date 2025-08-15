const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const pngToIco = require('png-to-ico');

async function generateFavicons() {
  const inputFile = path.join(process.cwd(), 'public', 'Logo.png');
  const publicDir = path.join(process.cwd(), 'public');

  // Generate favicon-16x16.png
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

  // Generate temp 32x32 PNG for ICO conversion
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'temp-32x32.png'));

  // Convert PNG to ICO
  const icoBuffer = await pngToIco([path.join(publicDir, 'temp-32x32.png')]);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Clean up temp file
  await fs.unlink(path.join(publicDir, 'temp-32x32.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 