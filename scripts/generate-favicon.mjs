// generate-favicon.mjs
// Generates a premium "Y" favicon as SVG and embeds into app/favicon.ico placeholder
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Generate SVG favicon
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#141414"/>
  <text
    x="32"
    y="46"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="42"
    text-anchor="middle"
    fill="#3B82F6"
    letter-spacing="-1"
  >Y</text>
</svg>`;

writeFileSync(join(rootDir, 'public', 'favicon.svg'), svg, 'utf8');
console.log('✓ Written public/favicon.svg');
console.log('Done! Add favicon.svg to layout.tsx icons config.');
