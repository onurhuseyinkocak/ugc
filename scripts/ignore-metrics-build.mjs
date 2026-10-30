import {execFileSync} from 'node:child_process';
let message='';
try{message=execFileSync('git',['log','-1','--pretty=%B'],{encoding:'utf8'}).trim();}catch{}
const skip=message==='chore: refresh verified creator measurements [skip-vercel]';
console.log(skip?'Metrics are read from the verified public snapshot; skip a full deployment.':'Publish the reviewed site change.');
process.exit(skip?0:1);
