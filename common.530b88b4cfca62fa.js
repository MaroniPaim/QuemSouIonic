"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9003:(L,v,a)=>{a.d(v,{c:()=>r});var g=a(8423),l=a(7150),h=a(9203);const r=(o,s)=>{let e,t;const c=(i,m,w)=>{if(typeof document>"u")return;const p=document.elementFromPoint(i,m);p&&s(p)?p!==e&&(n(),u(p,w)):n()},u=(i,m)=>{e=i,t||(t=e);const w=e;(0,g.w)(()=>w.classList.add("ion-activated")),m()},n=(i=!1)=>{if(!e)return;const m=e;(0,g.w)(()=>m.classList.remove("ion-activated")),i&&t!==e&&e.click(),e=void 0};return(0,h.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>c(i.currentX,i.currentY,l.a),onMove:i=>c(i.currentX,i.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),t=void 0}})}},4874:(L,v,a)=>{a.d(v,{g:()=>l});var g=a(6225);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5149:(L,v,a)=>{a.d(v,{g:()=>g});const g=(s,e,t,c,u)=>h(s[1],e[1],t[1],c[1],u).map(n=>l(s[0],e[0],t[0],c[0],n)),l=(s,e,t,c,u)=>u*(3*e*Math.pow(u-1,2)+u*(-3*t*u+3*t+c*u))-s*Math.pow(u-1,3),h=(s,e,t,c,u)=>o((c-=u)-3*(t-=u)+3*(e-=u)-(s-=u),3*t-6*e+3*s,3*e-3*s,s).filter(i=>i>=0&&i<=1),o=(s,e,t,c)=>{if(0===s)return((s,e,t)=>{const c=e*e-4*s*t;return c<0?[]:[(-e+Math.sqrt(c))/(2*s),(-e-Math.sqrt(c))/(2*s)]})(e,t,c);const u=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(c/=s))/27;if(0===u)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-u),-Math.sqrt(-u)];const i=Math.pow(n/2,2)+Math.pow(u/3,3);if(0===i)return[Math.pow(n/2,.5)-e/3];if(i>0)return[Math.pow(-n/2+Math.sqrt(i),1/3)-Math.pow(n/2+Math.sqrt(i),1/3)-e/3];const m=Math.sqrt(Math.pow(-u/3,3)),w=Math.acos(-n/(2*Math.sqrt(Math.pow(-u/3,3)))),p=2*Math.pow(m,1/3);return[p*Math.cos(w/3)-e/3,p*Math.cos((w+2*Math.PI)/3)-e/3,p*Math.cos((w+4*Math.PI)/3)-e/3]}},5085:(L,v,a)=>{a.d(v,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(L,v,a)=>{a.r(v),a.d(v,{startFocusVisible:()=>r});const g="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,c=o||document.body,u=E=>{s.forEach(y=>y.classList.remove(g)),E.forEach(y=>y.classList.add(g)),s=E},n=()=>{e=!1,u([])},i=E=>{e=h.includes(E.key),e||u([])},m=E=>{if(e&&void 0!==E.composedPath){const y=E.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));u(y)}},w=()=>{t.activeElement===c&&u([])};return t.addEventListener("keydown",i),t.addEventListener("focusin",m),t.addEventListener("focusout",w),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",i),t.removeEventListener("focusin",m),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:u}}},5487:(L,v,a)=>{a.d(v,{c:()=>l});var g=a(839);const l=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const u=void 0!==e.label||h(e),n=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,i=(0,g.h)(e);t=!0===e.legacy||!u&&!n&&null!==i}return t}}},h=s=>null!==s.shadowRoot&&!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(L,v,a)=>{a.d(v,{I:()=>l,a:()=>e,b:()=>t,c:()=>s,d:()=>u,h:()=>c});var g=a(4874),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const r={getEngine(){const n=window.TapticEngine;if(n)return n;const i=(0,g.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,g.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(n){const i=this.getEngine();if(!i)return;const m=this.isCapacitor()?n.style:n.style.toLowerCase();i.impact({style:m})},notification(n){const i=this.getEngine();if(!i)return;const m=this.isCapacitor()?n.type:n.type.toLowerCase();i.notification({type:m})},selection(){const n=this.isCapacitor()?l.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},e=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},c=()=>{o()&&r.selectionEnd()},u=n=>{o()&&r.impact(n)}},8360:(L,v,a)=>{a.d(v,{I:()=>e,a:()=>n,b:()=>s,c:()=>w,d:()=>E,f:()=>i,g:()=>u,i:()=>c,p:()=>p,r:()=>y,s:()=>m});var r,g=a(5861),l=a(839),h=a(6710);const s="ion-content",e=".ion-content-scroll-host",t=`${s}, ${e}`,c=f=>"ION-CONTENT"===f.tagName,u=function(_){return(r=r||(0,g.Z)(function*(O){return c(O)?(yield new Promise(M=>(0,l.c)(O,M)),O.getScrollElement()):O})).apply(this,arguments)},n=f=>f.querySelector(e)||f.querySelector(t),i=f=>f.closest(t),m=(f,_)=>c(f)?f.scrollToTop(_):Promise.resolve(f.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(f,_,O,M)=>c(f)?f.scrollByPoint(_,O,M):Promise.resolve(f.scrollBy({top:O,left:_,behavior:M>0?"smooth":"auto"})),p=f=>(0,h.b)(f,s),E=f=>{if(c(f)){const O=f.scrollY;return f.scrollY=!1,O}return f.style.setProperty("overflow","hidden"),!0},y=(f,_)=>{c(f)?f.scrollY=_:f.style.removeProperty("overflow")}},3173:(L,v,a)=>{a.d(v,{a:()=>g,b:()=>m,c:()=>e,d:()=>w,e:()=>C,f:()=>s,g:()=>p,h:()=>h,i:()=>l,j:()=>O,k:()=>M,l:()=>t,m:()=>n,n:()=>E,o:()=>u,p:()=>o,q:()=>r,r:()=>_,s:()=>d,t:()=>i,u:()=>y,v:()=>f,w:()=>c});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(L,v,a)=>{a.d(v,{c:()=>r,g:()=>o});var g=a(6225),l=a(839),h=a(6710);const r=(e,t,c)=>{let u,n;void 0!==g.w&&"MutationObserver"in g.w&&(u=new MutationObserver(p=>{for(const E of p)for(const y of E.addedNodes)if(y.nodeType===Node.ELEMENT_NODE&&y.slot===t)return c(),void(0,l.r)(()=>i(y))}),u.observe(e,{childList:!0}));const i=p=>{var E;n&&(n.disconnect(),n=void 0),n=new MutationObserver(y=>{c();for(const f of y)for(const _ of f.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&w()}),n.observe(null!==(E=p.parentElement)&&void 0!==E?E:p,{subtree:!0,childList:!0})},w=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),w()}}},o=(e,t,c)=>{const u=null==e?0:e.toString().length,n=s(u,t);if(void 0===c)return n;try{return c(u,t)}catch(i){return(0,h.a)("Exception in provided `counterFormatter`.",i),n}},s=(e,t)=>`${e} / ${t}`},7484:(L,v,a)=>{a.d(v,{K:()=>r,a:()=>h});var g=a(4874),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),h=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(h||{});const r={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(L,v,a)=>{a.r(v),a.d(v,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>M,keyboardDidClose:()=>y,keyboardDidOpen:()=>p,keyboardDidResize:()=>E,resetKeyboardAssist:()=>u,setKeyboardClose:()=>w,setKeyboardOpen:()=>m,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var g=a(7484);a(4874),a(6225);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},c=!1;const u=()=>{e={},t={},c=!1},n=d=>{if(g.K.getEngine())i(d);else{if(!d.visualViewport)return;t=M(d.visualViewport),d.visualViewport.onresize=()=>{O(d),p()||E(d)?m(d):y(d)&&w(d)}}},i=d=>{d.addEventListener("keyboardDidShow",C=>m(d,C)),d.addEventListener("keyboardDidHide",()=>w(d))},m=(d,C)=>{f(d,C),c=!0},w=d=>{_(d),c=!1},p=()=>!c&&e.width===t.width&&(e.height-t.height)*t.scale>150,E=d=>c&&!y(d),y=d=>c&&t.height===d.innerHeight,f=(d,C)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:C?C.keyboardHeight:d.innerHeight-t.height}});d.dispatchEvent(D)},_=d=>{const C=new CustomEvent(o);d.dispatchEvent(C)},O=d=>{e=Object.assign({},t),t=M(d.visualViewport)},M=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},3459:(L,v,a)=>{a.d(v,{c:()=>e});var r,g=a(5861),l=a(6225),h=a(7484);const o=t=>{if(void 0===l.d||t===h.a.None||void 0===t)return null;const c=l.d.querySelector("ion-app");return null!=c?c:l.d.body},s=t=>{const c=o(t);return null===c?0:c.clientHeight},e=function(c){return(r=r||(0,g.Z)(function*(u){var n;let i,m,w,p;const E=function(){return(n=n||(0,g.Z)(function*(){const d=yield h.K.getResizeMode(),C=void 0===d?void 0:d.mode;i=()=>{void 0===p&&(p=s(C)),w=!0,y(w,C)},m=()=>{w=!1,y(w,C)},null==l.w||l.w.addEventListener("keyboardWillShow",i),null==l.w||l.w.addEventListener("keyboardWillHide",m)})).apply(this,arguments)},y=(M,d)=>{u&&u(M,f(d))},f=M=>{if(0===p||p===s(M))return;const d=o(M);return null!==d?new Promise(C=>{const D=new ResizeObserver(()=>{d.clientHeight===p&&(D.disconnect(),C())});D.observe(d)}):void 0};return yield E(),{init:E,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",i),null==l.w||l.w.removeEventListener("keyboardWillHide",m),i=m=void 0},isKeyboardVisible:()=>w}})).apply(this,arguments)}},3830:(L,v,a)=>{a.d(v,{c:()=>l});var g=a(5861);const l=()=>{var h;let r;return{lock:function(){return(h=h||(0,g.Z)(function*(){const e=r;let t;return r=new Promise(c=>t=c),void 0!==e&&(yield e),t})).apply(this,arguments)}}}},5857:(L,v,a)=>{a.d(v,{c:()=>h});var g=a(6225),l=a(839);const h=(r,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==r.label||null===s()),u=()=>{const i=o();if(void 0===i)return;if(!t())return void i.style.removeProperty("width");const m=s().scrollWidth;if(0===m&&null===i.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const w=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(u(),w.disconnect(),e=void 0)},{threshold:.01,root:r});w.observe(i)}else i.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{u()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(L,v,a)=>{a.d(v,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(h,r,o)=>{const s=h*r/o-h+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(h,r,o)=>{const s=r/o,e=h*s-h+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":h*r/o-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":h*r/o-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":h*r/o-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":h*r/o-h+"ms"}})}}},8466:(L,v,a)=>{a.r(v),a.d(v,{createSwipeBackGesture:()=>o});var g=a(839),l=a(5085),h=a(9203);a(619);const o=(s,e,t,c,u)=>{const n=s.ownerDocument.defaultView;let i=(0,l.i)(s);const w=_=>i?-_.deltaX:_.deltaX;return(0,h.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:_=>(i=(0,l.i)(s),(_=>{const{startX:M}=_;return i?M>=n.innerWidth-50:M<=50})(_)&&e()),onStart:t,onMove:_=>{const M=w(_)/n.innerWidth;c(M)},onEnd:_=>{const O=w(_),M=n.innerWidth,d=O/M,C=(_=>i?-_.velocityX:_.velocityX)(_),D=C>=0&&(C>.2||O>M/2),P=(D?1-d:d)*M;let A=0;if(P>5){const x=P/Math.abs(C);A=Math.min(x,540)}u(D,d<=0?.01:(0,g.l)(0,d,.9999),A)}})}},7063:(L,v,a)=>{a.d(v,{w:()=>g});const g=(r,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(l(t,o))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,o)=>{let s;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=h(e.addedNodes[t],o)||s}),s},h=(r,o)=>1!==r.nodeType?void 0:(r.tagName===o.toUpperCase()?[r]:Array.from(r.querySelectorAll(o))).find(e=>e.value===r.value)}}]);