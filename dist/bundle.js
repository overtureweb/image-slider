/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/slider-image.scss":
/*!*******************************!*\
  !*** ./src/slider-image.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: block;\n  --transition-speed: 500ms;\n  --max-width: 100%;\n  --slide-width: calc(100 / 3 * .95%);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([autoplay-mode=crawl]) {\n  --cursor: pointer;\n  --transition-speed: 6000ms;\n}\n\n.slider {\n  max-width: var(--max-width);\n  overflow: hidden;\n  margin: 0 auto;\n  touch-action: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.slider:hover {\n  cursor: var(--cursor, grab);\n}\n.slider__slides {\n  display: flex;\n  position: relative;\n  left: calc(var(--slide-width) * -1);\n}\n.slider__slides.slide-image {\n  transition: transform var(--transition-speed) var(--easing, linear);\n}\n.slider__slides:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: var(--slide-width);\n}\n.slider__slide {\n  flex: 1 0 var(--slide-width);\n  padding-right: 0.5rem;\n  box-sizing: border-box;\n  -webkit-transform: translate3d(0, 0, 0);\n}\n.slider__slide img {\n  width: 100%;\n  height: 100%;\n}\n.slider__controls {\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  width: 100%;\n}\n.slider__button {\n  background: steelblue;\n  border: 1px solid steelblue;\n  padding: 0.5rem 0.625rem;\n  color: #fff;\n  font-size: 1rem;\n  transition: all 0.25s ease;\n  position: absolute;\n}\n.slider__button.left {\n  left: 5px;\n}\n.slider__button.right {\n  right: 5px;\n}\n.slider__button:hover {\n  color: steelblue;\n  background: white;\n  border: 1px solid steelblue;\n}", "",{"version":3,"sources":["webpack://./src/slider-image.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,yBAAA;EACA,iBAAA;EACA,mCAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;EACA,0BAAA;AACF;;AAEA;EACE,2BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AACF;AACE;EACE,2BAAA;AACJ;AAEE;EACE,aAAA;EACA,kBAAA;EACA,mCAAA;AAAJ;AAEI;EACE,mEAAA;AAAN;AAGI;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;AADN;AAKE;EACE,4BAAA;EACA,qBAAA;EACA,sBAAA;EACA,uCAAA;AAHJ;AAKI;EACE,WAAA;EACA,YAAA;AAHN;AAOE;EACE,aAAA;EACA,kBAAA;EACA,8BAAA;EACA,WAAA;AALJ;AAQE;EACE,qBAAA;EACA,2BAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;EACA,0BAAA;EACA,kBAAA;AANJ;AAQI;EACE,SAAA;AANN;AASI;EACE,UAAA;AAPN;AAUI;EACE,gBAAA;EACA,iBAAA;EACA,2BAAA;AARN","sourcesContent":[":host {\n  display: block;\n  --transition-speed: 500ms;\n  --max-width: 100%;\n  --slide-width: calc(100 / 3 * .95%);\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([autoplay-mode=crawl]) {\n  --cursor: pointer;\n  --transition-speed: 6000ms;\n}\n\n.slider {\n  max-width: var(--max-width);\n  overflow: hidden;\n  margin: 0 auto;\n  touch-action: none;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    cursor: var(--cursor, grab);\n  }\n\n  &__slides {\n    display: flex;\n    position: relative;\n    left: calc(var(--slide-width) * -1);\n\n    &.slide-image {\n      transition: transform var(--transition-speed) var(--easing, linear);\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: var(--slide-width);\n    }\n  }\n\n  &__slide {\n    flex: 1 0 var(--slide-width);\n    padding-right: .5rem;\n    box-sizing: border-box;\n    -webkit-transform:translate3d(0,0,0);\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  &__controls {\n    display: flex;\n    position: absolute;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  &__button {\n    background: steelblue;\n    border: 1px solid steelblue;\n    padding: .5rem .625rem;\n    color: #fff;\n    font-size: 1rem;\n    transition: all 0.25s ease;\n    position: absolute;\n\n    &.left {\n      left: 5px;\n    }\n\n    &.right {\n      right: 5px;\n    }\n\n    &:hover {\n      color: steelblue;\n      background: white;\n      border: 1px solid steelblue;\n    }\n  }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/slider-image.html":
/*!*******************************!*\
  !*** ./src/slider-image.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"slider\">\n    <div class=\"slider__slides\"></div>\n    <button aria-label=\"left button\" class=\"slider__button left\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n             class=\"bi bi-caret-left-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z\"/>\n        </svg>\n    </button>\n    <button aria-label=\"right button\" class=\"slider__button right\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n             class=\"bi bi-caret-right-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\"/>\n        </svg>\n    </button>\n</div>\n\n\n\n\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/slider-image.ts":
/*!*****************************!*\
  !*** ./src/slider-image.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const slider_image_scss_1 = __webpack_require__(/*! ./slider-image.scss */ "./src/slider-image.scss");
