import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';

// The only files that are published. Anything else in the repository stays private, whatever its extension.
export const pages=['index.html','404.html','tr/index.html','onur-huseyin-kocak/index.html','tr/onur-huseyin-kocak/index.html','ai-saas-ugc-creator/index.html','mobile-app-ugc-creator/index.html','bangkok-ugc-creator/index.html','usage-rights/index.html'];
const fixed=['creator.css','creator.js','vct-control.js','robots.txt','sitemap.xml','llms.txt','llms-full.txt','ai-search-profile.json','ai-answers-onur.json','brand-faq.json','entity.json','onur-huseyin-kocak.md','Onur_Huseyin_Kocak_UGC_Rate_Card_2026.pdf','BingSiteAuth.xml','.well-known/llms.txt','.well-known/llms-full.txt','.well-known/ai-answers-onur.json','assets/favicon.svg','assets/creator/snapshot.json','assets/fonts/Archivo-OFL.txt','assets/fonts/Manrope-OFL.txt'];
export function publicFiles(root){
  const files=new Set([...pages,...fixed,...readdirSync(root).filter(name=>/^([0-9a-f]{32}\.txt|google[0-9a-f]+\.html)$/.test(name))]);
  // Media, fonts and logos are published only when a published page, stylesheet or discovery file points at them.
  for(const name of [...files].filter(name=>/\.(html|css|txt|json|md)$/.test(name)))
    for(const match of readFileSync(join(root,name),'utf8').matchAll(/\/(assets\/[\w./-]+\.(?:webp|jpe?g|png|svg|mp4|woff2))/g))files.add(match[1]);
  return [...files].filter(name=>existsSync(join(root,name))).sort();
}
