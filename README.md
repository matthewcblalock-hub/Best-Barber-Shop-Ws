# Best Barber Shop — Website

Single-page site for Best Barber Shop, a traditional walk-in barbershop in North Durham, NC.
React + TypeScript + Tailwind CSS + Vite, with Lucide icons.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Launch on GitHub Pages

The repo includes `.github/workflows/deploy.yml`. Every push to `main` builds the site and publishes it automatically, so there's nothing to install or configure.

1. Create a new repository on github.com. Don't add a README, .gitignore or license.
2. Put this folder in it. The easiest way is [GitHub Desktop](https://desktop.github.com): **File → Add Local Repository**, pick this folder, choose "create a repository", then **Publish repository**. It skips `node_modules` and `dist` automatically. (Don't drag the folder into GitHub's web uploader, because `node_modules` holds thousands of files.)
3. On GitHub, open the repo's **Settings → Pages**, and under **Source** choose **GitHub Actions**.
4. Open the **Actions** tab and wait for the "Deploy to GitHub Pages" run to turn green (about a minute). If it ran before step 3 and failed, click it and choose **Re-run all jobs**.
5. The site is live at `https://<your-username>.github.io/<repo-name>/`.

After that, any change you push goes live on its own.

**Custom domain (optional):** in **Settings → Pages → Custom domain**, enter the domain and follow GitHub's DNS instructions. Then replace the placeholder domain in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Before launch — fill in verified details

Everything unverified is a placeholder. Nothing was copied from other "Best Barber Shop" listings.

| What | Where |
| --- | --- |
| Street address, Google Maps link and embed, Google reviews link, social profiles | `src/data/business.ts` |
| Service prices (currently "Ask in shop") | `price` fields in `src/data/content.ts` |
| Daniel's real photo (currently a labeled placeholder) | `DANIEL_PHOTO` in `src/components/MeetTheBarber.tsx` |
| Real shop photography (currently representative Unsplash photos) | `photos` and `gallery` in `src/data/content.ts`; remove the "Representative photography" note in `PhotoGallery.tsx` once replaced |
| Live domain | `index.html` (canonical, og:url, JSON-LD), `public/robots.txt`, `public/sitemap.xml` |
| Structured data: street address, postal code, map | JSON-LD block in `index.html` |
| Confirm the walk-in policy is still current | FAQ copy in `src/data/content.ts`, `walkInsOnly` in `business.ts` |

Until a Maps link is set, "Directions" opens a Google Maps search, which could surface a similarly named business. Replace it with the verified listing URL.

Review cards show quote marks rather than star ratings because no verified rating has been supplied.

## Brand assets

- `public/brand/logo-dark.svg`, `public/brand/logo-light.svg` — wordmark for dark and light backgrounds
- `public/favicon.svg` — "B" emblem
- In-site wordmark: `src/components/Logo.tsx`
- Colors and fonts: `tailwind.config.js` (Playfair Display headlines, Manrope body)
