# Vladimir Bichev — Personal Site

Source for [vladbichev.com](https://vladbichev.com): a personal site, a long-form blog, and two galleries of interactive computational art.

## What's here

The repo has two layers.

**1. The Next.js shell (`src/`)** — a single-page site with a dark editorial look, light/dark toggle, and these sections: Hero, About, Projects, Blog ("Latest Insights"), Interests, Contact. Nearly all copy and data comes from one file, `src/lib/constants.ts`.

**2. Standalone pages (`public/`)** — self-contained HTML files with inline CSS and JS, served as static assets with no build step:

| Path | What it is |
| --- | --- |
| `/algoart/` | **AlgoArt** — 12 interactive algorithmic art pieces (Lorenz attractor, boids, reaction-diffusion, L-systems, Game of Life and more), each with a write-up of the mathematics |
| `/ficciones/` | **Ficciones** — 12 interactive pieces based on the stories in Jorge Luis Borges' *Ficciones* |
| `/blog/*.html` | Long-form articles: *Fat Tails*, *Anatomy of a Gold Rush*, *Soul as Interface*, *Humans vs AI Agents*, *The Prince & The AI Revolution* (plus its flowchart) |

## Tech stack

- **Framework**: Next.js 16 (App Router, Turbopack in dev), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter, Cormorant Garamond, JetBrains Mono (via `next/font`)
- **Hosting**: Vercel

## Project structure

```
personal-brand/
├── src/
│   ├── app/                 # layout.tsx (metadata, fonts), page.tsx, globals.css
│   ├── components/          # Navigation, *Section components, Card, Button, ThemeProvider
│   ├── hooks/               # useActiveSection
│   ├── lib/
│   │   ├── constants.ts     # all site content: bio, projects, blog list, nav, contacts
│   │   └── utils.ts
│   └── types/index.ts       # Project, BlogPost, ContactInfo, ...
├── public/
│   ├── algoart/             # gallery index, 12 pieces, gallery-nav.js
│   ├── ficciones/           # gallery index, 12 pieces, gallery-nav.js
│   ├── blog/                # article HTML, per-article asset folders, LinkedIn drafts
│   ├── projects/            # project card images
│   └── interests/           # interests section photos
├── scripts/
│   └── generate-pdf.mjs     # builds the one-page blog promo PDF
├── next.config.ts           # rewrites for /algoart and /ficciones
└── vercel.json
```

## Getting started

```bash
git clone https://github.com/Bichev/personal-brand.git
cd personal-brand
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `node scripts/generate-pdf.mjs` — render the promo flyer (with a QR code to the site) to `public/blog/vladbichev-blog-promo.pdf` using Puppeteer

## Adding content

### Site copy, projects, navigation

Edit `src/lib/constants.ts`. The matching types are in `src/types/index.ts`.

### A blog article

1. Add the article as a self-contained HTML file in `public/blog/` (for example `public/blog/my-post.html`). Put its images in a sibling folder such as `public/blog/my-post-assets/`.
2. Add an entry at the top of `BLOG_POSTS` in `src/lib/constants.ts` with `source: 'internal'` and `localPath: '/blog/my-post.html'`. Cards appear in array order.

Posts published elsewhere (LinkedIn) use `url` instead of `localPath`.

### A gallery piece

1. Add the piece's HTML file to `public/algoart/` or `public/ficciones/`.
2. Add it to the `GALLERY` array in that folder's `gallery-nav.js` (this drives previous/next navigation).
3. Add a card for it in that folder's `index.html`.

A new top-level static section needs its own rewrite in `next.config.ts` so the bare path resolves to its `index.html`.

## Deployment

The site is deployed on Vercel. Pushing to `main` deploys to production.

## Contact

- **Email**: vl.bichev@gmail.com
- **LinkedIn**: [vladimir-bichev-383b1525](https://www.linkedin.com/in/vladimir-bichev-383b1525/)
- **GitHub**: [Bichev](https://github.com/Bichev)
- **X**: [@_bichev](https://x.com/_bichev)
