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

The static output excludes internal research, scripts and repository metadata. Existing public archives remain available. No server function is added.

## Data refresh

`node scripts/sync-creator.mjs` uses the existing `INSTAGRAM_PAGE_TOKEN` secret, or the registered local account file in memory. It checks the exact account and post owners, bounds request count and Meta usage, and preserves the previous snapshot on failure. Never print credentials.

The snapshot also carries three carousels and three Reels as an editorial showcase, never as client results or account-wide rankings. The selection is fixed between runs; `RESELECT=1 node scripts/sync-creator.mjs` re-picks it (by views, from the six most-engaged recent posts per format) and must be followed by a rebuild and deploy. Set `INSTAGRAM_GRAPH_BASE=https://graph.instagram.com/v23.0/` when the credential is an Instagram-login token.

The existing daily GitHub workflow updates the fixed public snapshot. Its exact metrics-only commit message is excluded from full Vercel builds. The production page reads the updated public snapshot with validated numeric values and dated fallback. No background polling runs in the browser.

## Rates and rights

Reel: 300 USD. Carousel: 100 USD. Scope and publication channel are agreed in writing. Paid ads and extra usage are separately licensed. Current HTML, AI profile and PDF use the same prices.

Design: `creator.css` and `creator.js` are hand-written (no framework, no gradients). Display type is Archivo (variable width and weight), body type is Manrope; both are self-hosted under OFL in `assets/fonts/`. Sponsor logos in `assets/brands/` come from the brands' own sites. `assets/craft/` holds captures of the owner's own product (Promtable).

Niche pages (`/ai-saas-ugc-creator/`, `/mobile-app-ugc-creator/`, `/bangkok-ugc-creator/`, `/usage-rights/`) are generated with their own evidence, FAQ and structured data. `/services/*` point their canonical at the matching niche page and are not in the sitemap.

PDF source: `scripts/build-rate-card.py` (ReportLab and fontTools); Manrope is included under OFL. The PDF is committed, so Vercel does not need Python.

Research and the 2,000 unvalidated query/prompt candidates are internal under `docs/seo/2026-10-30/`. They are not public doorway pages or claimed rankings.
