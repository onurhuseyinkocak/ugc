#!/usr/bin/env node
/**
 * IndexNow submitter for ugc-onur.vibecodingturkey.com
 *
 * Pings IndexNow (Bing, Yandex, Seznam, etc.) with the URLs from sitemap.xml
 * so updated pages get crawled fast. Google does NOT use IndexNow, but it is
 * still worth it for Bing/DuckDuckGo and a few AI search backends.
 *
 * SETUP (one-time):
 *   1. Generate a key (any 8-128 hex chars), e.g.:  openssl rand -hex 16
 *   2. Create a key file at the site root so IndexNow can verify ownership:
 *        echo "<KEY>" > <KEY>.txt        (committed to the repo root)
 *   3. Export the key when running:
 *        INDEXNOW_KEY=<KEY> node scripts/submit-indexnow.js
 *
 * No secret is hardcoded. The key is public by design (IndexNow requires the
 * key file to be reachable), but we still read it from the environment.
 *
 * Requires Node 18+ (global fetch).
 */
const fs = require("fs");
const path = require("path");

const HOST = "ugc-onur.vibecodingturkey.com";
const SITEMAP = path.join(__dirname, "..", "sitemap.xml");

const key = process.env.INDEXNOW_KEY;
if (!key) {
  console.error("ERROR: set INDEXNOW_KEY env var. See header of this file for setup.");
  process.exit(1);
}

function readSitemapUrls() {
  const xml = fs.readFileSync(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  // Submit only HTML pages by default (skip .json/.md/.txt feeds).
  return locs.filter((u) => /\/$|\/[^./]*$/.test(u) || u.endsWith(HOST + "/"));
}

async function main() {
  const urlList = readSitemapUrls();
  if (!urlList.length) {
    console.error("No URLs found in sitemap.");
    process.exit(1);
  }
  const body = {
    host: HOST,
    key: key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urlList,
  };
  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);
  urlList.forEach((u) => console.log("  " + u));

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow responded: HTTP ${res.status} ${res.statusText}`);
  if (res.status >= 400) {
    console.error("Submission failed. Check that <KEY>.txt is live at the keyLocation.");
    process.exit(1);
  }
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
