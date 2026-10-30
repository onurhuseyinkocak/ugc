import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {test} from 'node:test';
import {render,validateSnapshot,esc} from './build-creator.mjs';
import {runInNewContext} from 'node:vm';
const d=JSON.parse(readFileSync(new URL('../assets/creator/snapshot.json',import.meta.url),'utf8'));
test('only verified account metrics, exact period and two approved sponsors are published',()=>{
 assert.equal(validateSnapshot(d),d);
 for(const bad of [{...d,username:'other'},{...d,days:365},{...d,endDate:d.startDate},{...d,metrics:{...d.metrics,reach:-1}},{...d,followers:NaN},{...d,campaigns:[...d.campaigns,d.campaigns[0]]}])assert.throws(()=>validateSnapshot(bad));
});
test('EN and TR expose actual values, matching prices, canonical language pages and no fabricated rankings',()=>{
 for(const lang of ['en','tr']){
  const html=render(d,lang),data=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert(html.includes(`<html lang="${lang}">`));assert(html.includes('hreflang="tr" href="https://ugc-onur.vibecodingturkey.com/tr/"'));
  assert.deepEqual(data['@graph'].filter(x=>x['@type']==='Service').map(x=>x.offers.price),['300','100','200']);
  assert.equal(data['@graph'].filter(x=>x['@type']==='VideoObject').length,2);
  for(const brand of ['Brantial','Mostdomain'])assert(html.includes(brand));
  assert(!html.includes('FreeBuff'));assert(!html.includes('Freebuff'));assert(!html.includes('aggregateRating'));assert(!html.includes('Custom quote'));
  assert(html.includes(d.metrics.views.toLocaleString(lang==='tr'?'tr-TR':'en-US')));assert(html.includes('data-post-metric="follows"'));
  assert(!/NaN|undefined/.test(html));assert.equal((html.match(/<video /g)??[]).length,2);
 }
});
test('all portfolio assets and original post links are real local files and scoped Instagram posts',()=>{
 for(const p of [...d.campaigns,...d.carousels]){assert(existsSync(new URL('../'+p.poster,import.meta.url)));assert(/^https:\/\/www\.instagram\.com\/(p|reel)\//.test(p.permalink));if(p.video)assert(existsSync(new URL('../'+p.video,import.meta.url)));}
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
