import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join,resolve,relative} from 'node:path';
import assert from 'node:assert/strict';
import {pages,publicFiles} from './public-files.mjs';
import {approved} from './build-creator.mjs';
const root=resolve(import.meta.dirname,'..'),dir=join(root,'.site-output'),out=new URL('../.site-output/',import.meta.url),site='https://ugc-onur.vibecodingturkey.com';
const walk=folder=>readdirSync(folder,{withFileTypes:true}).flatMap(item=>item.isDirectory()?walk(join(folder,item.name)):[relative(dir,join(folder,item.name))]);
const published=walk(dir).filter(name=>name!=='.generated-creator-site').sort();
assert.deepEqual(published,publicFiles(root),'Output must contain exactly the allowlisted files');
for(const page of pages){const html=readFileSync(new URL(page,out),'utf8');
 assert.equal((html.match(/<h1[ >]/g)??[]).length,1,page+' must have one h1');
 for(const m of html.matchAll(/(?:src|href|poster|data-preview)="(\/[^"#?]*)/g))if(!m[1].startsWith('//'))assert(existsSync(new URL(m[1].slice(1)+(m[1].endsWith('/')?'index.html':''),out)),page+' asset '+m[1]);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.has(m[1]),page+' anchor '+m[1]);
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
}
// Retired offers, unevidenced sponsors, undated "12K+" style figures and superlatives must not reach the public output.
const retired=/Custom quote|Retainer|per slide|\$200|custom per project|FreeBuff|\b\d+(?:[.,]\d+)?K\+|best UGC creator|AI Search Visibility Architect|designs every video for conversion|slayt başı/i;
for(const name of published.filter(name=>/\.(html|css|js|txt|md|json|xml)$/.test(name))){
 const hit=readFileSync(join(dir,name),'utf8').match(retired);
 assert(!hit,name+' contains retired or unverifiable wording: '+hit?.[0]);
}
// The published snapshot carries figures only, and every post image in the output belongs to a sponsor case or a reviewed cover.
const snapshot=JSON.parse(readFileSync(new URL('assets/creator/snapshot.json',out),'utf8')),posts=[...snapshot.campaigns,...snapshot.carousels,...snapshot.reels];
for(const post of posts)assert.deepEqual(Object.keys(post).sort(),['brand','id','metrics','permalink','publishedAt','title'],'Published snapshot exposes more than figures');
const reviewed=new Set([...snapshot.campaigns.map(p=>p.id),...approved.carousels,...approved.reels]);
for(const name of published)for(const m of name.matchAll(/^assets\/creator\/(\d+)/g))assert(reviewed.has(m[1]),'Unreviewed post media published: '+name);
assert(!/raw\.githubusercontent/.test(readFileSync(new URL('creator.js',out),'utf8')),'The page must not depend on the repository being public');
const urls=[...readFileSync(new URL('sitemap.xml',out),'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,new Set(urls).size,'Duplicate sitemap URL');
assert(urls.includes(site+'/tr/'));
for(const address of urls){
 const url=new URL(address);
 assert.equal(url.origin,site,'Unexpected sitemap origin');
 assert(existsSync(new URL(url.pathname.slice(1)+(url.pathname.endsWith('/')?'index.html':''),out)),'Missing sitemap target '+address);
}
for(const line of readFileSync(new URL('robots.txt',out),'utf8').matchAll(/^Sitemap: (.+)$/gm))assert(existsSync(new URL(new URL(line[1]).pathname.slice(1),out)),'robots.txt names a missing sitemap');
for(const name of ['llms.txt','llms-full.txt','ai-answers-onur.json'])assert.equal(readFileSync(new URL(name,out),'utf8'),readFileSync(new URL('.well-known/'+name,out),'utf8'),'Discovery mirror differs: '+name);
for(const name of ['llms.txt','llms-full.txt'])assert.equal((readFileSync(new URL(name,out),'utf8').match(/verified-creator:start/g)??[]).length,1,'Duplicate or missing verified facts');
const config=JSON.parse(readFileSync(join(root,'vercel.json'),'utf8'));
for(const rule of config.redirects)assert(rule.permanent&&existsSync(new URL(rule.destination.slice(1)+'index.html',out)),'Redirect target missing: '+rule.destination);
assert(config.headers[0].headers.some(h=>h.key==='Content-Security-Policy'));
console.log(JSON.stringify({publishedFiles:published.length,verifiedPages:pages.length,sitemapURLs:urls.length,redirects:config.redirects.length,allowlist:true}));
