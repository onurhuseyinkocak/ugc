import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const out=new URL('../.site-output/',import.meta.url);
const pages=['index.html','tr/index.html','onur-huseyin-kocak/index.html','tr/onur-huseyin-kocak/index.html','ai-saas-ugc-creator/index.html','mobile-app-ugc-creator/index.html','bangkok-ugc-creator/index.html','services/ai-tool-ugc/index.html','services/app-launch-ugc/index.html','usage-rights/index.html'];
for(const page of pages){const html=readFileSync(new URL(page,out),'utf8');
 assert.equal((html.match(/<h1[ >]/g)??[]).length,1,page+' must have one h1');
 for(const m of html.matchAll(/(?:src|href|poster)="(\/[^"#?]*)/g))if(!m[1].startsWith('//'))assert(existsSync(new URL(m[1].slice(1),out)),page+' asset '+m[1]);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.has(m[1]),page+' anchor '+m[1]);
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
}
const sitemap=readFileSync(new URL('sitemap.xml',out),'utf8'),urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,new Set(urls).size,'Duplicate sitemap URL');
assert(urls.includes('https://ugc-onur.vibecodingturkey.com/tr/'));
for(const path of ['docs','scripts','.git','.github','.env'])assert(!existsSync(new URL(path,out)),'Private path published: '+path);
console.log(JSON.stringify({verifiedPages:pages.length,sitemapURLs:urls.length,privateResearchExcluded:true}));
