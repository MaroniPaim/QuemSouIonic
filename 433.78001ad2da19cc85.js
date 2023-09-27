"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[433],{433:(M,_,l)=>{l.r(_),l.d(_,{ion_datetime_button:()=>v});var b=l(5861),r=l(8423),g=l(839),x=l(6710),C=l(3567),O=l(2560),d=l(4121);const v=class{constructor(n){var s,p,a=this;(0,r.r)(this,n),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{const{datetimeEl:e,datetimePresentation:i}=this;if(!e)return;const{value:o,locale:t,hourCycle:c,preferWheel:u,multiple:h,titleSelectedDatesFormatter:T}=e,f=this.getParsedDateValues(o),E=(0,d.q)(f.length>0?f:[(0,d.t)()]);if(!E)return;const m=E[0],y=(0,d.J)(t,c);switch(this.dateText=this.timeText=void 0,i){case"date-time":case"time-date":const D=(0,d.T)(t,m),P=(0,d.K)(t,m,y);u?this.dateText=`${D} ${P}`:(this.dateText=D,this.timeText=P);break;case"date":if(h&&1!==f.length){let k=`${f.length} days`;if(void 0!==T)try{k=T(f)}catch(B){(0,x.a)("Exception in provided `titleSelectedDatesFormatter`: ",B)}this.dateText=k}else this.dateText=(0,d.T)(t,m);break;case"time":this.timeText=(0,d.K)(t,m,y);break;case"month-year":this.dateText=(0,d.G)(t,m);break;case"month":this.dateText=(0,d.S)(t,m,{month:"long"});break;case"year":this.dateText=(0,d.S)(t,m,{year:"numeric"})}},this.waitForDatetimeChanges=(0,b.Z)(function*(){const{datetimeEl:e}=a;return e?new Promise(i=>{(0,g.a)(e,"ionRender",i,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(e){return(s=s||(0,b.Z)(function*(i){const{datetimeEl:o,datetimePresentation:t}=a;if(!o)return;let c=!1;switch(t){case"date-time":case"time-date":!o.preferWheel&&"date"!==o.presentation&&(o.presentation="date",c=!0)}a.selectedButton="date",a.presentOverlay(i,c,a.dateTargetEl)})).apply(this,arguments)},this.handleTimeClick=e=>{const{datetimeEl:i,datetimePresentation:o}=this;if(!i)return;let t=!1;switch(o){case"date-time":case"time-date":"time"!==i.presentation&&(i.presentation="time",t=!0)}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=function(e,i,o){return(p=p||(0,b.Z)(function*(t,c,u){const{overlayEl:h}=a;h&&("ION-POPOVER"===h.tagName?(c&&(yield a.waitForDatetimeChanges()),h.present(Object.assign(Object.assign({},t),{detail:{ionShadowTarget:u}}))):h.present())})).apply(this,arguments)},this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var n=this;return(0,b.Z)(function*(){const{datetime:a}=n;if(!a)return void(0,x.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",n.el);const s=n.datetimeEl=document.getElementById(a);if(!s)return void(0,x.a)(`No ion-datetime instance found for ID '${a}'.`,n.el);if("ION-DATETIME"!==s.tagName)return void(0,x.a)(`Expected an ion-datetime instance for ID '${a}' but received '${s.tagName.toLowerCase()}' instead.`,s);new IntersectionObserver(i=>{n.datetimeActive=i[0].isIntersecting},{threshold:.01}).observe(s);const e=n.overlayEl=s.closest("ion-modal, ion-popover");e&&e.classList.add("ion-datetime-button-overlay"),(0,g.c)(s,()=>{const i=n.datetimePresentation=s.presentation||"date-time";switch(n.setDateTimeText(),(0,g.a)(s,"ionValueChange",n.setDateTimeText),i){case"date-time":case"date":case"month-year":case"month":case"year":n.selectedButton="date";break;case"time-date":case"time":n.selectedButton="time"}})})()}render(){const{color:n,dateText:a,timeText:s,selectedButton:p,datetimeActive:e,disabled:i}=this,o=(0,O.b)(this);return(0,r.h)(r.H,{class:(0,C.c)(n,{[o]:!0,[`${p}-active`]:e,"datetime-button-disabled":i})},a&&(0,r.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":e?"true":"false",onClick:this.handleDateClick,disabled:i,part:"native",ref:t=>this.dateTargetEl=t},(0,r.h)("slot",{name:"date-target"},a),"md"===o&&(0,r.h)("ion-ripple-effect",null)),s&&(0,r.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":e?"true":"false",onClick:this.handleTimeClick,disabled:i,part:"native",ref:t=>this.timeTargetEl=t},(0,r.h)("slot",{name:"time-target"},s),"md"===o&&(0,r.h)("ion-ripple-effect",null)))}get el(){return(0,r.f)(this)}};v.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);