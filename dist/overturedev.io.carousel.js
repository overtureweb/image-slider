(()=>{"use strict";var t={819:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var i=s(81),r=s.n(i),l=s(645),n=s.n(l)()(r());n.push([t.id,':host{display:block;--transition-speed: 500ms;--max-width: 100%;--slide-width: calc(100 / 3 * .95%)}:host([hidden]){display:none}:host([autoplay-mode=crawl]){--cursor: pointer;--transition-speed: 6000ms}.slider{max-width:var(--max-width);overflow:hidden;margin:0 auto;touch-action:none;display:flex;align-items:center;position:relative}.slider:hover{cursor:var(--cursor, grab)}.slider__slides{display:flex;position:relative;left:calc(var(--slide-width)*-1)}.slider__slides.slide-image{transition:transform var(--transition-speed) var(--easing, linear)}.slider__slides:after{content:"";position:absolute;width:100%;height:100%;left:var(--slide-width)}.slider__slide{flex:1 0 var(--slide-width);padding-right:.5rem;box-sizing:border-box}.slider__slide img{width:100%;height:100%}.slider__controls{display:flex;position:absolute;justify-content:space-between;width:100%}.slider__button{background:#4682b4;border:1px solid #4682b4;padding:.5rem .625rem;color:#fff;font-size:1rem;transition:all .25s ease;position:absolute}.slider__button.left{left:5px}.slider__button.right{right:5px}.slider__button:hover{color:#4682b4;background:#fff;border:1px solid #4682b4}',""]);const o=n},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",i=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),i&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),i&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,i,r,l){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var d=0;d<t.length;d++){var h=[].concat(t[d]);i&&n[h[0]]||(void 0!==l&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=l),s&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=s):h[2]=s),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},306:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i='<div class="slider"> <div class="slider__slides"></div> <button aria-label="left button" class="slider__button left"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16"> <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/> </svg> </button> <button aria-label="right button" class="slider__button right"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg> </button> </div> '},811:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(819),r=s(306);var l;!function(t){t.crawl="crawl",t.step="step"}(l||(l={}));class n extends HTMLElement{constructor(){super(),this.slides=[],this.isDirectionLeft=!0,this.isScrolling=!1,this.start=0,this.scrolled=0,this.slideWidthPx=0,this.autoplay=()=>{},this.initImgLazyLoading=()=>{const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const s=t.target;"IMG"===s.tagName&&(s.dataset.src&&(s.src=s.dataset.src),e.unobserve(s))}}))}),{threshold:0});this.slides.forEach((e=>{const s=e.querySelector(".lazyload");s&&t.observe(s)}))},this.reorderSlides=()=>{if(this.slidesWrapper.classList.remove("slide-image"),Math.abs(this.scrolled)>0)return this.scrolled=0;let t=this.isDirectionLeft?this.slides.length-1:1;this.setSlidesFlexOrder(t),this.slideToZero()},this.handleClick=t=>{const e=t.currentTarget;this.isDirectionLeft=e.classList.contains("left"),this.doTransition()},this.handlePointerDown=t=>{t.preventDefault(),this.isScrolling=!0,this.autoPlayIntervalID&&this.disableStepInterval();const e=t.currentTarget;e.setPointerCapture(t.pointerId),e.style.cursor="grabbing",this.start=t.clientX},this.handlePointerMove=t=>{t.preventDefault(),this.isScrolling&&(this.scrolled=t.clientX-this.start,this.isDirectionLeft=this.scrolled<0,this.slideX(),Math.abs(this.scrolled/this.slideWidthPx)>1&&(this.scrolled=0,this.reorderSlides(),this.start=t.clientX))},this.handlePointerUp=t=>{t.preventDefault(),this.slidesWrapper.classList.add("slide-image"),Math.abs(this.scrolled/this.slideWidthPx)>.5?(this.scrolled=0,this.slideX()):this.slideToZero(),this.isScrolling=!1},this.slideX=()=>this.slidesWrapper.style.transform=this.scrolled?`translateX(${this.scrolled}px)`:`translateX(${(this.isDirectionLeft?-1:1)*this.slideWidthPx}px)`,this.slideToZero=()=>this.slidesWrapper.style.transform="translateX(0)",this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=r.default,this.addStyleSheet(),this.slidesWrapper=this.shadowRoot.querySelector(".slider__slides"),this.sliderButtons=this.shadowRoot.querySelectorAll("button");try{this.slides=this.initSlides(),this.slidesWrapper.append(...this.slides),this.setSlidesFlexOrder()}catch(t){t instanceof Error&&console.log(`Image Loading Error: ${t.message}`)}}connectedCallback(){this.setListeners(),this.handleUserSettings()}initSlides(){const t=document.createElement("slot");if(this.shadowRoot.append(t),!t.assignedElements().length)throw new Error("No properly formatted images found");const e=t.assignedElements().filter((t=>"IMG"===t.tagName)),s=Array(2*e.length);for(let t=0;t<s.length/2;t++){const i=document.createElement("div");i.classList.add("slider__slide"),i.append(e[t]),s[t]=i,s[t+s.length/2]=i.cloneNode(!0)}return s}initAutoPlay(t=3e3,e){switch(e){case l.crawl:return this.slidesWrapper.removeEventListener("pointerdown",this.handlePointerDown),this.slidesWrapper.removeEventListener("pointermove",this.handlePointerMove),this.slidesWrapper.removeEventListener("pointerup",this.handlePointerUp),this.setCrawlDirToggle(),this.doTransition;case l.step:return()=>{this.autoPlayIntervalID||(this.autoPlayIntervalID=setInterval((()=>this.doTransition()),+t))};default:return()=>null}}disableStepInterval(){clearInterval(this.autoPlayIntervalID),this.autoPlayIntervalID=null}setCrawlDirToggle(){let t;this.slidesWrapper.addEventListener("pointerdown",(e=>{e.preventDefault(),t=e.clientX})),this.slidesWrapper.addEventListener("pointerup",(e=>{e.preventDefault(),this.isDirectionLeft=e.clientX<t,this.doTransition()}))}addStyleSheet(){const t=document.createElement("style");t.textContent=i.default,this.shadowRoot.appendChild(t)}handleUserSettings(){this.autoplay=this.initAutoPlay(this.getAttribute("step-interval")||void 0,this.getAttribute("autoplay-mode")),this.hasAttribute("hide-controls")&&this.sliderButtons.forEach((t=>t.hidden=!0)),this.hasAttribute("lazyload")&&this.initImgLazyLoading();const[t]=this.shadowRoot.styleSheets;[...this.attributes].forEach((({name:e,value:s})=>{var i,r;const l=null===(r=(i=this.mapHtmlAttrsToCss())[e])||void 0===r?void 0:r.call(i,s);l&&t.insertRule(l,t.cssRules.length)}))}mapHtmlAttrsToCss(){return{"max-width":t=>`:host {--max-width: ${t}}`,"num-slides":t=>`:host {--slide-width: calc(100 / ${t} * .95%);}`,"num-slides-md":t=>`@media all and (min-width: 768px) {:host {--slide-width: calc(100 / ${t} * .95%);}}`,"num-slides-lg":t=>`@media all and (min-width: 992px) {:host {--slide-width: calc(100 / ${t} * .95%);}}`,"num-slides-xl":t=>`@media all and (min-width: 1200px) {:host {--slide-width: calc(100 / ${t} * .95%);}}`,"transition-speed":t=>`:host {--transition-speed: ${t}ms}`,"crawl-speed":t=>`:host([autoplay-mode=crawl]) {--transition-speed: ${t}ms}`,"transition-easing":t=>`:host {--easing: ${t}`}}setListeners(){this.sliderButtons.forEach((t=>t.addEventListener("click",this.handleClick))),this.slidesWrapper.addEventListener("transitionend",(()=>{this.reorderSlides(),setTimeout((()=>{this.autoplay()}),0)})),this.slidesWrapper.addEventListener("pointerdown",this.handlePointerDown),this.slidesWrapper.addEventListener("pointermove",this.handlePointerMove),this.slidesWrapper.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("load",(()=>{this.slideWidthPx=this.slides[0].getBoundingClientRect().width,this.autoplay()})),window.addEventListener("resize",(()=>this.slideWidthPx=this.slides[0].getBoundingClientRect().width))}setSlidesFlexOrder(t=1){this.slides.forEach(((e,s)=>{e.style.order=((+(e.style.order||s)+t)%this.slides.length).toString()}))}doTransition(){this.slidesWrapper.classList.add("slide-image"),this.slideX()}}e.default=n}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var l=e[i]={id:i,exports:{}};return t[i](l,l.exports,s),l.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=s(811);customElements.define("image-slider",t.default)})()})();