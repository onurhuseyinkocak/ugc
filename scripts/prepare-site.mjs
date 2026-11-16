import {existsSync,mkdirSync,copyFileSync,rmSync,writeFileSync,readFileSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';
import {publicFiles} from './public-files.mjs';
import {publicSnapshot,validateSnapshot} from './build-creator.mjs';
const root=resolve(import.meta.dirname,'..'),out=join(root,'.site-output'),snapshot='assets/creator/snapshot.json';
if(existsSync(out)&&!existsSync(join(out,'.generated-creator-site')))throw Error('Refusing to replace an unknown output directory');
if(existsSync(out))rmSync(out,{recursive:true,force:true});
mkdirSync(out);writeFileSync(join(out,'.generated-creator-site'),'Generated static publication output.');
const files=publicFiles(root);
for(const name of files){
  mkdirSync(dirname(join(out,name)),{recursive:true});
  if(name===snapshot)writeFileSync(join(out,name),JSON.stringify(publicSnapshot(validateSnapshot(JSON.parse(readFileSync(join(root,name),'utf8')))))+'\n');
  else copyFileSync(join(root,name),join(out,name));
}
if(!existsSync(join(out,'index.html')))throw Error('Invalid public output');
console.log(JSON.stringify({staticFiles:files.length,allowlist:true}));
