// Converts research/wish-ledger/originals/* to WebP in public/blog/wish-ledger-assets/.
// Only files named in the USE list are converted, so the public folder holds exactly what the article shows.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, 'originals');
const out = path.resolve(here, '../../public/blog/wish-ledger-assets');
fs.mkdirSync(out, { recursive: true });
const use = JSON.parse(fs.readFileSync(path.join(here, 'images-used.json'), 'utf8'));
for (const [file, opt] of Object.entries(use)) {
  const f = path.join(src, file);
  if (!fs.existsSync(f)) { console.warn('missing', file); continue; }
  const name = (opt.as || file.replace(/\.[a-z]+$/i, '')) + '.webp';
  let im = sharp(f).rotate();
  if (opt.crop) im = im.extract(opt.crop);
  im = im.resize({ width: opt.w || 1200, height: opt.h, fit: opt.h ? 'cover' : 'inside', position: opt.pos || 'attention', withoutEnlargement: true });
  const info = await im.webp({ quality: opt.q || 74 }).toFile(path.join(out, name));
  console.log(name, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
}
