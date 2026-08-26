(()=>{'use strict';
const C=window.ProductShowcaseConfig;if(!C||!window.gsap)return;
const $=s=>document.querySelector(s),hero=$('.hero'),layer=$('#product-layer'),wordA=$('#word-a'),wordB=$('#word-b'),kicker=$('#kicker'),desc=$('#description'),indexLabel=$('#index-label'),pedestal=$('.pedestal'),body=document.body;
let active=0,transitioning=false,auto=null,pointer=null,lastWheel=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function productNode(item){const el=document.createElement('div');el.className='product';el.dataset.id=item.id;const img=document.createElement('img');img.src=item.src;img.alt=item.alt||item.name;el.appendChild(img);return el}
let current=productNode(C.categories[0].product);layer.appendChild(current);
function applyProduct(el,state){gsap.set(el,{xPercent:-50,yPercent:-50,x:state.x||0,y:state.y||0,rotation:state.rotate||0,scale:state.scale??1,opacity:1})}
applyProduct(current,C.categories[0].product.hero);
function updateMeta(cat){kicker.textContent=cat.kicker;desc.textContent=cat.description;indexLabel.textContent=cat.indexLabel}
function setWords(index){const a=index===0?C.categories[0].title:C.categories[1].title;wordA.textContent=a;wordB.textContent=a}
function stopAuto(){clearTimeout(auto);auto=null}
function scheduleAuto(){stopAuto();if(reduced.matches)return;auto=setTimeout(()=>step(1,'auto'),C.motion.autoplayMs)}
function step(direction=1,source='manual'){
 if(transitioning)return;const n=C.categories.length;if(n<2)return;
 transitioning=true;stopAuto();body.classList.add('is-transitioning');
 const next=(active+direction+n)%n,oldCat=C.categories[active],newCat=C.categories[next],incoming=productNode(newCat.product);layer.appendChild(incoming);applyProduct(incoming,newCat.product.enter);gsap.set(incoming,{opacity:0});
 const outgoingWord=wordA, incomingWord=wordB;incomingWord.textContent=newCat.title;
 const wordDir=direction>0?-1:1;
 gsap.set(incomingWord,{opacity:0,xPercent:wordDir>0?-135:35,yPercent:-53});
 const tl=gsap.timeline({defaults:{ease:'power3.inOut'},onComplete(){current.remove();current=incoming;active=next;wordA.textContent=newCat.title;gsap.set(wordA,{opacity:1,xPercent:-50,yPercent:-53});gsap.set(wordB,{opacity:0,xPercent:25,yPercent:-53});transitioning=false;body.classList.remove('is-transitioning');scheduleAuto()}});
 tl.to(current,{x:oldCat.product.exit.x,y:oldCat.product.exit.y,rotation:oldCat.product.exit.rotate,scale:oldCat.product.exit.scale,opacity:.05,duration:.72},0)
   .to(outgoingWord,{xPercent:direction>0?-138:38,opacity:.06,duration:.84},0)
   .to(pedestal,{xPercent:-50,x:direction>0?-18:18,rotationY:direction>0?-2.3:2.3,scale:.985,duration:.62},0)
   .to(incoming,{opacity:1,duration:.24},C.motion.productCue-.14)
   .to(incoming,{x:newCat.product.hero.x,y:newCat.product.hero.y,rotation:newCat.product.hero.rotate,scale:newCat.product.hero.scale,duration:.72},C.motion.productCue-.08)
   .to(incomingWord,{opacity:1,xPercent:-50,duration:.72},C.motion.copyCue-.06)
   .call(()=>updateMeta(newCat),[],C.motion.copyCue)
   .to(pedestal,{xPercent:-50,x:0,rotationY:0,scale:1,duration:.48,ease:'power2.out'},C.motion.settleCue-.12);
 }
function mark(){stopAuto();scheduleAuto()}
$('#next').addEventListener('click',()=>{step(1);mark()});$('#prev').addEventListener('click',()=>{step(-1);mark()});
addEventListener('keydown',e=>{if(e.key==='ArrowRight'){step(1);mark()}if(e.key==='ArrowLeft'){step(-1);mark()}});
hero.addEventListener('wheel',e=>{const now=performance.now();if(now-lastWheel<650)return;lastWheel=now;if(Math.abs(e.deltaY)+Math.abs(e.deltaX)<18)return;e.preventDefault();step((e.deltaY||e.deltaX)>0?1:-1);mark()},{passive:false});
hero.addEventListener('pointerdown',e=>{pointer={id:e.pointerId,x:e.clientX,moved:false};hero.setPointerCapture?.(e.pointerId);hero.classList.add('dragging');stopAuto()});
hero.addEventListener('pointermove',e=>{if(!pointer||pointer.id!==e.pointerId)return;if(Math.abs(e.clientX-pointer.x)>8)pointer.moved=true});
hero.addEventListener('pointerup',e=>{if(!pointer||pointer.id!==e.pointerId)return;const dx=e.clientX-pointer.x;hero.classList.remove('dragging');if(Math.abs(dx)>55)step(dx<0?1:-1);pointer=null;scheduleAuto()});
document.addEventListener('visibilitychange',()=>document.hidden?stopAuto():scheduleAuto());
window.ProductEditorialEngine={step,getState:()=>({active,transitioning,category:C.categories[active]})};scheduleAuto();
})();