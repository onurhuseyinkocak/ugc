import {existsSync,mkdirSync,readdirSync,copyFileSync,rmSync,writeFileSync} from 'node:fs';
import {join,resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..'),out=join(root,'.site-output');
if(existsSync(out)&&!existsSync(join(out,'.generated-creator-site')))throw Error('Refusing to replace an unknown output directory');
if(existsSync(out))rmSync(out,{recursive:true,force:true});
mkdirSync(out);writeFileSync(join(out,'.generated-creator-site'),'Generated static publication output.');
const excluded=new Set(['.git','.github','.site-output','.vercel','docs','scripts','review-shots','node_modules']);
const publicFile=/\.(html|css|js|json|md|txt|xml|svg|png|jpe?g|webp|avif|mp4|webm|pdf|ttf|woff2?|ico)$/i;
let files=0;
function copy(dir,target){for(const item of readdirSync(dir,{withFileTypes:true})){
  if(excluded.has(item.name)||item.name.startsWith('.')&&item.name!=='.well-known')continue;
  const source=join(dir,item.name),destination=join(target,item.name);
  if(item.isDirectory()){mkdirSync(destination,{recursive:true});copy(source,destination);}
  else if(item.isFile()&&(publicFile.test(item.name)||item.name==='CNAME')){copyFileSync(source,destination);files++;}
}}
copy(root,out);
if(existsSync(join(out,'docs'))||!existsSync(join(out,'index.html')))throw Error('Invalid public output');
console.log(JSON.stringify({staticFiles:files,privateResearchExcluded:true}));
