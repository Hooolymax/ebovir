# Ebovir Biotechnologie Inc. — Corporate Website

A premium, biotech corporate landing site for **Ebovir Biotechnologie Inc.**, built with
Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

This is **not** an e-commerce store. Product ordering links out to the existing
**EboGenes Shopify store** (https://ebogenes.com).

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (scroll/entrance animations)
- Fully responsive · SEO metadata · clean component structure

## Pages

| Route           | Page         |
| --------------- | ------------ |
| `/`             | Home         |
| `/our-company`  | Our Company  |
| `/our-science`  | Our Science  |
| `/platforms`    | Platforms    |
| `/contact`      | Contact      |

## Project structure

```
app/                 # routes (App Router) + layout + global CSS
components/           # shared UI (Navbar, Footer, Button, Reveal, SectionHeading…)
  home/              # homepage section components
  visuals/           # DNA helix, gradient orbs, line icons (decorative placeholders)
lib/content.ts       # SINGLE SOURCE OF TRUTH for all copy + links
```

## Content & accuracy

All factual copy is derived from **https://www.ebovir.ca/** (extracted June 2026)
and centralized in `lib/content.ts`. Anything not confirmed on ebovir.ca is flagged
with a **"Needs confirmation"** badge in the UI and a comment in the source — e.g.
the *EboMed AI Consultant* product name and detailed product descriptions. Update
`lib/content.ts` to refine wording or replace placeholders; no component edits needed.

Key external links live in `lib/content.ts → links`:

- EboGenes store: `https://ebogenes.com`
- Reference (factual source): `https://www.ebovir.ca`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to https://vercel.com/new and **Import** the repository.
3. Vercel auto-detects **Next.js** — no configuration needed:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output: handled automatically
4. Click **Deploy**. You'll get a `*.vercel.app` URL.
5. (Optional) Add a custom domain under **Project → Settings → Domains**
   (e.g. `www.ebovir.ca`) and follow the DNS instructions.

> If the repo root is not this folder (e.g. it's nested in a monorepo), set the
> **Root Directory** to this project's folder in Project Settings.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run: links/creates the project (preview deploy)
vercel --prod   # production deploy
```

### Notes

- No environment variables are required for the current build.
- `metadataBase` in `app/layout.tsx` is set to `https://www.ebovir.ca` — update it
  if you deploy under a different production domain so Open Graph URLs resolve correctly.
```
