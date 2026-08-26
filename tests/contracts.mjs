import fs from 'node:fs';
const read=p=>fs.readFileSync(p,'utf8');
const app=read('app.js'),cfg=read('config.js'),index=read('index.html'),lab=read('lab.html'),studio=read('studio.html');
const checks=[
  ['master step exists',/function step\(/.test(app)],
  ['single shared step used by next',/next'\).*step\(1/.test(app)],
  ['wheel routes to step',/addEventListener\('wheel'/.test(app)&&/step\(\(e\.deltaY/.test(app)],
  ['keyboard routes to step',/ArrowRight/.test(app)&&/ArrowLeft/.test(app)],
  ['drag routes to step',/pointerdown/.test(app)&&/pointerup/.test(app)],
  ['autoplay routes to step',/step\(1,'auto'\)/.test(app)],
  ['master timeline exists',/gsap\.timeline/.test(app)],
  ['config-driven categories',/categories:\s*\[/.test(cfg)],
  ['product type contract',/type:\s*'image'/.test(cfg)],
  ['experience links LAB',/lab\.html/.test(index)],
  ['experience links Studio',/studio\.html/.test(index)],
  ['LAB exposes timing cues',/copyCue/.test(lab)&&/productCue/.test(lab)&&/settleCue/.test(lab)],
  ['Studio persists state',/localStorage/.test(studio)],
];
let failed=0;for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'} ${name}`);if(!ok)failed++}if(failed)process.exit(1);
