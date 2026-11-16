import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {test} from 'node:test';
import {render,validateSnapshot,esc} from './build-creator.mjs';
import {runInNewContext} from 'node:vm';
const d=JSON.parse(readFileSync(new URL('../assets/creator/snapshot.json',import.meta.url),'utf8'));
test('AI discovery mirrors and commercial answers match the dated creator source',()=>{
 for(const name of ['llms.txt','llms-full.txt','ai-answers-onur.json'])assert.equal(readFileSync(new URL('../'+name,import.meta.url),'utf8'),readFileSync(new URL('../.well-known/'+name,import.meta.url),'utf8'));
 for(const name of ['llms.txt','llms-full.txt']){
  const text=readFileSync(new URL('../'+name,import.meta.url),'utf8');
  assert.equal((text.match(/verified-creator:start/g)??[]).length,1);
  assert(text.includes('Paid advertising and extra usage are quoted separately.'));
  assert(!/57K\+|1\.9K\+/.test(text));
 }
 const faq=JSON.parse(readFileSync(new URL('../brand-faq.json',import.meta.url),'utf8'));
 assert.equal(faq.canonical_url,'https://ugc-onur.vibecodingturkey.com/onur-huseyin-kocak/');
 const prices=faq.questions.find(p=>p.question.includes('video and carousel rates'))?.answer;
 for(const price of ['$300 USD','$100 USD'])assert(prices?.includes(price));assert(!/\$200|dedicated|carousel slide/i.test(prices),'Retired price structure must not return');
 assert.equal(faq.questions.filter(p=>p.question.includes('annual totals')).length,1);
});
test('only verified account metrics, exact period and two approved sponsors are published',()=>{
 assert.equal(validateSnapshot(d),d);
 for(const bad of [{...d,username:'other'},{...d,days:365},{...d,endDate:d.startDate},{...d,metrics:{...d.metrics,reach:-1}},{...d,followers:NaN},{...d,campaigns:[...d.campaigns,d.campaigns[0]]},{...d,reels:d.reels.slice(1)},{...d,carousels:[]}])assert.throws(()=>validateSnapshot(bad));
});
test('EN and TR expose actual values, matching prices, canonical language pages and no fabricated rankings',()=>{
 for(const lang of ['en','tr']){
  const html=render(d,lang),data=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert(html.includes(`<html lang="${lang}">`));assert(html.includes('hreflang="tr" href="https://ugc-onur.vibecodingturkey.com/tr/"'));
  assert.deepEqual(data['@graph'].filter(x=>x['@type']==='Service').map(x=>x.offers.price),['300','100']);
  assert.equal(data['@graph'].filter(x=>x['@type']==='VideoObject').length,2);
  for(const brand of ['Brantial','Mostdomain'])assert(html.includes(brand));
  assert(!html.includes('FreeBuff'));assert(!html.includes('Freebuff'));assert(!html.includes('aggregateRating'));assert(!html.includes('Custom quote'));
  assert(html.includes(d.metrics.views.toLocaleString(lang==='tr'?'tr-TR':'en-US')));assert(html.includes('data-post-metric="follows"'));
  assert(!/NaN|undefined/.test(html));assert.equal((html.match(/<video /g)??[]).length,3,'Two sponsored videos and one own-product film');assert.equal((html.match(/data-preview=/g)??[]).length,2);assert(!/[—–↗]/.test(html.replace(/<script[\s\S]*?<\/script>/g,'')),'Visible copy uses glyphs the self-hosted fonts contain');assert(!/\$200|[Dd]edicated carousel|carousel slide|Carousel slaytı/.test(html));
  for(const path of lang==='tr'?['tr/gizlilik','tr/sozlesme','tr/iade-politikasi']:['en/privacy','en/terms','en/refund-policy'])assert(html.includes('https://vibecodingturkey.com/'+path),'Every portfolio locale links to the shared legal source');
 }
});
test('all primary language pages expose the same portrait licensing metadata',()=>{
 for(const lang of ['en','tr']){
  const html=render(d,lang),graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const image=graph.find(p=>p['@type']==='Person').image;
  assert.equal(readFileSync(new URL('../'+(lang==='tr'?'tr/':'')+'index.html',import.meta.url),'utf8'),html,'Committed portfolio must match its generator and dated snapshot');
  assert.equal(image.license,'https://ugc-onur.vibecodingturkey.com/usage-rights/');
  assert.equal(image.acquireLicensePage,'https://ugc-onur.vibecodingturkey.com/#brief');
  assert.equal(image.creditText,'Onur Hüseyin Koçak');
 }
});
test('all portfolio assets and original post links are real local files and scoped Instagram posts',()=>{
 for(const p of [...d.campaigns,...d.carousels,...d.reels]){assert(existsSync(new URL('../'+p.poster,import.meta.url)));assert(/^https:\/\/www\.instagram\.com\/(p|reel)\//.test(p.permalink));if(p.video)assert(existsSync(new URL('../'+p.video,import.meta.url)));}
});
test('unsafe values are escaped; email drafts do not masquerade as confirmed leads',()=>{
 assert.equal(esc('<script>"&\''),'&lt;script&gt;&quot;&amp;&#39;');
 const js=readFileSync(new URL('../creator.js',import.meta.url),'utf8');
 assert(js.includes('contact_click'));assert(!js.includes('generate_lead'));assert(!js.includes('innerHTML'));assert(js.includes('info@vibecodingturkey.com'));
 const css=readFileSync(new URL('../creator.css',import.meta.url),'utf8');assert(css.includes('prefers-reduced-motion'));assert(!css.includes('gradient'));
});
async function browserRefresh(payload,{offline=false}={}){
 const measured={dateTime:new Date(Date.parse(d.measuredAt)-1000).toISOString(),textContent:'old'},views={dataset:{account:'views'},textContent:'old'},followers={dataset:{account:'followers'},textContent:'old'};
 const document={documentElement:{lang:'en'},head:{appendChild(){}},getElementById:()=>null,createElement:()=>({dataset:{}}),querySelector:selector=>selector==='[data-measured]'?measured:null,querySelectorAll:selector=>selector==='[data-account]'?[views,followers]:[]};
 const context={document,location:{hostname:'ugc-onur.vibecodingturkey.com',pathname:'/',search:'',hash:''},window:{},URLSearchParams,AbortSignal,Date,Map,fetch:async()=>{if(offline)throw Error('offline');return{ok:true,json:async()=>payload};}};
 runInNewContext(readFileSync(new URL('../creator.js',import.meta.url),'utf8'),context);
 await new Promise(resolve=>setImmediate(resolve));
 return{measured,views,followers};
}
test('fresh public snapshot updates visible values while outages and foreign/invalid data preserve the dated fallback',async()=>{
 const fresh=await browserRefresh(d);assert.equal(fresh.views.textContent,d.metrics.views.toLocaleString('en-US'));assert.equal(fresh.measured.dateTime,d.measuredAt);
 for(const value of [{...d,username:'other'},{...d,metrics:{...d.metrics,views:-1}},{...d,measuredAt:'bad'}])assert.equal((await browserRefresh(value)).views.textContent,'old');
 assert.equal((await browserRefresh(d,{offline:true})).views.textContent,'old');
});
test('brief creates a correctly addressed email draft, never sends to a background endpoint or emits a confirmed lead',()=>{
 let submit,clicked=false,href;const values=new Map([['brand','QA & Brand'],['product','https://example.com'],['format','Video — $300 USD'],['usage','Paid advertising — separate licence'],['deadline','October'],['notes','a+b & c']]);
 const link={hidden:true,click(){clicked=true;href=this.href;}},status={};
 const form={addEventListener(name,fn){assert.equal(name,'submit');submit=fn;},reportValidity:()=>true};
 const ctx={document:{documentElement:{lang:'en'},getElementById:id=>id==='brief-form'?form:id==='draft-link'?link:status,querySelectorAll:()=>[]},location:{hostname:'127.0.0.1',pathname:'/',search:'',hash:''},window:{},URL,URLSearchParams,FormData:class{get(key){return values.get(key);}}};
 runInNewContext(readFileSync(new URL('../creator.js',import.meta.url),'utf8'),ctx);submit({preventDefault(){}});
 assert(clicked);const u=new URL(href);assert.equal(u.protocol,'mailto:');assert.equal(u.pathname,'info@vibecodingturkey.com');assert(u.searchParams.get('body').includes('a+b & c'));assert(status.textContent.includes('draft'));
});

test('generated profile, service and licence pages retain the shared legal destinations',()=>{
 for(const lang of ['en','tr']){
  const path=(lang==='tr'?'tr/':'')+'onur-huseyin-kocak/index.html';
  const html=readFileSync(new URL('../'+path,import.meta.url),'utf8');
  for(const code of ['en','tr','x-default'])assert(html.includes(`<link rel="alternate" hreflang="${code}" href="https://ugc-onur.vibecodingturkey.com/${code==='tr'?'tr/':''}onur-huseyin-kocak/">`),path+' reciprocal profile language link');
  assert(html.includes(`<link rel="canonical" href="https://ugc-onur.vibecodingturkey.com/${lang==='tr'?'tr/':''}onur-huseyin-kocak/">`));
 }
 for(const file of ['index.html','tr/index.html','onur-huseyin-kocak/index.html','tr/onur-huseyin-kocak/index.html','ai-saas-ugc-creator/index.html','mobile-app-ugc-creator/index.html','usage-rights/index.html']){
  const html=readFileSync(new URL('../'+file,import.meta.url),'utf8');for(const path of file.startsWith('tr/')?['tr/gizlilik','tr/sozlesme','tr/iade-politikasi']:['en/privacy','en/terms','en/refund-policy'])assert(html.includes('https://vibecodingturkey.com/'+path),file);
 }
});
test('niche pages are distinct, evidenced and structurally valid; overlapping service URLs defer to them',()=>{
 const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8'),seenTitle=new Set(),seenDescription=new Set();
 for(const file of ['index.html','tr/index.html','onur-huseyin-kocak/index.html','tr/onur-huseyin-kocak/index.html','ai-saas-ugc-creator/index.html','mobile-app-ugc-creator/index.html','bangkok-ugc-creator/index.html','usage-rights/index.html']){
  const html=read(file),title=html.match(/<title>([^<]*)/)[1],description=html.match(/<meta name="description" content="([^"]*)/)[1],types=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'].map(x=>x['@type']);
  assert(!seenTitle.has(title)&&!seenDescription.has(description),file+' duplicates a title or description');seenTitle.add(title);seenDescription.add(description);
  assert(html.includes('og-onur.jpg')&&html.includes('twitter:image'),file+' social card');
  if(!file.endsWith('index.html')||file.includes('/')&&!file.startsWith('tr/index'))assert(types.includes('BreadcrumbList'),file+' breadcrumb');
  if(/ugc-creator|usage-rights|^index|^tr\/index/.test(file))assert(types.includes('FAQPage'),file+' FAQ data');
  if(/ugc-creator/.test(file)){assert(html.includes('Brantial')&&html.includes(d.campaigns[0].metrics.views.toLocaleString('en-US')),file+' shows dated sponsored evidence');assert(!/\$200|FreeBuff/.test(html));}
 }
 assert(!existsSync(new URL('../services',import.meta.url)),'Retired service pages are redirects, not files');
 assert(!/\/services\/|ai-cevaplar|hardcore/.test(read('sitemap.xml')+read('robots.txt')+read('llms.txt')));assert(read('404.html').includes('noindex'));
 for(const file of ['llms.txt','llms-full.txt','ai-answers-onur.json','brand-faq.json','ai-search-profile.json','entity.json'])assert(!/\d+K\+|Visibility Architect|for conversion|custom per project|\$200/i.test(read(file)),file+' carries an undated or retired claim');
 assert(read('llms.txt').includes(d.metrics.views.toLocaleString('en-US'))&&read('llms.txt').includes(d.measuredAt),'Discovery text carries the dated account figures');
 assert(/<h1><span lang="tr">[^<]+<\/span><\/h1>/.test(read('onur-huseyin-kocak/index.html')),'Turkish casing for the uppercase name on English pages');
 for(const id of ['18644050693029570','18096907886123336'])assert(!render(d,'en').includes('/assets/creator/'+id),'Covers picturing public figures stay out of the page');
});
