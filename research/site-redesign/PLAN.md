# Site redesign: context and plan

Written 25 November 2026 as a handoff. It covers the React home page of vladbichev.com (`src/`). Read `CLAUDE.md` at the repo root first for the architecture and commands.

## What Vladimir asked for

In his words: the dark and light theme switcher was not working; he would be happy to reuse the "advanced libraries" he used for the MeetVector UI and the "more advanced libraries" in the Maivrix project, all reachable through his GitHub; "No need to copy color scheme, let's use top modern coloured but UI ux react libraries I think cool that I use in the project with effects"; "feel free to research them, provide recommendations, ask questions and redesign."

## Already done

- **The switcher bug is fixed and live** (commit `031bbfc`). Tailwind 4 ties `dark:` utilities to the OS setting by default, while `ThemeProvider` toggles a `.dark` class on `<html>`. `src/app/globals.css` now has `@custom-variant dark (&:where(.dark, .dark *));`. Both directions were checked in the browser.
- **The preview config `site-dev` in `.claude/launch.json` runs `next start`,** which serves the last production build. Run `npm run build` before previewing, or the browser shows stale CSS. This cost time once.

## What the two reference projects use

Read through `gh` (both need his login): MeetVector is `Bichev/jax-bridges-graph` (Vite, JSX); Maivrix is `maivrix/maivrix` (Vite, TypeScript, shadcn/ui), with a separate `landing/` package.

| | MeetVector | Maivrix |
|---|---|---|
| Components | Radix primitives (dialog, select, tabs, tooltip), hand-built | Full shadcn/ui set on Radix, `class-variance-authority`, `tailwind-merge` |
| Themes | Own "ink" and "paper" themes in `src/utils/theme.js`: localStorage plus a cookie, and an inline script in `index.html` to prevent a flash | `next-themes` |
| Motion | `framer-motion` | `framer-motion`; `gsap` in `landing/` |
| Effects | `@tsparticles/react`, `three`, `react-force-graph-2d/3d`, `simplex-noise`; custom `src/components/ui/NetworkBackground.jsx`, `AnimatedStat.jsx`, `TypewriterText.jsx`, `AIThinkingAnimation.jsx` | `@number-flow/react`, `embla-carousel-react` |
| Extras | `lucide-react`, `recharts`, `d3` | `cmdk`, `sonner`, `vaul`, `recharts`, TanStack Query and Table |
| Fonts | Instrument Sans, Instrument Serif, JetBrains Mono (fontsource) | not checked |

Only the dependency lists, the component folder listings and `theme.js` were read. The effect components themselves were not opened; read them before borrowing their approach.

## This site today

- Next.js 16 App Router, React 19, Tailwind 4, `framer-motion`, `react-icons`, `react-hot-toast`.
- One page, `src/app/page.tsx`, built from `src/components/`: `Navigation`, `HeroSection`, `AboutSection`, `ProjectsSection`, `BlogSection`, `InterestsSection`, `ContactSection`, plus hand-written `Button`, `Card` and `ThemeProvider`. About 1,500 lines in all.
- Content lives in `src/lib/constants.ts`. Keep copy there.
- Colours are hard-coded as hex inside class names (around 125 occurrences), next to CSS variables in `globals.css` that are mostly unused by the components.
- `ThemeProvider` sets the theme in an effect after hydration, so a visitor whose saved theme is light sees a dark flash first.

## Recommended stack

1. **`next-themes`** in place of the custom `ThemeProvider`: saved choice, OS default on first visit, no flash.
2. **shadcn/ui on Radix with `lucide-react`** for buttons, cards, navigation menu, tooltips and sheet, replacing the hand-written `Button` and `Card`. Move the hex values into design tokens so both themes are defined in one place.
3. **`framer-motion`** stays for scroll reveals. Add **`@number-flow/react`** for the stats.
4. **One signature effect in the hero,** as a light 2D canvas. Not `three`: a 3D scene is heavy for a personal site and for phones. Respect `prefers-reduced-motion`.
5. **`cmdk`** command palette for jumping to projects and articles.

Skip `gsap` (framer-motion covers it) and tsParticles (the canvas effect replaces it).

## Open questions for Vladimir

He has seen these and has not answered. Ask before designing; the recommendation is listed first.

1. **Scope.** Home page only (recommended), or also bring the standalone article pages in `public/blog/` under the same switcher? The articles are dark by design and each is one self-contained HTML file.
2. **Colour.** Keep amber on near-black as the signature and add a fresh accent layer (recommended, because the articles and galleries all use amber), or a new palette altogether? He said there is no need to copy a colour scheme and asked for modern colour.
3. **Hero effect.** A network of drifting nodes like MeetVector's, matching the knowledge-graph work in the portfolio (recommended), or something tied to his writing, such as a field of points that reacts to the cursor?

## Plan

1. Ask the three questions. Read `NetworkBackground.jsx` in MeetVector and a few of Maivrix's `src/components/ui/` files for how he likes these built.
2. Install `next-themes`; replace `ThemeProvider`; confirm no flash on a hard reload in each theme.
3. Initialise shadcn/ui for Tailwind 4; define light and dark tokens in `globals.css`; replace hard-coded hex classes section by section.
4. Rebuild `Navigation` (menu, mobile sheet, switcher, command palette) and `HeroSection` (effect, type, calls to action).
5. Restyle `ProjectsSection`, `BlogSection`, `AboutSection`, `InterestsSection`, `ContactSection` on the new primitives. Blog cards render in array order; keep that.
6. Check every section in both themes at desktop and 375px width, with reduced motion on and off. The galleries and articles must still open from their cards.
7. `npm run lint` and `npm run build`.

## Constraints

- Pushing to `main` deploys to production. Do this work on a branch and show Vladimir before merging; a redesign should not go live unseen.
- Another session is editing the Wish Ledger article at the same time: `research/wish-ledger/`, `public/blog/wish-ledger.html`, `public/blog/linkedin-wish-ledger.md`, and occasionally the `wish-ledger` entry in `src/lib/constants.ts`. Do not touch those files. If `constants.ts` must change, change only what the redesign needs and expect a merge.
- Do not touch `public/` standalone pages unless he answers question 1 with "also the articles".
- He dislikes middle dots (·) and inline bullets as separators in interface text; the blog card date line was changed to a comma for that reason. Text written for the site follows the `vlad-voice` skill.
- Screenshots do not belong in the repo.
