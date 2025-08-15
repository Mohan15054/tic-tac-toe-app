This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Preview

GitHub Pages: https://Mohan15054.github.io/mohan-dev-site

> If the link 404s right after a fresh deploy, wait ~1 minute and hard refresh (GitHub Pages cache).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This repo is configured for static export + GitHub Pages.

### One‑time setup
1. Ensure the repository is public (or enable Pages for a private repo with a plan).
2. In GitHub: Settings > Pages: select the `gh-pages` branch (will appear after first deploy) and `/ (root)` folder.
3. Save.

### Deploy
```bash
npm install
npm run pages:deploy
```
This runs `next build && next export` (output to `out/`) and publishes that folder to the `gh-pages` branch using `gh-pages`.

### How it works
- `next.config.mjs` sets `output: 'export'`, disables image optimization, and adds `basePath` & `assetPrefix` in production.
- The `homepage` field in `package.json` and the basePath use the repo name `Mohan15054`.
- Assets are served from `https://Mohan15054.github.io/Mohan15054/_next/...`.

### Notes / Gotchas
- Client‑side routing works, but direct deep links require the exported HTML file; avoid dynamic routes needing server logic.
- Incremental static regeneration and server actions aren't supported with `next export`.
- If you rename the repository, update `repoName` in `next.config.mjs` and the README link.

## (Alternative) Deploy on Vercel

You can still deploy on Vercel for full Next.js features (SSR, ISR, etc.). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
