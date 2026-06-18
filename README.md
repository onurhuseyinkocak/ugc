# Onur HK — UGC Creator Portfolio

Premium, static, single-page UGC portfolio for **Onur Hüseyin Koçak** (`@onurhuseyinkocak.ai`).
Built for brands to instantly understand the work and reach out. No backend — pure HTML/CSS/JS, GitHub Pages ready.

**Live:** https://onurhuseyinkocak.github.io/ugc/

## Structure

```
.
├── index.html              # all sections (hero → contact)
├── style.css               # premium dark theme, responsive
├── script.js               # scroll reveal, nav, stat count-up
├── README.md
└── assets/
    ├── favicon.svg
    ├── stats.json           # real IG stats snapshot
    ├── img/onur.jpg         # profile photo
    └── portfolio/
        ├── reel-1..5.jpg    # real reel thumbnails (downloaded)
        └── manifest.json    # id, permalink, caption per reel
```

## Sections
Hero · Social-proof strip · Live stats (real) · What I Create · Portfolio · Why Brands ·
Packages · Process · About · Contact.

## Real data, no fakes
- **Stats** (711 community · 22 videos · 1.4K+ comments · TR·EN) were pulled live from the
  `@onurhuseyinkocak.ai` account. No invented metrics, testimonials, or brand logos.
- **Portfolio** uses 5 real reels (thumbnails downloaded locally so they don't expire; cards
  link to the real Instagram reels) + 1 "English UGC — in production" slot.

## Replace / update content
- **Add a real video:** drop a 9:16 thumbnail in `assets/portfolio/`, then duplicate a
  `.reel` block in `index.html` (set the `href` to the reel URL, the `<img src>`, title,
  type, and hook).
- **English samples:** swap the `.reel-soon` card for a real `.reel` once shot.
- **Refresh stats:** edit the numbers in the `.stats` section of `index.html` (they animate
  via the `data-count` attribute).
- **Packages have no prices** by design — "Custom pricing based on scope."

## Deploy to GitHub Pages

Already deployed. To redeploy after changes:

```bash
git add -A
git commit -m "update"
git push
```

GitHub Pages serves the `main` branch root automatically (Settings → Pages → Source: `main` / `/`).

### First-time setup (if cloning fresh)
1. Create a public repo named `ugc`.
2. `git init && git add -A && git commit -m "init" && git branch -M main`
3. `git remote add origin https://github.com/<user>/ugc.git && git push -u origin main`
4. Settings → **Pages** → Source = **Deploy from a branch** → `main` / `/ (root)` → Save.
5. Live in ~1 min at `https://<user>.github.io/ugc/`.

### Custom domain (optional)
Add a `CNAME` file with your domain (e.g. `ugc.onurhuseyinkocak.com`) and point a DNS
CNAME record at `<user>.github.io`.

## Tech
Static HTML/CSS/JS · Google Fonts (Inter + Space Grotesk) · IntersectionObserver for reveal
animations · `prefers-reduced-motion` respected · fully responsive (mobile-first).
