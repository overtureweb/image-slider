(()=>{"use strict";var e={819:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s(81),r=s.n(i),l=s(645),n=s.n(l)()(r());n.push([e.id,':host{display:block;--slide-width: calc(100 / 3 * .95%)}:host([hidden]){display:none}:host([max-width]){--max-width: var(--max-width)}:host([num-slides]){--slide-width: calc(100 / var(--num-slides, 3) * .95%)}.slider{max-width:var(--max-width, 720px);overflow:hidden;margin:0 auto;touch-action:none;display:flex;align-items:center;position:relative}.slider:hover{cursor:grab}.slider__slides{display:flex;position:relative;left:calc(var(--slide-width)*-1)}.slider__slides.slide-image{--transition-speed: .5s;transition:transform var(--transition-speed) cubic-bezier(0, 0, 1, 1)}.slider__slides:after{content:"";position:absolute;width:100%;height:100%;left:var(--slide-width)}.slider__slide{flex:0 0 var(--slide-width);padding-right:.5rem;box-sizing:border-box}.slider__slide img{width:100%;height:100%}.slider__controls{display:flex;position:absolute;justify-content:space-between;width:100%}.slider__button{background:#4682b4;border:1px solid #4682b4;padding:.5rem .625rem;color:#fff;font-size:1rem;transition:all .25s ease;position:absolute}.slider__button.left{left:5px}.slider__button.right{right:5px}.slider__button:hover{color:#4682b4;background:#fff;border:1px solid #4682b4}',""]);const d=n},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(i)for(var d=0;d<this.length;d++){var o=this[d][0];null!=o&&(n[o]=!0)}for(var a=0;a<e.length;a++){var h=[].concat(e[a]);i&&n[h[0]]||(void 0!==l&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=l),s&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=s):h[2]=s),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),t.push(h))}},t}},81:e=>{e.exports=function(e){return e[1]}},306:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i='<div class="slider"> <div class="slider__slides"></div> <button class="slider__button left"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16"> <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/> </svg> </button> <button class="slider__button right"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg> </button> </div>'},811:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=s(819),r=s(306),l=document.createElement("template");l.innerHTML=r.default;class n extends HTMLElement{constructor(){super(),this.slides=[],this.imageOrder=[],this.isSlidingLeft=!0,this.isScrolling=!1,this.start=0,this.scrolled=0,this.slideWidthPx=0,this.autoplay=()=>{},this.reorderSlides=()=>{if(this.slidesWrapper.classList.remove("slide-image"),Math.abs(this.scrolled)>0)return this.scrolled=0;let e=this.isSlidingLeft?this.slides.length-1:1;this.setSlidesFlexOrder(e),this.slideReset(),setTimeout((()=>this.autoplay()),0)},this.handleClick=e=>{const t=e.currentTarget;this.isSlidingLeft=t.classList.contains("left"),this.slidesWrapper.classList.add("slide-image"),this.slideX()},this.handlePointerDown=e=>{e.preventDefault();const t=e.currentTarget;t.setPointerCapture(e.pointerId),t.style.cursor="grabbing",this.isScrolling=!0,this.start=e.clientX,this.disableStepInterval()},this.handlePointerMove=e=>{e.preventDefault(),this.isScrolling&&(this.scrolled=e.clientX-this.start,this.isSlidingLeft=this.scrolled<0,this.slideX(),Math.abs(this.scrolled/this.slideWidthPx)>1&&(this.scrolled=0,this.reorderSlides(),this.start=e.clientX))},this.handlePointerUp=e=>{e.preventDefault(),this.slidesWrapper.classList.add("slide-image"),Math.abs(this.scrolled/this.slideWidthPx)>.5?(this.scrolled=0,this.slideX()):this.slideReset(),this.isScrolling=!1,this.autoplay()},this.slideX=()=>this.slidesWrapper.style.transform=this.scrolled?`translateX(${this.scrolled}px)`:`translateX(${(this.isSlidingLeft?-1:1)*this.slideWidthPx}px)`,this.slideReset=()=>this.slidesWrapper.style.transform="translateX(0)",this.attachShadow({mode:"open"}),this.shadowDOM=this.shadowRoot,this.shadowDOM.appendChild(l.content.cloneNode(!0)),this.stylesheet=this.addStyleSheet(),this.slidesWrapper=this.shadowDOM.querySelector(".slider__slides"),this.sliderButtons=this.shadowDOM.querySelectorAll("button");try{this.slides=this.initSlides(),this.slidesWrapper.append(...this.slides),this.imageOrder=this.initSlidesFlexOrder(this.slides),this.setSlidesFlexOrder(),this.handleUserSettings()}catch(e){e instanceof Error&&console.log(`Image Loading Error: ${e.message}`)}}connectedCallback(){this.setEvents(),this.hidden=!1}initSlides(){const e=document.createElement("slot");if(e.name="slide",this.shadowDOM.append(e),!e.assignedNodes().length)throw new Error("No properly formatted images found");const t=Array.from({length:2*e.assignedNodes().length});for(let s=0;s<=t.length/2-1;s++){let[i]=e.assignedNodes();const r=document.createElement("div");r.classList.add("slider__slide"),r.append(i),t[s]=r,t[s+t.length/2]=r.cloneNode(!0)}return t}initAutoPlay(){const e=this.getAttribute("auto-play-mode"),[t,s]=this.sliderButtons;return()=>{switch(e){case"crawl":this.slidesWrapper.removeEventListener("pointerdown",this.handlePointerDown),this.slidesWrapper.removeEventListener("pointermove",this.handlePointerMove),this.slidesWrapper.removeEventListener("pointerup",this.handlePointerUp);const e=this.getAttribute("crawl-timing"),i=6e3;return this.stylesheet.insertRule(`.slider__slides.slide-image{--transition-speed:${e||i}ms`,this.stylesheet.cssRules.length),this.stylesheet.insertRule(".slider:hover{cursor:default}",this.stylesheet.cssRules.length),this.isSlidingLeft?t.click():s.click();case"step":if(this.autoPlayIntervalID)return;const r=this.getAttribute("step-timing"),l=3e3;return this.autoPlayIntervalID=setInterval((()=>this.isSlidingLeft?t.click():s.click()),Number(r)||l)}}}disableStepInterval(){clearInterval(this.autoPlayIntervalID),this.autoPlayIntervalID=null}addStyleSheet(){const e=document.createElement("style");return e.textContent=i.default,this.shadowDOM.append(e),e.sheet}handleUserSettings(){this.autoplay=this.initAutoPlay(),this.hasAttribute("hide-controls")&&this.sliderButtons.forEach((e=>e.hidden=!0))}setEvents(){this.sliderButtons.forEach((e=>e.addEventListener("click",this.handleClick))),this.slidesWrapper.addEventListener("transitionend",this.reorderSlides),this.slidesWrapper.addEventListener("pointerdown",this.handlePointerDown),this.slidesWrapper.addEventListener("pointermove",this.handlePointerMove),this.slidesWrapper.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("load",(()=>{this.slideWidthPx=this.slides[0].getBoundingClientRect().width,this.autoplay()})),window.addEventListener("resize",(()=>this.slideWidthPx=this.slides[0].getBoundingClientRect().width))}initSlidesFlexOrder(e){return Array.from({length:e.length},((t,s)=>(s+1)%e.length))}setSlidesFlexOrder(e=0){this.slides.forEach(((t,s)=>{this.imageOrder[s]=(this.imageOrder[s]+e)%this.slides.length,t.style.order=this.imageOrder[s].toString()}))}}t.default=n}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var l=t[i]={id:i,exports:{}};return e[i](l,l.exports,s),l.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=s(811);customElements.define("image-slider",e.default)})()})();