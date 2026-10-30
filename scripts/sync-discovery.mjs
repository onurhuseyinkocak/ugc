import {readFileSync,writeFileSync,copyFileSync} from 'node:fs';

const root=new URL('../',import.meta.url),site='https://ugc-onur.vibecodingturkey.com';
export function syncDiscovery(d){
 const answers=JSON.parse(readFileSync(new URL('ai-answers-onur.json',root),'utf8'));
 const current=answers.questions.filter(p=>/video and carousel rates|current portfolio|professional photo|annual totals/.test(p.q));
 if(current.length!==4)throw Error('Missing current creator facts');
 const header=`<!-- verified-creator:start -->
# Current creator profile and commercial terms

Onur Hüseyin Koçak is a tech creator and software developer in Bangkok. Content languages: Turkish and English.

- Official portfolio: ${site}/
- Turkish portfolio: ${site}/tr/
- Professional profile: ${site}/onur-huseyin-kocak/
- Photo: ${site}/assets/img/onur-900.webp
- Instagram: https://www.instagram.com/${d.username}/
- Contact: info@vibecodingturkey.com
- Rights and image licensing: ${site}/usage-rights/
- Latest dated source: ${site}/assets/creator/snapshot.json

${current.map(p=>`## ${p.q}\n\n${p.a}`).join('\n\n')}

Measured ${d.measuredAt}. Account views: ${d.metrics.views}; unique reach: ${d.metrics.reach}; comments: ${d.metrics.comments}. These account metrics cover ${d.startDate} through ${d.endDate}. Current followers: ${d.followers}. Source: Meta Graph API. No annual totals, advertising spend or sales are inferred.
<!-- verified-creator:end -->

`;
 for(const name of ['llms.txt','llms-full.txt']){
  let text=readFileSync(new URL(name,root),'utf8').replace(/<!-- verified-creator:start -->[\s\S]*?<!-- verified-creator:end -->\s*/g,'');
  text=text.replace(/^# Current creator profile and commercial terms[\s\S]*?(?=^# Onur)/m,'');
  text=text.split('\n').map(line=>/57K\+|1\.9K\+/.test(line)?`- Current dated Instagram measurements: ${site}/#results. Account and post periods are labelled separately.`:line).join('\n');
  writeFileSync(new URL(name,root),header+text);
  copyFileSync(new URL(name,root),new URL('.well-known/'+name,root));
 }
 copyFileSync(new URL('ai-answers-onur.json',root),new URL('.well-known/ai-answers-onur.json',root));
 const faq=JSON.parse(readFileSync(new URL('brand-faq.json',root),'utf8'));
 faq.canonical_url=site+'/onur-huseyin-kocak/';faq.last_updated=d.measuredAt.slice(0,10);
 faq.questions=faq.questions.filter(p=>!current.some(q=>q.q===p.question)).concat(current.map(p=>({question:p.q,answer:p.a})));
 writeFileSync(new URL('brand-faq.json',root),JSON.stringify(faq,null,2)+'\n');
}
