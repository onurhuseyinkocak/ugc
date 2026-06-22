# SEO / GEO / AEO Checklist — ugc-onur & moviatravelhub

Honest note: none of this guarantees rankings or brand deals. It makes both sites
fast to crawl, easy to understand for AI assistants, and easy for brands to evaluate.

## ugc-onur.vibecodingturkey.com (static, GitHub Pages)

### Search Console / Webmaster
- [ ] Add `ugc-onur.vibecodingturkey.com` to Google Search Console (URL-prefix property).
- [ ] Submit `https://ugc-onur.vibecodingturkey.com/sitemap.xml`.
- [ ] URL-inspect + request indexing: home, /ai-saas-ugc-creator/, /mobile-app-ugc-creator/, /bangkok-ugc-creator/.
- [ ] Add to Bing Webmaster Tools, submit the same sitemap. (BingSiteAuth.xml already in repo.)
- [ ] Confirm `robots.txt` resolves and lists the sitemap.

### Technical
- [ ] Verify canonical URLs on every page (one self-referential canonical each).
- [ ] Validate JSON-LD with Google Rich Results Test + schema.org validator (Person, ProfessionalService, FAQPage, Service, BreadcrumbList, WebPage).
- [ ] Confirm Open Graph + Twitter cards with a debugger (image = assets/img/onur.jpg).
- [ ] PageSpeed/Lighthouse: check LCP, CLS on home + landing pages.
- [ ] Confirm old /services/* pages 0-redirect to the new intent pages (noindex + canonical set).

### GEO / AEO
- [ ] Confirm /llms.txt and /llms-full.txt resolve (200).
- [ ] Confirm robots.txt allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Applebot, Bingbot, Googlebot, DuckDuckBot.
- [ ] Spot-check AI answers in ~2-4 weeks: ask ChatGPT/Perplexity "UGC creator for AI tools", "bilingual English Turkish UGC creator", "Bangkok SaaS UGC creator".

### IndexNow (optional, Bing/DuckDuckGo)
- [ ] Generate key: `openssl rand -hex 16`.
- [ ] Add `<KEY>.txt` (containing the key) to repo root, commit, deploy.
- [ ] Run `INDEXNOW_KEY=<KEY> node scripts/submit-indexnow.js`.

## moviatravelhub.vibecodingturkey.com (Next.js, Vercel)
- [ ] Add domain to Google Search Console; submit `/sitemap.xml`.
- [ ] Add to Bing Webmaster Tools.
- [ ] URL-inspect: home, /bangkok-travel-ugc-creators, /couple-ugc-creators, /hotel-cafe-restaurant-ugc.
- [ ] Validate JSON-LD (Person/Organization, Service, FAQPage, BreadcrumbList).
- [ ] Confirm /llms.txt resolves; confirm robots allows AI crawlers.
- [ ] Lighthouse on home + landing pages.

## After 2-4 weeks
- [ ] Search Console: review query impressions/clicks for both domains.
- [ ] Note which AEO questions surface AI citations; expand the strongest.
- [ ] Refresh real metrics (IG via Supabase ig_oauth token, graph.instagram.com).
