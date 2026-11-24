// Builds public/blog/wish-ledger.html from template.html plus the markdown ledgers in parts/.
// Also regenerates research.md (all ledgers in one file) and SOURCES.md (every link used).
// Run from anywhere: node research/wish-ledger/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const P = (f) => path.join(here, 'parts', f);
const read = (f) => fs.readFileSync(f, 'utf8');

/* ---------- markdown table parser ---------- */
function parseTables(md) {
  const out = {};
  let heading = 'top';
  const lines = md.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    const h = ln.match(/^##+\s+(.*)$/);
    if (h) { heading = h[1].trim(); continue; }
    if (ln.startsWith('|') && lines[i + 1] && /^\|\s*:?-{2,}/.test(lines[i + 1])) {
      const cols = splitRow(ln);
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].startsWith('|')) {
        const cells = splitRow(lines[i]);
        const o = {};
        cols.forEach((c, k) => { o[c] = (cells[k] || '').trim(); });
        rows.push(o);
        i++;
      }
      i--;
      (out[heading] = out[heading] || []).push(...rows);
    }
  }
  return out;
}
function splitRow(ln) {
  const s = ln.trim().replace(/^\|/, '').replace(/\|$/, '');
  return s.split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'));
}
const clean = (u) => u.replace(/[;,]+$/, '').replace(/\)$/, (m) => (u.includes('(') ? m : ''));
const allUrls = (s) => ((s || '').match(/https?:\/\/[^\s"<>|\\]+/g) || []).map(clean);
const firstUrl = (s) => allUrls(s)[0] || '';
const num = (s) => { const m = String(s || '').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null; };

/* ---------- tales ---------- */
const GROUP = {
  Greek: 'greek', Roman: 'greek',
  Norse: 'north', Celtic: 'north', Finnish: 'north',
  Slavic: 'slavic',
  Germanic: 'west', French: 'west', Danish: 'west', 'Medieval Europe': 'west', Jewish: 'west',
  Mesopotamian: 'nile', Egyptian: 'nile',
  Persian: 'arab', Arabian: 'arab',
  Indian: 'india',
  Chinese: 'east', Japanese: 'east', Korean: 'east',
  African: 'africa',
  Polynesian: 'ocean', Australian: 'ocean', Melanesian: 'ocean',
  'North American': 'namer',
  Mesoamerican: 'samer', 'South American': 'samer',
};
const taleFiles = ['tales-europe.md', 'tales-asia.md', 'tales-africa-oceania-americas.md'].filter((f) => fs.existsSync(P(f)));
const tales = [];
for (const f of taleFiles) {
  const t = parseTables(read(P(f)));
  for (const rows of Object.values(t)) for (const r of rows) {
    if (!r.wish || !r.tale_or_object) continue;
    let name = r.tale_or_object, flag = '';
    if (/^NON-TALE:/i.test(name)) { flag = 'real'; name = name.replace(/^NON-TALE:\s*/i, ''); }
    if (/\(DOUBTFUL\)/i.test(name)) { flag = 'doubtful'; name = name.replace(/\s*\(DOUBTFUL\)/i, ''); }
    const g = GROUP[r.culture];
    if (!g) { console.warn('no group for culture', r.culture, name); continue; }
    tales.push({
      w: r.wish.trim(), g, c: r.culture, p: r.people_or_language, n: name, d: r.what_it_does,
      s: r.earliest_written_source, y: num(r.year), la: num(r.lat), lo: num(r.lon),
      u: firstUrl(r.url), f: flag,
    });
  }
}

/* ---------- people ---------- */
const people = fs.existsSync(P('people.md')) ? parseTables(read(P('people.md'))) : {};
const images = fs.existsSync(P('images.md')) ? parseTables(read(P('images.md'))) : {};
const numbers = fs.existsSync(P('numbers.md')) ? parseTables(read(P('numbers.md'))) : {};
const linkify = (v) => typeof v === 'string'
  ? v.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (m, t, u) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`)
  : Array.isArray(v) ? v.map(linkify)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, linkify(x)]))
  : v;
const curatedRaw = JSON.parse(read(path.join(here, 'curated.json')));
const curated = linkify(curatedRaw);
// image credits: only files that were actually converted into the assets folder
const assetDir = path.join(root, 'public/blog/wish-ledger-assets');
const assets = fs.existsSync(assetDir) ? new Set(fs.readdirSync(assetDir)) : new Set();
const used = JSON.parse(read(path.join(here, 'images-used.json')));
const imgRows = Object.values(images).flat();
curated.credits = {};
for (const [file, opt] of Object.entries(used)) {
  const name = (opt.as || file.replace(/\.[a-z]+$/i, '')) + '.webp';
  const row = imgRows.find((r) => (r.file || '').trim() === file);
  if (!assets.has(name)) continue;
  if (!row || !row.credit_line) { console.warn('no credit for', file); continue; }
  const page = firstUrl(row.commons_or_source_page_url);
  curated.credits[name] = page ? `<a href="${page}" target="_blank" rel="noopener">${row.credit_line}</a>` : row.credit_line;
}
const peoples = new Set(tales.map((t) => t.p.split(/[\/(,;]/)[0].trim().toLowerCase()));

const DATA = { tales, curated };

/* ---------- inject ---------- */
const mapPath = read(path.join(here, 'map-path.txt')).trim();
let html = read(path.join(here, 'template.html'));
html = html.replace('/*__DATA__*/', 'const DATA = ' + JSON.stringify(DATA) + ';');
html = html.replace('__MAP_PATH__', mapPath);
// 53 raw labels, but several are one people under two names (Arabic, Chinese, Quechua, Mexica, Egyptian).
const N_PEOPLES = '40';
html = html.replaceAll('__N_TALES__', String(tales.length))
  .replaceAll('__N_PEOPLES__', 'more than ' + N_PEOPLES)
  .replaceAll('__N_LAG__', String(curated.lag.length))
  .replaceAll('__DATE__', 'November 24, 2026');
const left = html.match(/__[A-Z_]+__/g);
if (left) console.warn('unreplaced placeholders', left);
const outFile = path.join(root, 'public/blog/wish-ledger.html');
fs.writeFileSync(outFile, html);

/* ---------- research.md + SOURCES.md ---------- */
const order = ['tales-europe.md', 'tales-asia.md', 'tales-africa-oceania-americas.md', 'people.md', 'numbers.md', 'images.md'];
let research = '# The Wish Ledger: research ledger\n\nSource of truth for `public/blog/wish-ledger.html`. Edit the files in `parts/` (and `curated.json` for the hand-picked rows), then run `node research/wish-ledger/build.mjs`, which rebuilds the article, this file and `SOURCES.md`.\n\nCompiled 24 November 2026. Each row was checked against the page linked beside it. Rows marked UNVERIFIED or DOUBTFUL are either left out of the article or shown with that label.\n';
const urls = new Map();
for (const f of order) {
  if (!fs.existsSync(P(f))) continue;
  const md = read(P(f));
  research += '\n\n---\n\n' + md.replace(/^# /m, '## ').replace(/^## (?!The|Wish)/gm, '### ');
  for (const u of allUrls(md)) { if (!urls.has(u)) urls.set(u, f); }
}
for (const u of allUrls(JSON.stringify(curated))) { if (!urls.has(u)) urls.set(u, 'curated.json'); }
fs.writeFileSync(path.join(here, 'research.md'), research);
let src = '# The Wish Ledger: sources\n\nEvery link cited in the research ledger and the article, grouped by the ledger file it comes from. All accessed 24 November 2026. Local copies, where kept, are under `sources/` and `originals/` (not committed).\n';
for (const f of [...order, 'curated.json']) {
  const list = [...urls].filter(([, ff]) => ff === f).map(([u]) => u).sort();
  if (!list.length) continue;
  src += `\n## ${f}\n\n` + list.map((u) => `- ${u}`).join('\n') + '\n';
}
fs.writeFileSync(path.join(here, 'SOURCES.md'), src);

const byW = {};
tales.forEach((t) => { byW[t.w] = (byW[t.w] || 0) + 1; });
console.log('tales', tales.length, byW, 'peoples', peoples.size, [...peoples].join(' | '));
console.log('links', urls.size, 'html bytes', fs.statSync(outFile).size);
