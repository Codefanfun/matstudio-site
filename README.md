# MATstudio

A Pixar-style landing page for MATstudio, built with React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Live site

- **Framer front-end:** <https://mat-studio.framer.media>
- **GitHub Pages host:** <https://codefanfun.github.io/matstudio-site/>

The Framer site embeds the React app hosted on GitHub Pages, so the site works without Cloudflare.

## Quick start

```bash
npm install
npm run dev
```

Edit content in `src/components/*.tsx` and color tokens in `src/index.css`.

## Deploy / update

Run the included PowerShell script to rebuild and push to GitHub Pages:

```powershell
.\deploy-github-pages.ps1
```

See [DEPLOY.md](./DEPLOY.md) for the full deployment story, plus alternative free no-Cloudflare hosts (Surge, Vercel, Netlify Drop) and how to connect a custom domain.

## Project structure

- `src/components/Nav.tsx` — sticky navigation
- `src/components/Hero.tsx` — cinematic hero section
- `src/components/Projects.tsx` — featured work grid
- `src/components/Studio.tsx` — studio manifesto + stats
- `src/components/Footer.tsx` — contact CTA + footer
- `src/components/Starfield.tsx` — animated starfield background
- `src/index.css` — Tailwind theme + custom keyframes
