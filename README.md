# Onur Hüseyin Koçak — Tech UGC portfolio

Live: https://ugc-onur.vibecodingturkey.com/

Static English/Turkish portfolio for AI, SaaS and app brands. The sponsored portfolio contains only Brantial and Mostdomain. Editorial carousels are labelled separately. All measurements are dated Meta API data; no conversion, annual-total or ranking claims are inferred.

## Build and checks

```sh
node scripts/build-creator.mjs
node --test scripts/test-creator.mjs
node scripts/prepare-site.mjs
node scripts/verify-public.mjs
```

Publishing is an allowlist (`scripts/public-files.mjs`): the generated pages, the assets they reference, the generated discovery files, the rate card and the search-engine verification files. Everything else in the repository, including the legacy answer archives, old media and internal notes, is not published. `verify-public` fails if any other file reaches the output or if retired offers, unevidenced sponsors or undated figures appear in it. `/services/*` and `/ai-cevaplar/` are permanent redirects in `vercel.json`, which also sets the security headers. No server function is added.

## Data refresh

`node scripts/sync-creator.mjs` uses the existing `INSTAGRAM_PAGE_TOKEN` secret, or the registered local account file in memory. It checks the exact account and post owners, bounds request count and Meta usage, and preserves the previous snapshot on failure. Never print credentials.

The snapshot also carries three carousels and three Reels as an editorial showcase, never as client results or account-wide rankings. Only posts listed in `approved` in `scripts/build-creator.mjs` are measured and shown; add a post there only after a person has checked that its cover has no third-party people, logos or political imagery. The published copy of the snapshot is reduced to figures, links and approved titles.

The daily GitHub workflow refreshes the snapshot, rebuilds the pages and discovery files, checks the exact output and commits everything together; that commit deploys like any other, so the live site is rebuilt once a day. The page reads its figures from its own origin and does not depend on the repository being public.

## Rates and rights

Reel: 300 USD. Carousel: 100 USD. Scope and publication channel are agreed in writing. Paid ads and extra usage are separately licensed. Current HTML, AI profile and PDF use the same prices.

Design: `creator.css` and `creator.js` are hand-written (no framework, no gradients). Display type is Archivo (variable width and weight), body type is Manrope; both are self-hosted under OFL in `assets/fonts/`. Sponsor logos in `assets/brands/` come from the brands' own sites. `assets/craft/` holds captures of the owner's own product (Promtable).

Niche pages (`/ai-saas-ugc-creator/`, `/mobile-app-ugc-creator/`, `/bangkok-ugc-creator/`, `/usage-rights/`) are generated with their own evidence, FAQ and structured data. `llms.txt`, `llms-full.txt`, the AI profile, FAQ, answers, entity file and sitemap are written whole by the generator from the dated snapshot; do not edit them by hand. `robots.txt` is a static file.

PDF source: `scripts/build-rate-card.py` (ReportLab and fontTools); Manrope is included under OFL. The PDF is committed, so Vercel does not need Python.

Research and the 2,000 unvalidated query/prompt candidates are internal under `docs/seo/2026-10-30/`. They are not public doorway pages or claimed rankings.
