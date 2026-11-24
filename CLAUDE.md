# CLAUDE.md

Personal site for Vladimir Bichev, live at https://vladbichev.com. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4, hosted on Vercel.

## Architecture: two layers

1. **Next.js shell (`src/`)** — one page (`src/app/page.tsx`) composed of section components in `src/components/`. Content is data-driven: `src/lib/constants.ts` holds the bio, projects, blog list, navigation and contact info; types are in `src/types/index.ts`. Change copy there, not in the components.
2. **Standalone HTML (`public/`)** — `public/algoart/`, `public/ficciones/` and `public/blog/` contain hand-built, self-contained HTML pages (inline CSS and JS, external libraries from CDNs). They are served as static files and are not part of the React build. Most new work happens here.

`next.config.ts` rewrites `/algoart` and `/ficciones` to their `index.html`. A new top-level static section needs the same rewrite, or the bare path will 404.

## Commands

- `npm run dev` — dev server with Turbopack, http://localhost:3000
- `npm run build` — production build (run before pushing changes to `src/`)
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`; `public/` is ignored because the standalone pages are not part of the React app)
- `node scripts/generate-pdf.mjs` — regenerates `public/blog/vladbichev-blog-promo.pdf` (Puppeteer + QR code)

There is no test suite. Verify changes by loading the page in the browser, including a phone-width viewport; the galleries have had several mobile-only bugs.

## Publishing a blog article

1. Write `public/blog/<slug>.html` as a single self-contained file. Use an existing article (for example `public/blog/fat-tails.html`) as the template for head metadata (canonical, Open Graph, Twitter), fonts, CSS variables and the back-navigation bar.
2. Put images in `public/blog/<slug>-assets/`.
3. Add an entry at the top of `BLOG_POSTS` in `src/lib/constants.ts`: `source: 'internal'`, `localPath: '/blog/<slug>.html'`, `published: true`. Cards render in array order, not by date.
4. Optional: a LinkedIn announcement draft as `public/blog/linkedin-<slug>.md`.

## Adding a gallery piece

Each gallery (`public/algoart/`, `public/ficciones/`) has an `index.html` and a `gallery-nav.js` with a `GALLERY` array that drives previous/next navigation. A new piece needs three things: its HTML file, an entry in `GALLERY`, and a card in `index.html`. Pieces load the nav with an absolute path (`/algoart/gallery-nav.js`); keep links absolute.

## Visual language

Dark editorial with amber accents. Keep new pages consistent with it:

- Background near-black (`#0a0a12` in the shell, `#0a0a0f` in articles), warm off-white text
- Amber/gold accent (`#c9a84c` in the shell, `#c9a227` in articles)
- Cormorant Garamond for headings, Inter for body, JetBrains Mono for metadata and labels
- Articles favor readable body text: capped prose width, generous size, high-contrast muted text

## Conventions

- Commit messages follow the existing history: `blog(<slug>): ...`, `ficciones(<piece>): ...`, `fix: ...`, `docs: ...`, lowercase, imperative.
- Work is committed directly to `main`; pushing to `main` deploys to production on Vercel.
- Screenshots taken while checking work do not belong in the repo. Root-level `*.png` is gitignored; delete them when done.
- `blog_old/`, `.cursor/` and `.playwright-mcp/` are gitignored local leftovers. Do not reference or revive them.