const slider_image_html_1 = __webpack_require__(/*! ./slider-image.html */ "./src/slider-image.html");
var AutoPlayModes;
(function (AutoPlayModes) {
    AutoPlayModes["crawl"] = "crawl";
    AutoPlayModes["step"] = "step";
})(AutoPlayModes || (AutoPlayModes = {}));
class Slider extends HTMLElement {
    constructor() {
        super();
        // collection of image slides which contain the image elements
        this.slides = [];
        // is the first/most recent transition direction left?
        this.isDirectionLeft = true;
        // is a pointer event in progress
        this.isScrolling = false;
        // stores the current X position of a pointer event
        this.start = 0;
        // cumulative amount scrolled since the start of the pointer event
        this.scrolled = 0;
        // the actual image width set by the CSS flex property
        this.slideWidthPx = 0;
        this.autoplay = () => {
        };
        this.initImgLazyLoading = () => {
            const obsCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target.tagName === "IMG") {
                            target.dataset.src && (target.src = target.dataset.src);
                            observer.unobserve(target);
                        }
                    }
                });
            };
            const observer = new IntersectionObserver(obsCallback, { threshold: 0 });
            this.slides.forEach(slide => {
                const lazyLoadable = slide.querySelector(".lazyload");
                if (lazyLoadable)
                    observer.observe(lazyLoadable);
            });
        };
        /**
         * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1
         */
        this.reorderSlides = () => {
            this.slidesWrapper.classList.remove("slide-image");
            if (Math.abs(this.scrolled) > 0)
                return (this.scrolled = 0);
            // using length prevents a negative number in the subsequent modulo call
            let step = this.isDirectionLeft ? this.slides.length - 1 : 1;
            this.setSlidesFlexOrder(step);
            this.slideToZero();
        };
        /**
         * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function
         * @param e Event
         */
        this.handleClick = (e) => {
            const button = e.currentTarget;
            this.isDirectionLeft = button.classList.contains("left");
            this.doTransition();
        };
        this.handlePointerDown = (e) => {
            e.preventDefault();
            this.isScrolling = true;
            this.autoPlayIntervalID && this.disableStepInterval();
            const currentTarget = e.currentTarget;
            // shows the grab cursor for mouseevents until the pointerup event is called
            currentTarget.setPointerCapture(e.pointerId);
            currentTarget.style.cursor = "grabbing";
            this.start = e.clientX;
        };
        this.handlePointerMove = (e) => {
            e.preventDefault();
            if (!this.isScrolling)
                return;
            this.scrolled = e.clientX - this.start;
            this.isDirectionLeft = this.scrolled < 0;
            this.slideX(); // important - this has to be called before reorderSlides to prevent a flicker
            if (Math.abs(this.scrolled / this.slideWidthPx) > 1) {
                this.scrolled = 0;
                this.reorderSlides();
                this.start = e.clientX;
            }
        };
        this.handlePointerUp = (e) => {
            e.preventDefault();
            this.slidesWrapper.classList.add("slide-image");
            // mimic snap scroll
            if (Math.abs(this.scrolled / this.slideWidthPx) > 0.5) {
                this.scrolled = 0;
                this.slideX();
            }
            else {
                this.slideToZero();
            }
            this.isScrolling = false;
        };
        /**
         * Apply translateX by either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide
         */
        this.slideX = () => this.slidesWrapper.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isDirectionLeft ? -1 : 1) * this.slideWidthPx}px)`;
        /**
         * TranslateX back to zero
         */
        this.slideToZero = () => this.slidesWrapper.style.transform = "translateX(0)";
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = slider_image_html_1.default;
        this.stylesheet = this.addStyleSheet();
        this.slidesWrapper = this.shadowRoot.querySelector(".slider__slides");
        this.sliderButtons = this.shadowRoot.querySelectorAll("button");
        try {
            this.slides = this.initSlides();
            this.slidesWrapper.append(...this.slides);
            this.setSlidesFlexOrder();
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`Image Loading Error: ${error.message}`);
            }
        }
    }
    connectedCallback() {
        this.setListeners();
        this.handleUserSettings();
    }
    initSlides() {
        const slotEl = document.createElement("slot");
        this.shadowRoot.append(slotEl);
        if (!slotEl.assignedElements().length)
            throw new Error("No properly formatted images found");
        const images = slotEl.assignedElements().filter(el => el.tagName === "IMG");
        const slides = Array(images.length * 2);
        for (let i = 0; i < slides.length / 2; i++) {
            const slideWrapper = document.createElement("div");
            slideWrapper.classList.add("slider__slide");
            slideWrapper.append(images[i]);
            // add the original and cloned image to the slides array
            slides[i] = slideWrapper;
            slides[i + slides.length / 2] = slideWrapper.cloneNode(true);
        }
        return slides;
    }
    initAutoPlay(stepInterval = 3000, mode) {
        switch (mode) {
            case AutoPlayModes.crawl:
                this.slidesWrapper.removeEventListener("pointerdown", this.handlePointerDown);
                this.slidesWrapper.removeEventListener("pointermove", this.handlePointerMove);
                this.slidesWrapper.removeEventListener("pointerup", this.handlePointerUp);
                this.setCrawlDirToggle();
                return this.doTransition;
            case AutoPlayModes.step:
                return () => {
                    if (this.autoPlayIntervalID)
                        return;
                    this.autoPlayIntervalID = setInterval(() => this.doTransition(), +stepInterval);
                };
            // if no autoplay-mode attribute was passed or it's one of the cases then return a function stub
            default:
                return () => null;
        }
    }
    disableStepInterval() {
        clearInterval(this.autoPlayIntervalID);
        this.autoPlayIntervalID = null;
    }
    setCrawlDirToggle() {
        let pointerOrigin;
        this.slidesWrapper.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            pointerOrigin = e.clientX;
        });
        this.slidesWrapper.addEventListener("pointerup", (e) => {
            e.preventDefault();
            this.isDirectionLeft = e.clientX < pointerOrigin;
            this.doTransition();
        });
    }
    addStyleSheet() {
        const styles = document.createElement("style");
        styles.textContent = slider_image_scss_1.default;
        this.shadowRoot.append(styles);
        return styles.sheet;
    }
    handleUserSettings() {
        this.autoplay = this.initAutoPlay(this.getAttribute("step-interval") || undefined, this.getAttribute("autoplay-mode"));
        this.hasAttribute("hide-controls") && this.sliderButtons.forEach(btn => btn.hidden = true);
        this.initImgLazyLoading();
        [...this.attributes].forEach(({ name, value }) => {
            var _a, _b;
            const cssRule = (_b = (_a = this.mapHtmlAttrsToCss())[name]) === null || _b === void 0 ? void 0 : _b.call(_a, value);
            cssRule && this.stylesheet.insertRule(cssRule, this.stylesheet.cssRules.length);
        });
    }
    mapHtmlAttrsToCss() {
        return {
            "max-width": (value) => `:host {--max-width: ${value}}`,
            "num-slides": (value) => `:host {--slide-width: calc(100 / ${+value} * .95%);}`,
            "num-slides-md": (value) => `@media all and (min-width: 768px) {:host {--slide-width: calc(100 / ${+value} * .95%);}}`,
            "num-slides-lg": (value) => `@media all and (min-width: 992px) {:host {--slide-width: calc(100 / ${+value} * .95%);}}`,
            "num-slides-xl": (value) => `@media all and (min-width: 1200px) {:host {--slide-width: calc(100 / ${+value} * .95%);}}`,
            "transition-speed": (value) => `:host {--transition-speed: ${value}ms}`,
            "crawl-speed": (value) => `:host([autoplay-mode=crawl]) {--transition-speed: ${value}ms}`,
            "transition-easing": (value) => `:host {--easing: ${value}`
        };
    }
    /**
     * Set all the event listeners
     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here
     */
    setListeners() {
        this.sliderButtons.forEach(btn => btn.addEventListener("click", this.handleClick));
        this.slidesWrapper.addEventListener("transitionend", () => {
            this.reorderSlides();
            setTimeout(() => {
                this.autoplay();
            }, 0);
        });
        this.slidesWrapper.addEventListener("pointerdown", this.handlePointerDown);
        this.slidesWrapper.addEventListener("pointermove", this.handlePointerMove);
        this.slidesWrapper.addEventListener("pointerup", this.handlePointerUp);
        window.addEventListener("load", () => {
            this.slideWidthPx = this.slides[0].getBoundingClientRect().width;
            this.autoplay();
        });
        window.addEventListener("resize", () => (this.slideWidthPx = this.slides[0].getBoundingClientRect().width));
    }
    /**
     * Sets the initial and current order of the flex elements, this combined with the translateX transition is what creates the scroll effect
     * The Image Slider is offset by the width of one slide (prevents a gap from appearing), the initial function call offsets by 1 to make the last image first, and outside the viewport
     * @param step
     */
    setSlidesFlexOrder(step = 1) {
        this.slides.forEach((slide, i) => {
            slide.style.order = ((+(slide.style.order || i) + step) % this.slides.length).toString();
        });
    }
    doTransition() {
        this.slidesWrapper.classList.add("slide-image");
        this.slideX();
    }
}
exports["default"] = Slider;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const slider_image_1 = __webpack_require__(/*! ./slider-image */ "./src/slider-image.ts");
customElements.define("image-slider", slider_image_1.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFZRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBaURKO0FBRUQscUJBQWUsTUFBTSxDQUFDOzs7Ozs7O1VDalJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLDBGQUFvQztBQUNwQyxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxzQkFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc2xpZGVyLWltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc2xpZGVyLWltYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL3NsaWRlci1pbWFnZS50cyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDUwMG1zO1xcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XFxuICAtLXNsaWRlLXdpZHRoOiBjYWxjKDEwMCAvIDMgKiAuOTUlKTtcXG59XFxuXFxuOmhvc3QoW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KFthdXRvcGxheS1tb2RlPWNyYXdsXSkge1xcbiAgLS1jdXJzb3I6IHBvaW50ZXI7XFxuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDYwMDBtcztcXG59XFxuXFxuLnNsaWRlciB7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNsaWRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHZhcigtLWN1cnNvciwgZ3JhYik7XFxufVxcbi5zbGlkZXJfX3NsaWRlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogY2FsYyh2YXIoLS1zbGlkZS13aWR0aCkgKiAtMSk7XFxufVxcbi5zbGlkZXJfX3NsaWRlcy5zbGlkZS1pbWFnZSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tZWFzaW5nLCBsaW5lYXIpO1xcbn1cXG4uc2xpZGVyX19zbGlkZXM6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IHZhcigtLXNsaWRlLXdpZHRoKTtcXG59XFxuLnNsaWRlcl9fc2xpZGUge1xcbiAgZmxleDogMSAwIHZhcigtLXNsaWRlLXdpZHRoKTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5zbGlkZXJfX3NsaWRlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnNsaWRlcl9fY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2xpZGVyX19idXR0b24ge1xcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNjI1cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnNsaWRlcl9fYnV0dG9uLmxlZnQge1xcbiAgbGVmdDogNXB4O1xcbn1cXG4uc2xpZGVyX19idXR0b24ucmlnaHQge1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLnNsaWRlcl9fYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBzdGVlbGJsdWU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NsaWRlci1pbWFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLDJCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBQUo7QUFFSTtFQUNFLG1FQUFBO0FBQU47QUFHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFETjtBQUtFO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFITjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBTEo7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQU5KO0FBUUk7RUFDRSxTQUFBO0FBTk47QUFTSTtFQUNFLFVBQUE7QUFQTjtBQVVJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBUk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDUwMG1zO1xcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XFxuICAtLXNsaWRlLXdpZHRoOiBjYWxjKDEwMCAvIDMgKiAuOTUlKTtcXG59XFxuXFxuOmhvc3QoW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpob3N0KFthdXRvcGxheS1tb2RlPWNyYXdsXSkge1xcbiAgLS1jdXJzb3I6IHBvaW50ZXI7XFxuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDYwMDBtcztcXG59XFxuXFxuLnNsaWRlciB7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHZhcigtLWN1cnNvciwgZ3JhYik7XFxuICB9XFxuXFxuICAmX19zbGlkZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IGNhbGModmFyKC0tc2xpZGUtd2lkdGgpICogLTEpO1xcblxcbiAgICAmLnNsaWRlLWltYWdlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tZWFzaW5nLCBsaW5lYXIpO1xcbiAgICB9XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgbGVmdDogdmFyKC0tc2xpZGUtd2lkdGgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19zbGlkZSB7XFxuICAgIGZsZXg6IDEgMCB2YXIoLS1zbGlkZS13aWR0aCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICZfX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICAmLmxlZnQge1xcbiAgICAgIGxlZnQ6IDVweDtcXG4gICAgfVxcblxcbiAgICAmLnJpZ2h0IHtcXG4gICAgICByaWdodDogNXB4O1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBzdGVlbGJsdWU7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNsaWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fc2xpZGVzXFxcIj48L2Rpdj5cXG4gICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJsZWZ0IGJ1dHRvblxcXCIgY2xhc3M9XFxcInNsaWRlcl9fYnV0dG9uIGxlZnRcXFwiPlxcbiAgICAgICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiYmkgYmktY2FyZXQtbGVmdC1maWxsXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoIGQ9XFxcIm0zLjg2IDguNzUzIDUuNDgyIDQuNzk2Yy42NDYuNTY2IDEuNjU4LjEwNiAxLjY1OC0uNzUzVjMuMjA0YTEgMSAwIDAgMC0xLjY1OS0uNzUzbC01LjQ4IDQuNzk2YTEgMSAwIDAgMCAwIDEuNTA2elxcXCIvPlxcbiAgICAgICAgPC9zdmc+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcInJpZ2h0IGJ1dHRvblxcXCIgY2xhc3M9XFxcInNsaWRlcl9fYnV0dG9uIHJpZ2h0XFxcIj5cXG4gICAgICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTZcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgY2xhc3M9XFxcImJpIGJpLWNhcmV0LXJpZ2h0LWZpbGxcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+XFxuICAgICAgICAgICAgPHBhdGggZD1cXFwibTEyLjE0IDguNzUzLTUuNDgyIDQuNzk2Yy0uNjQ2LjU2Ni0xLjY1OC4xMDYtMS42NTgtLjc1M1YzLjIwNGExIDEgMCAwIDEgMS42NTktLjc1M2w1LjQ4IDQuNzk2YTEgMSAwIDAgMSAwIDEuNTA2elxcXCIvPlxcbiAgICAgICAgPC9zdmc+XFxuICAgIDwvYnV0dG9uPlxcbjwvZGl2PlxcblxcblxcblxcblxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3NsaWRlci1pbWFnZS5zY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9zbGlkZXItaW1hZ2UuaHRtbFwiO1xuXG5lbnVtIEF1dG9QbGF5TW9kZXMge1xuICAgIGNyYXdsID0gXCJjcmF3bFwiLFxuICAgIHN0ZXAgPSBcInN0ZXBcIlxufVxuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgLy8gc2xpZGVyIHdyYXBwZXIgZm9yIHRoZSBpbWFnZSBzbGlkZXNcbiAgICBzbGlkZXNXcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIC8vIGNvbGxlY3Rpb24gb2YgaW1hZ2Ugc2xpZGVzIHdoaWNoIGNvbnRhaW4gdGhlIGltYWdlIGVsZW1lbnRzXG4gICAgc2xpZGVzOiBIVE1MRGl2RWxlbWVudFtdID0gW107XG5cbiAgICAvLyBpcyB0aGUgZmlyc3QvbW9zdCByZWNlbnQgdHJhbnNpdGlvbiBkaXJlY3Rpb24gbGVmdD9cbiAgICBpc0RpcmVjdGlvbkxlZnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gaXMgYSBwb2ludGVyIGV2ZW50IGluIHByb2dyZXNzXG4gICAgaXNTY3JvbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIHN0b3JlcyB0aGUgY3VycmVudCBYIHBvc2l0aW9uIG9mIGEgcG9pbnRlciBldmVudFxuICAgIHN0YXJ0OiBudW1iZXIgPSAwO1xuXG4gICAgLy8gY3VtdWxhdGl2ZSBhbW91bnQgc2Nyb2xsZWQgc2luY2UgdGhlIHN0YXJ0IG9mIHRoZSBwb2ludGVyIGV2ZW50XG4gICAgc2Nyb2xsZWQ6IG51bWJlciA9IDA7XG5cbiAgICAvLyB0aGUgYWN0dWFsIGltYWdlIHdpZHRoIHNldCBieSB0aGUgQ1NTIGZsZXggcHJvcGVydHlcbiAgICBzbGlkZVdpZHRoUHg6IG51bWJlciA9IDA7XG5cbiAgICBhdXRvcGxheTogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICB9O1xuXG4gICAgYXV0b1BsYXlJbnRlcnZhbElEPzogTm9kZUpTLlRpbWVyIHwgYW55O1xuXG4gICAgc2xpZGVyQnV0dG9uczogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD47XG4gICAgc3R5bGVzaGVldDogQ1NTU3R5bGVTaGVldDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogXCJvcGVuXCJ9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLnN0eWxlc2hlZXQgPSB0aGlzLmFkZFN0eWxlU2hlZXQoKTtcbiAgICAgICAgdGhpcy5zbGlkZXNXcmFwcGVyID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fc2xpZGVzXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnNsaWRlckJ1dHRvbnMgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlcyA9IHRoaXMuaW5pdFNsaWRlcygpO1xuICAgICAgICAgICAgdGhpcy5zbGlkZXNXcmFwcGVyLmFwcGVuZCguLi50aGlzLnNsaWRlcyk7XG4gICAgICAgICAgICB0aGlzLnNldFNsaWRlc0ZsZXhPcmRlcigpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgTG9hZGluZyBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlVXNlclNldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgaW5pdFNsaWRlcygpOiBIVE1MRGl2RWxlbWVudFtdIHtcbiAgICAgICAgY29uc3Qgc2xvdEVsOiBIVE1MU2xvdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5hcHBlbmQoc2xvdEVsKTtcbiAgICAgICAgaWYgKCFzbG90RWwuYXNzaWduZWRFbGVtZW50cygpLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gcHJvcGVybHkgZm9ybWF0dGVkIGltYWdlcyBmb3VuZFwiKVxuICAgICAgICBjb25zdCBpbWFnZXMgPSBzbG90RWwuYXNzaWduZWRFbGVtZW50cygpLmZpbHRlcihlbCA9PiBlbC50YWdOYW1lID09PSBcIklNR1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50W107XG4gICAgICAgIGNvbnN0IHNsaWRlczogSFRNTERpdkVsZW1lbnRbXSA9IEFycmF5KGltYWdlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoIC8gMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZVdyYXBwZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNsaWRlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyX19zbGlkZVwiKTtcbiAgICAgICAgICAgIHNsaWRlV3JhcHBlci5hcHBlbmQoaW1hZ2VzW2ldKTtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgb3JpZ2luYWwgYW5kIGNsb25lZCBpbWFnZSB0byB0aGUgc2xpZGVzIGFycmF5XG4gICAgICAgICAgICBzbGlkZXNbaV0gPSBzbGlkZVdyYXBwZXI7XG4gICAgICAgICAgICBzbGlkZXNbaSArIHNsaWRlcy5sZW5ndGggLyAyXSA9IHNsaWRlV3JhcHBlci5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNsaWRlcztcbiAgICB9XG5cbiAgICBpbml0QXV0b1BsYXkoc3RlcEludGVydmFsOiBzdHJpbmcgfCBudW1iZXIgPSAzMDAwLCBtb2RlPzogQXV0b1BsYXlNb2Rlcykge1xuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0b1BsYXlNb2Rlcy5jcmF3bDpcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5oYW5kbGVQb2ludGVyVXApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Jhd2xEaXJUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb1RyYW5zaXRpb247XG4gICAgICAgICAgICBjYXNlIEF1dG9QbGF5TW9kZXMuc3RlcDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUGxheUludGVydmFsSUQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheUludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmRvVHJhbnNpdGlvbigpLCArc3RlcEludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBubyBhdXRvcGxheS1tb2RlIGF0dHJpYnV0ZSB3YXMgcGFzc2VkIG9yIGl0J3Mgb25lIG9mIHRoZSBjYXNlcyB0aGVuIHJldHVybiBhIGZ1bmN0aW9uIHN0dWJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVTdGVwSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheUludGVydmFsSUQpO1xuICAgICAgICB0aGlzLmF1dG9QbGF5SW50ZXJ2YWxJRCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0Q3Jhd2xEaXJUb2dnbGUoKSB7XG4gICAgICAgIGxldCBwb2ludGVyT3JpZ2luOiBudW1iZXI7XG4gICAgICAgIHRoaXMuc2xpZGVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJPcmlnaW4gPSBlLmNsaWVudFhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2xpZGVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmlzRGlyZWN0aW9uTGVmdCA9IGUuY2xpZW50WCA8IHBvaW50ZXJPcmlnaW47XG4gICAgICAgICAgICB0aGlzLmRvVHJhbnNpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRTdHlsZVNoZWV0KCk6IENTU1N0eWxlU2hlZXQge1xuICAgICAgICBjb25zdCBzdHlsZXM6IEhUTUxTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlcy50ZXh0Q29udGVudCA9IGNzcztcbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5hcHBlbmQoc3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5zaGVldCE7XG4gICAgfVxuXG4gICAgaGFuZGxlVXNlclNldHRpbmdzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dG9wbGF5ID0gdGhpcy5pbml0QXV0b1BsYXkodGhpcy5nZXRBdHRyaWJ1dGUoXCJzdGVwLWludGVydmFsXCIpIHx8IHVuZGVmaW5lZCwgdGhpcy5nZXRBdHRyaWJ1dGUoXCJhdXRvcGxheS1tb2RlXCIpIGFzIEF1dG9QbGF5TW9kZXMpO1xuICAgICAgICB0aGlzLmhhc0F0dHJpYnV0ZShcImhpZGUtY29udHJvbHNcIikgJiYgdGhpcy5zbGlkZXJCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5oaWRkZW4gPSB0cnVlKTtcbiAgICAgICAgdGhpcy5pbml0SW1nTGF6eUxvYWRpbmcoKTtcbiAgICAgICAgWy4uLnRoaXMuYXR0cmlidXRlc10uZm9yRWFjaCgoe25hbWUsIHZhbHVlfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3NzUnVsZSA9ICh0aGlzLm1hcEh0bWxBdHRyc1RvQ3NzKCkgYXMgeyBbazogc3RyaW5nXTogKGFyZzogc3RyaW5nKSA9PiBzdHJpbmcgfSlbbmFtZV0/Lih2YWx1ZSk7XG4gICAgICAgICAgICBjc3NSdWxlICYmIHRoaXMuc3R5bGVzaGVldC5pbnNlcnRSdWxlKGNzc1J1bGUsIHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1hcEh0bWxBdHRyc1RvQ3NzKCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcIm1heC13aWR0aFwiOiAodmFsdWU6IHN0cmluZykgPT4gYDpob3N0IHstLW1heC13aWR0aDogJHt2YWx1ZX19YCxcbiAgICAgICAgICAgIFwibnVtLXNsaWRlc1wiOiAodmFsdWU6IHN0cmluZykgPT4gYDpob3N0IHstLXNsaWRlLXdpZHRoOiBjYWxjKDEwMCAvICR7K3ZhbHVlfSAqIC45NSUpO31gLFxuICAgICAgICAgICAgXCJudW0tc2xpZGVzLW1kXCI6ICh2YWx1ZTogc3RyaW5nKSA9PiBgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHs6aG9zdCB7LS1zbGlkZS13aWR0aDogY2FsYygxMDAgLyAkeyt2YWx1ZX0gKiAuOTUlKTt9fWAsXG4gICAgICAgICAgICBcIm51bS1zbGlkZXMtbGdcIjogKHZhbHVlOiBzdHJpbmcpID0+IGBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkgezpob3N0IHstLXNsaWRlLXdpZHRoOiBjYWxjKDEwMCAvICR7K3ZhbHVlfSAqIC45NSUpO319YCxcbiAgICAgICAgICAgIFwibnVtLXNsaWRlcy14bFwiOiAodmFsdWU6IHN0cmluZykgPT4gYEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyMDBweCkgezpob3N0IHstLXNsaWRlLXdpZHRoOiBjYWxjKDEwMCAvICR7K3ZhbHVlfSAqIC45NSUpO319YCxcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1zcGVlZFwiOiAodmFsdWU6IHN0cmluZykgPT4gYDpob3N0IHstLXRyYW5zaXRpb24tc3BlZWQ6ICR7dmFsdWV9bXN9YCxcbiAgICAgICAgICAgIFwiY3Jhd2wtc3BlZWRcIjogKHZhbHVlOiBzdHJpbmcpID0+IGA6aG9zdChbYXV0b3BsYXktbW9kZT1jcmF3bF0pIHstLXRyYW5zaXRpb24tc3BlZWQ6ICR7dmFsdWV9bXN9YCxcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1lYXNpbmdcIjogKHZhbHVlOiBzdHJpbmcpID0+IGA6aG9zdCB7LS1lYXNpbmc6ICR7dmFsdWV9YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICogYWxsIHRoZSBldmVudCBoYW5kbGVyIG1ldGhvZHMgaGF2ZSBiZWVuIGRlZmluZWQgdXNpbmcgZnVuY3Rpb24gZXhwcmVzc2lvbiBzeW50YXggdG8gYXZvaWQgdGhlIG5lZWQgZm9yIC5iaW5kKHRoaXMpIGhlcmVcbiAgICAgKi9cbiAgICBzZXRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2xpZGVyQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spKTtcbiAgICAgICAgdGhpcy5zbGlkZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlclNsaWRlcygpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvcGxheSgpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNsaWRlc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pO1xuICAgICAgICB0aGlzLnNsaWRlc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpO1xuICAgICAgICB0aGlzLnNsaWRlc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLmhhbmRsZVBvaW50ZXJVcCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlV2lkdGhQeCA9IHRoaXMuc2xpZGVzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5hdXRvcGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gKHRoaXMuc2xpZGVXaWR0aFB4ID0gdGhpcy5zbGlkZXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpKTtcbiAgICB9XG5cbiAgICBpbml0SW1nTGF6eUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9ic0NhbGxiYWNrOiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlbnRyeS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YXNldC5zcmMgJiYgKHRhcmdldC5zcmMgPSB0YXJnZXQuZGF0YXNldC5zcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNDYWxsYmFjaywge3RocmVzaG9sZDogMH0pO1xuICAgICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhenlMb2FkYWJsZSA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoXCIubGF6eWxvYWRcIilcbiAgICAgICAgICAgIGlmIChsYXp5TG9hZGFibGUpIG9ic2VydmVyLm9ic2VydmUobGF6eUxvYWRhYmxlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgYXMgZWl0aGVyIHRoZSB0cmFuc2l0aW9uZW5kIGhhbmRsZXIgb3IgbWFudWFsbHkgd2hlbiB0aGlzLnNjcm9sbGVkIC8gdGhpcy5pbWFnZVdpZHRoID4gMVxuICAgICAqL1xuICAgIHJlb3JkZXJTbGlkZXMgPSAoKTogdm9pZCB8IG51bWJlciA9PiB7XG4gICAgICAgIHRoaXMuc2xpZGVzV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW1hZ2VcIik7XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNjcm9sbGVkKSA+IDApIHJldHVybiAodGhpcy5zY3JvbGxlZCA9IDApO1xuICAgICAgICAvLyB1c2luZyBsZW5ndGggcHJldmVudHMgYSBuZWdhdGl2ZSBudW1iZXIgaW4gdGhlIHN1YnNlcXVlbnQgbW9kdWxvIGNhbGxcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLmlzRGlyZWN0aW9uTGVmdCA/IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEgOiAxO1xuICAgICAgICB0aGlzLnNldFNsaWRlc0ZsZXhPcmRlcihzdGVwKTtcbiAgICAgICAgdGhpcy5zbGlkZVRvWmVybygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIGFuZCBjdXJyZW50IG9yZGVyIG9mIHRoZSBmbGV4IGVsZW1lbnRzLCB0aGlzIGNvbWJpbmVkIHdpdGggdGhlIHRyYW5zbGF0ZVggdHJhbnNpdGlvbiBpcyB3aGF0IGNyZWF0ZXMgdGhlIHNjcm9sbCBlZmZlY3RcbiAgICAgKiBUaGUgSW1hZ2UgU2xpZGVyIGlzIG9mZnNldCBieSB0aGUgd2lkdGggb2Ygb25lIHNsaWRlIChwcmV2ZW50cyBhIGdhcCBmcm9tIGFwcGVhcmluZyksIHRoZSBpbml0aWFsIGZ1bmN0aW9uIGNhbGwgb2Zmc2V0cyBieSAxIHRvIG1ha2UgdGhlIGxhc3QgaW1hZ2UgZmlyc3QsIGFuZCBvdXRzaWRlIHRoZSB2aWV3cG9ydFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICovXG4gICAgc2V0U2xpZGVzRmxleE9yZGVyKHN0ZXA6IG51bWJlciA9IDEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgICAgIHNsaWRlLnN0eWxlLm9yZGVyID0gKCgrKHNsaWRlLnN0eWxlLm9yZGVyIHx8IGkpICsgc3RlcCkgJSB0aGlzLnNsaWRlcy5sZW5ndGgpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRhcmdldGVkIGRpcmVjdGlvbiwgYWRkcyBDU1MgY2xhc3MgZm9yIHNtb290aCB0cmFuc2l0aW9uIGFuZCBjYWxscyB0aGUgc2Nyb2xsIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGUgRXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgdGhpcy5pc0RpcmVjdGlvbkxlZnQgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVmdFwiKTtcbiAgICAgICAgdGhpcy5kb1RyYW5zaXRpb24oKTtcbiAgICB9O1xuXG4gICAgZG9UcmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnNsaWRlc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlLWltYWdlXCIpO1xuICAgICAgICB0aGlzLnNsaWRlWCgpO1xuICAgIH1cblxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9QbGF5SW50ZXJ2YWxJRCAmJiB0aGlzLmRpc2FibGVTdGVwSW50ZXJ2YWwoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgLy8gc2hvd3MgdGhlIGdyYWIgY3Vyc29yIGZvciBtb3VzZWV2ZW50cyB1bnRpbCB0aGUgcG9pbnRlcnVwIGV2ZW50IGlzIGNhbGxlZFxuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgY3VycmVudFRhcmdldC5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBlLmNsaWVudFg7XG5cbiAgICB9O1xuXG4gICAgaGFuZGxlUG9pbnRlck1vdmUgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2Nyb2xsZWQgPSBlLmNsaWVudFggLSB0aGlzLnN0YXJ0O1xuICAgICAgICB0aGlzLmlzRGlyZWN0aW9uTGVmdCA9IHRoaXMuc2Nyb2xsZWQgPCAwO1xuICAgICAgICB0aGlzLnNsaWRlWCgpOyAvLyBpbXBvcnRhbnQgLSB0aGlzIGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHJlb3JkZXJTbGlkZXMgdG8gcHJldmVudCBhIGZsaWNrZXJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2Nyb2xsZWQgLyB0aGlzLnNsaWRlV2lkdGhQeCkgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVkID0gMDtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlclNsaWRlcygpO1xuICAgICAgICAgICAgdGhpcy5zdGFydCA9IGUuY2xpZW50WDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoZTogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zbGlkZXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1pbWFnZVwiKTtcbiAgICAgICAgLy8gbWltaWMgc25hcCBzY3JvbGxcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2Nyb2xsZWQgLyB0aGlzLnNsaWRlV2lkdGhQeCkgPiAwLjUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5zbGlkZVgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVUb1plcm8oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRyYW5zbGF0ZVggYnkgZWl0aGVyIHRoZSBhbW91bnQgc2Nyb2xsZWQgYnkgdGhlIHVzZXIgb3IsIGlmIHRoaXMuc2Nyb2xsZWQgPSAwIChmYWxzeSB3aGVuIGNsaWNrIGV2ZW50IG9yIGR1cmluZyBwb2ludGVydXApIGJ5IHRoZSBjdXJyZW50IHdpZHRoIG9mIGEgc2xpZGVcbiAgICAgKi9cbiAgICBzbGlkZVggPSAoKTogc3RyaW5nID0+IHRoaXMuc2xpZGVzV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnNjcm9sbGVkID8gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbGVkfXB4KWAgOiBgdHJhbnNsYXRlWCgkeyh0aGlzLmlzRGlyZWN0aW9uTGVmdCA/IC0xIDogMSkgKiB0aGlzLnNsaWRlV2lkdGhQeH1weClgO1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlWCBiYWNrIHRvIHplcm9cbiAgICAgKi9cbiAgICBzbGlkZVRvWmVybyA9ICgpOiBzdHJpbmcgPT4gdGhpcy5zbGlkZXNXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2xpZGVyIGZyb20gXCIuL3NsaWRlci1pbWFnZVwiO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaW1hZ2Utc2xpZGVyXCIsIFNsaWRlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9