import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {homedir} from 'node:os';

const root = new URL('../', import.meta.url);
const accountId = '17841428045192826';
const campaigns = [{brand:'Brantial',id:'18211971262345987'}, {brand:'Mostdomain',id:'17961609438230427'}];
const carouselIds = ['18644050693029570','18096907886123336','18107535647276122','17890104750626337','17985211887075970','18190614169406601'];
let calls = 0;
let token = process.env.INSTAGRAM_PAGE_TOKEN;
if(!token){try{token=JSON.parse(readFileSync(join(homedir(),'.local/share/claude-design/igbot/page-tokens.json'),'utf8'))['onurhuseyinkocak.ai']?.page_token;}catch{throw new Error('Local Instagram credential could not be read');}}
if (!token) throw new Error('Instagram credential unavailable');
async function graph(path, params = {}) {
  if (++calls > 26) throw new Error('Read budget reached');
  const url = new URL('https://graph.facebook.com/v23.0/' + path);
  for (const [name,value] of Object.entries(params)) url.searchParams.set(name,String(value));
  const response = await fetch(url,{headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(15000)});
  const usage = JSON.parse(response.headers.get('x-app-usage') || '{}');
  if (Object.values(usage).some(value=>typeof value==='number' && value>=85)) throw new Error('Meta usage guard reached');
  const data = await response.json();
  if (!response.ok || data.error) { const error = new Error('Meta read failed: HTTP '+response.status+' code '+(data.error?.code??'unknown')); error.code=data.error?.code; throw error; }
  return data;
}
const numeric = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;
async function media(id) {
  const item = await graph(id,{fields:'id,owner{id},caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count'});
  if (item.owner?.id!==accountId || item.id!==id || !item.permalink?.startsWith('https://www.instagram.com/')) throw new Error('Media ownership mismatch');
  const names = ['views','reach','saved','shares',...(item.media_type==='CAROUSEL_ALBUM'?['follows']:[])];
  let insights;
  try { insights=await graph(id+'/insights',{metric:names.join(',')}); }
  catch(error) { if(error.code!==100)throw error; insights=await graph(id+'/insights',{metric:'reach,saved,shares'}); }
  const metrics = Object.fromEntries([...names,'likes','comments'].map(name=>[name,null]));
  for(const row of insights.data??[]) {const value=row.values?.[0]?.value??row.total_value?.value;if(nameAllowed(row.name)&&numeric(value))metrics[row.name]=value;}
  function nameAllowed(name){return names.includes(name);}
  if(numeric(item.like_count))metrics.likes=item.like_count;
  if(numeric(item.comments_count))metrics.comments=item.comments_count;
  return {...item,metrics};
}
async function download(url, path, type, limit) {
  if(existsSync(new URL(path,root)))return;
  const parsed = new URL(url);
  if(parsed.protocol!=='https:' || !/\.(cdninstagram\.com|fbcdn\.net)$/.test(parsed.hostname))throw new Error('Untrusted media host');
  const r=await fetch(parsed,{signal:AbortSignal.timeout(60000)});
  if(!r.ok || !r.headers.get('content-type')?.startsWith(type) || Number(r.headers.get('content-length'))>limit)throw new Error('Media download refused');
  const reader=r.body.getReader(),chunks=[];let size=0;
  while(true){const{done,value}=await reader.read();if(done)break;size+=value.length;if(size>limit){await reader.cancel();throw new Error('Media too large');}chunks.push(value);}
  writeFileSync(new URL(path,root),Buffer.concat(chunks));
}
async function main() {
  const profile=await graph(accountId,{fields:'id,username,followers_count'});
  if(profile.username!=='onurhuseyinkocak.ai'||!numeric(profile.followers_count))throw new Error('Creator mismatch');
  const until=Math.floor(Date.parse(new Date().toISOString().slice(0,10))/1000),since=until-30*86400;
  const totals=await graph(accountId+'/insights',{metric:'views,reach,comments,likes,saves,shares,total_interactions',period:'day',metric_type:'total_value',since,until});
  const metrics={};
  for(const name of ['views','reach','comments','likes','saves','shares','total_interactions']){const value=totals.data?.find(r=>r.name===name)?.total_value?.value;if(!numeric(value))throw new Error('Account metric unavailable');metrics[name]=value;}
  const series=await graph(accountId+'/insights',{metric:'reach',period:'day',metric_type:'time_series',since,until});
  const daily=(series.data?.[0]?.values??[]).map(r=>{if(!numeric(r.value)||!Number.isFinite(Date.parse(r.end_time)))throw new Error('Daily metric unavailable');return{date:new Date(Date.parse(r.end_time)-86400000).toISOString().slice(0,10),value:r.value};});
  const projects=[];
  for(const c of campaigns){const item=await media(c.id);if(!item.caption?.toLowerCase().includes(c.brand.toLowerCase()))throw new Error('Campaign caption mismatch');projects.push({...item,brand:c.brand});}
  const previous=existsSync(new URL('assets/creator/snapshot.json',root))?JSON.parse(readFileSync(new URL('assets/creator/snapshot.json',root),'utf8')):null;
  const selectedIds=previous?.carousels?.length===3?previous.carousels.map(item=>item.id):carouselIds;
  if(selectedIds.some(id=>!carouselIds.includes(id)))throw new Error('Carousel selection mismatch');
  const candidates=[];
  for(const id of selectedIds){const item=await media(id);if(item.media_type!=='CAROUSEL_ALBUM')throw new Error('Carousel mismatch');candidates.push(item);}
  const gallery=candidates.sort((a,b)=>(b.metrics.views??-1)-(a.metrics.views??-1)).slice(0,3);
  mkdirSync(new URL('assets/creator/',root),{recursive:true});
  async function publicItem(item){
    const poster='assets/creator/'+item.id+'.jpg';await download(item.thumbnail_url||item.media_url,poster,'image/',5*1024*1024);
    let video=null;if(item.media_type==='VIDEO'){video='assets/creator/'+item.id+'.mp4';await download(item.media_url,video,'video/',80*1024*1024);}
    return{id:item.id,brand:item.brand??null,caption:item.caption,permalink:item.permalink,publishedAt:item.timestamp,mediaType:item.media_type,poster,video,metrics:item.metrics};
  }
  const cleanProjects=[];for(const p of projects)cleanProjects.push(await publicItem(p));
  const cleanGallery=[];for(const p of gallery)cleanGallery.push(await publicItem(p));
  const snapshot={source:'Meta Graph API',username:profile.username,followers:profile.followers_count,measuredAt:new Date().toISOString(),days:30,startDate:new Date(since*1000).toISOString().slice(0,10),endDate:new Date((until-1)*1000).toISOString().slice(0,10),metrics,daily,campaigns:cleanProjects,carousels:cleanGallery};
  writeFileSync(new URL('assets/creator/snapshot.json',root),JSON.stringify(snapshot,null,2)+'\n');
  console.log(JSON.stringify({ok:true,reads:calls,username:snapshot.username,metrics,followers:snapshot.followers,projects:cleanProjects.map(p=>({brand:p.brand,metrics:p.metrics})),carousels:cleanGallery.map(p=>({id:p.id,metrics:p.metrics}))}));
}
main().catch(error=>{console.error(/^Meta read failed:|guard reached|mismatch|unavailable|too large|refused|budget/.test(error.message)?error.message:'Creator sync could not be completed; previous snapshot preserved.');process.exitCode=1;});
