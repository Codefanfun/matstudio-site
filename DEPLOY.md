# Deploying MATstudio

This is a static React + Vite site. You can host it for free on any static host and point your own domain to it.

> **No Cloudflare requirement:** every option below uses a host/CDN that is not Cloudflare, matching the project constraint.

## Build it

```bash
npm install
npm run build
```

The `dist/` folder is what you upload/publish.

## Current deployment: GitHub Pages

The live sites are currently served from GitHub Pages:

- **Direct host:** <https://codefanfun.github.io/matstudio-site/>
- **Framer front-end:** <https://mat-studio.framer.media>

GitHub Pages uses Fastly, not Cloudflare, and is free.

### Quick re-deploy

If you have the GitHub CLI authenticated, you can update the live site with one command:

```powershell
.\deploy-github-pages.ps1
```

This rebuilds, copies `dist/` to a temporary `gh-pages` branch, and force-pushes it.

### How it works

1. [vite.config.ts](vite.config.ts) sets `base: '/matstudio-site/'` for production builds and preview, while keeping `/` for local dev.
2. `npm run build` outputs the site to `dist/` with asset paths rooted at `/matstudio-site/`.
3. The contents of `dist/` are pushed to the `gh-pages` branch of [Codefanfun/matstudio-site](https://github.com/Codefanfun/matstudio-site).
4. GitHub Pages serves that branch at `https://codefanfun.github.io/matstudio-site/`.
5. The Framer project loads the site via the custom-code iframe in [custom-code.js](custom-code.js), and `framer.publish()` makes it available at `mat-studio.framer.media`.

### Manual first-time setup

If you want to recreate the deployment under your own GitHub account:

1. Create a public repo named `matstudio-site`.
2. In this project, make sure `vite.config.ts` uses `base: '/matstudio-site/'` for production.
3. Publish the `dist/` folder to a `gh-pages` branch (any of these work):
   - Use the included `deploy-github-pages.ps1` script.
   - Drag-and-drop `dist/` contents via the GitHub UI to a `gh-pages` branch.
   - Push from a fresh git checkout:

     ```powershell
     npm run build
     cd dist
     git init
     git remote add origin https://github.com/YOUR_USER/matstudio-site.git
     git checkout -b gh-pages
     git add .
     git commit -m "Deploy"
     git push -f origin gh-pages
     ```

4. In the repo **Settings > Pages**, set source to the `gh-pages` branch and root `/`.
5. The site appears at `https://YOUR_USER.github.io/matstudio-site/`.
6. (Optional) Add a custom domain and a `CNAME` file with that domain.

## Alternative hosts

### Surge.sh (CLI, no pre-signup, no Cloudflare)

The account is created in the terminal during your first deploy.

```powershell
npm run build
npx surge dist
```

Follow the prompts to enter an email and password, accept or edit the `*.surge.sh` subdomain, and the site goes live. After first deploy you can generate a token for non-interactive publishes:

```powershell
npx surge token
$env:SURGE_LOGIN = "you@example.com"
$env:SURGE_TOKEN = "<token>"
npx surge dist --project ./dist --domain matstudio.surge.sh
```

### Netlify Drop (no signup, but may be restricted)

Netlify hosts on its own CDN (not Cloudflare) and supports drag-and-drop deploys.

1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the `dist/` folder onto the drop zone and get a `*.netlify.app` URL.

> **Note:** From this environment, Netlify Drop produced password-protected URLs, so GitHub Pages was used instead.

### Vercel (free, no Cloudflare)

Vercel uses its own edge network, not Cloudflare.

1. Import the repo on [vercel.com](https://vercel.com).
2. Framework preset: `Vite`.
3. Root directory: `/`.
4. Deploy and add a custom domain from **Settings > Domains**.

## Updating the Framer embed

If you keep `mat-studio.framer.media` as the public URL, update the iframe `src` in [custom-code.js](custom-code.js) to your new host, then apply and publish:

```powershell
$expr = Get-Content -Raw custom-code.js
npx @framer/agent exec -s 1 -e $expr
npx @framer/agent exec -s 1 -e "await framer.publish()"
```

Alternatively, point the custom-code iframe directly to the Netlify/Surge/GitHub Pages URL generated above.

## Free domain options (no Cloudflare)

You do **not** need to buy a domain to go live. Every host above gives you a free subdomain. If you want a custom domain, these are the best no-Cloudflare options:

| Option | Cost | Notes | Cloudflare? |
| --- | --- | --- | --- |
| `*.netlify.app` | Free | Included with Netlify Drop / Netlify deploys. Cleanest option right now. | No |
| `*.surge.sh` | Free | Included with Surge deploys. You can pick the subdomain on first deploy. | No |
| `*.github.io` | Free | Included with GitHub Pages. Good if you already use GitHub. | No |
| `*.vercel.app` | Free | Included with Vercel deploys. | No |
| Freenom `.tk` / `.ml` / `.ga` / `.cf` / `.gq` | Free | Free "tier" domains; reports of suspended/revoked domains are common. Use only for experiments. | No |
| InfinityFree subdomain | Free | Free hosting + a free `*.epizy.com` or `*.infinityfreeapp.com` subdomain. Ads on free tier. | No |
| AwardSpace free hosting | Free | Includes a free `*.atwebpages.com` or `*.r1.host` subdomain. | No |

### If you already own a domain

Point the DNS records to your chosen host rather than Cloudflare:

- **Netlify:** Add the domain in the site settings → Netlify will tell you the DNS records to create with your registrar.
- **Surge:** Create a `CNAME` file containing your domain (e.g. `matstudio.com`) and redeploy; then point a `CNAME` record to `na-west1.surge.sh`.
- **GitHub Pages:** Add a `CNAME` file with your domain and point an `ALIAS`/`ANAME` or `CNAME` record to `<user>.github.io`.
- **Vercel:** Add the domain in project settings → Vercel provides the required DNS records.

Recommended registrars (no Cloudflare needed): Porkbun, Namecheap, Google Domains. Cloudflare Registrar does not qualify because it is Cloudflare.

## Replacing placeholder content

| File | What to change |
| --- | --- |
| `src/components/Hero.tsx` | Hero label, headline, subheadline, CTA buttons |
| `src/components/Projects.tsx` | Project titles, categories, descriptions, gradients |
| `src/components/Studio.tsx` | Studio text, manifesto quote, stats |
| `src/components/Footer.tsx` | Contact email, phone, location, footer CTA |
| `index.html` | Page `<title>` and meta description |
| `src/index.css` | Brand colors under `@theme` |

Drop real project stills into `public/` and reference them as `/my-image.jpg` in the component `src` attributes.
