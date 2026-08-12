// generate-ico.mjs
// Generates a minimal 32x32 ICO file with a "Y" on dark background
// using raw bitmap manipulation (no external deps)
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const SIZE = 32;
// Create RGBA pixel buffer
const pixels = new Uint8Array(SIZE * SIZE * 4);

// Fill background #141414
for (let i = 0; i < SIZE * SIZE; i++) {
  pixels[i * 4 + 0] = 0x14; // R
  pixels[i * 4 + 1] = 0x14; // G
  pixels[i * 4 + 2] = 0x14; // B
  pixels[i * 4 + 3] = 0xFF; // A
}

// Draw "Y" shape in #3B82F6 using pixel drawing
// Y letter bounding box: x=8..23, y=4..27 in a 32x32 grid
const BLUE_R = 0x3B, BLUE_G = 0x82, BLUE_B = 0xF6;

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) return;
  const idx = (y * SIZE + x) * 4;
  pixels[idx] = r;
  pixels[idx + 1] = g;
  pixels[idx + 2] = b;
  pixels[idx + 3] = 0xFF;
}

function drawLine(x0, y0, x1, y1, thickness = 3) {
  const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let x = x0, y = y0;
  const half = Math.floor(thickness / 2);
  while (true) {
    for (let tx = -half; tx <= half; tx++) {
      for (let ty = -half; ty <= half; ty++) {
        setPixel(x + tx, y + ty, BLUE_R, BLUE_G, BLUE_B);
      }
    }
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x += sx; }
    if (e2 < dx) { err += dx; y += sy; }
  }
}

// Y: two diagonal lines from top to center, then vertical down
// Left arm: (7,4) -> (15,14)
drawLine(7, 4, 15, 14, 3);
// Right arm: (25,4) -> (15,14)
drawLine(25, 4, 15, 14, 3);
// Vertical stem: (15,14) -> (15,27)
drawLine(15, 14, 15, 27, 3);

// === ICO file format ===
// ICO header: 6 bytes
// Directory entry: 16 bytes
// BMP DIB header (BITMAPINFOHEADER): 40 bytes
// Pixel data (32x32x4 = 4096 bytes) - stored bottom-up
// AND mask (32x32/8 = 128 bytes)

const dibHeader = Buffer.alloc(40);
dibHeader.writeUInt32LE(40, 0);          // header size
dibHeader.writeInt32LE(SIZE, 4);         // width
dibHeader.writeInt32LE(SIZE * 2, 8);     // height * 2 (includes AND mask)
dibHeader.writeUInt16LE(1, 12);          // color planes
dibHeader.writeUInt16LE(32, 14);         // bits per pixel
dibHeader.writeUInt32LE(0, 16);          // compression (none)
dibHeader.writeUInt32LE(SIZE * SIZE * 4, 20); // image data size
dibHeader.writeInt32LE(0, 24);           // x pixels per meter
dibHeader.writeInt32LE(0, 28);           // y pixels per meter
dibHeader.writeUInt32LE(0, 32);          // colors in table
dibHeader.writeUInt32LE(0, 36);          // important colors

// Pixel data (bottom-up, BGRA)
const pixelData = Buffer.alloc(SIZE * SIZE * 4);
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const srcIdx = (y * SIZE + x) * 4;
    const dstRow = SIZE - 1 - y;
    const dstIdx = (dstRow * SIZE + x) * 4;
    pixelData[dstIdx + 0] = pixels[srcIdx + 2]; // B
    pixelData[dstIdx + 1] = pixels[srcIdx + 1]; // G
    pixelData[dstIdx + 2] = pixels[srcIdx + 0]; // R
    pixelData[dstIdx + 3] = pixels[srcIdx + 3]; // A
  }
}

// AND mask (all 0 = fully opaque)
const andMask = Buffer.alloc(SIZE * SIZE / 8, 0x00);

const imageData = Buffer.concat([dibHeader, pixelData, andMask]);
const imageDataSize = imageData.length;

// ICO header
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);    // reserved
icoHeader.writeUInt16LE(1, 2);    // type: 1 = ICO
icoHeader.writeUInt16LE(1, 4);    // number of images

// Directory entry
const dirEntry = Buffer.alloc(16);
dirEntry[0] = SIZE;               // width (0 = 256)
dirEntry[1] = SIZE;               // height
dirEntry[2] = 0;                  // color count
dirEntry[3] = 0;                  // reserved
dirEntry.writeUInt16LE(1, 4);     // color planes
dirEntry.writeUInt16LE(32, 6);    // bits per pixel
dirEntry.writeUInt32LE(imageDataSize, 8);   // size of image data
dirEntry.writeUInt32LE(6 + 16, 12);         // offset to image data (header + 1 dir entry)

const ico = Buffer.concat([icoHeader, dirEntry, imageData]);
const outPath = join(rootDir, 'app', 'favicon.ico');
writeFileSync(outPath, ico);
console.log(`✓ Written app/favicon.ico (${ico.length} bytes)`);
