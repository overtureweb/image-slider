/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/slider-image.scss":
/*!*******************************!*\
  !*** ./src/slider-image.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".slider {\\n  display: flex;\\n  justify-content: center;\\n  max-width: 720px;\\n  overflow: hidden;\\n  margin: 0 auto;\\n  flex-direction: column;\\n  touch-action: none;\\n}\\n.slider :hover {\\n  cursor: grab;\\n}\\n.slider__slides {\\n  display: flex;\\n  justify-content: center;\\n}\\n.slider__slides.slide-image {\\n  transition: transform 0.5s ease;\\n}\\n.slider__slide {\\n  flex: 0 0 25%;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0 0.25rem;\\n  box-sizing: border-box;\\n}\\n.slider__slide img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.slider__controls {\\n  display: grid;\\n  place-content: center;\\n  padding: 20px;\\n}\\n.slider__button {\\n  background: steelblue;\\n  border: 1px solid steelblue;\\n  padding: 1rem 1.25rem;\\n  margin: 0 1rem;\\n  color: #fff;\\n  font-size: 1rem;\\n  transition: all 0.25s ease;\\n}\\n.slider__button:hover {\\n  color: steelblue;\\n  background: white;\\n  border: 1px solid steelblue;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://image-slider/./src/slider-image.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://image-slider/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://image-slider/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/slider-image.html":
/*!*******************************!*\
  !*** ./src/slider-image.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"slider\\\">\\n\\t<div class=\\\"slider__slides\\\">\\n\\t\\t<div class=\\\"slider__slide\\\"><img\\n\\t\\t\\t\\tsrc=\\\"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9b150b8274a605cf6ebd5cf0e071622a_522a91de-c7ed-4773-940b-a75b4e719ff0_350x.jpg?v=1573653815\\\"\\n\\t\\t\\t\\twidth=\\\"350\\\" height=\\\"520\\\" alt=\\\"Star Wars Episode I The Phantom Menace\\\"></div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img src=\\\"https://m.media-amazon.com/images/I/61zAkpvYLqL._AC_SY741_.jpg\\\"\\n\\t\\t                                width=\\\"488\\\" height=\\\"741\\\" alt=\\\"Star Wars Episode II: Attack of the Clones\\\">\\n\\t\\t</div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img src=\\\"https://m.media-amazon.com/images/I/61jCCwfO6HL._AC_SL1000_.jpg\\\"\\n\\t\\t                                width=\\\"666\\\" height=\\\"1000\\\" alt=\\\"Star Wars Episode III: Revenge of the Sith\\\">\\n\\t\\t</div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img src=\\\"https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg\\\"\\n\\t\\t                                width=\\\"563\\\" height=\\\"879\\\" alt=\\\"Star Wars Episode IV: A New Hope\\\"></div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img\\n\\t\\t\\t\\tsrc=\\\"https://cdn.shopify.com/s/files/1/1523/1900/products/il_570xN.1577839917_stum.jpg?v=1571496990\\\"\\n\\t\\t\\t\\twidth=\\\"570\\\" height=\\\"879\\\" alt=\\\"Star Wars Episode V: The Empire Strikes Back\\\"></div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img src=\\\"https://m.media-amazon.com/images/I/512x-5tuQLL._AC_.jpg\\\" width=\\\"339\\\"\\n\\t\\t                                height=\\\"500\\\" alt=\\\"Star Wars Episode VI: The Return of the Jedi\\\"></div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img src=\\\"https://m.media-amazon.com/images/I/A16XEWILpEL._AC_SL1500_.jpg\\\"\\n\\t\\t                                width=\\\"1000\\\" height=\\\"1500\\\" alt=\\\"Star Wars Episode VII: The Force Awakens\\\">\\n\\t\\t</div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img\\n\\t\\t\\t\\tsrc=\\\"https://i5.walmartimages.com/asr/73ba1c54-12e2-4b7f-87a7-5cc2156bcfb3_1.ae7da2809defd06508aa680a0c55c7f1.jpeg\\\"\\n\\t\\t\\t\\twidth=\\\"473\\\" height=\\\"709\\\" alt=\\\"Star Wars Episode VIII: The Last Jedi\\\"></div>\\n\\t\\t<div class=\\\"slider__slide\\\"><img\\n\\t\\t\\t\\tsrc=\\\"https://i5.walmartimages.com/asr/354ced6f-f4d3-4f92-8530-c4185f7af5b4.456921c26b8b4ba7d3d860695f23ab5f.jpeg\\\"\\n\\t\\t\\t\\twidth=\\\"668\\\" height=\\\"1000\\\" alt=\\\"Star Wars Episode IX: The Rise of Skywalker\\\"></div>\\n\\t</div>\\n\\t<div class=\\\"slider__controls\\\"><span><button class=\\\"slider__button left\\\">&lt;&lt;</button><button\\n\\t\\t\\tclass=\\\"slider__button right\\\">&gt;&gt;</button></span></div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://image-slider/./src/slider-image.html?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst slider_image_1 = __webpack_require__(/*! ./slider-image */ \"./src/slider-image.ts\");\ncustomElements.define(\"image-slider\", slider_image_1.default);\n\n\n//# sourceURL=webpack://image-slider/./src/index.ts?");

/***/ }),

/***/ "./src/slider-image.ts":
/*!*****************************!*\
  !*** ./src/slider-image.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst slider_image_scss_1 = __webpack_require__(/*! ./slider-image.scss */ \"./src/slider-image.scss\");\nconst slider_image_html_1 = __webpack_require__(/*! ./slider-image.html */ \"./src/slider-image.html\");\nclass Slider extends HTMLElement {\n    constructor() {\n        super();\n        // is slider moving left?\n        this.isLeft = true;\n        // is this a pointer event?\n        this.isScrolling = false;\n        // stores the current X position of a pointer event\n        this.start = 0;\n        // cumulative amount scrolled since the start of the pointer event\n        this.scrolled = 0;\n        /**\n         * Sets the targeted direction, adds CSS class for smooth transition and calls the scroll function\n         * @param e\n         */\n        this.handleClick = (e) => {\n            const target = e.target;\n            if (target.nodeName !== \"BUTTON\")\n                return;\n            this.isLeft = target.classList.contains(\"left\");\n            this.slider.classList.add(\"slide-image\");\n            this.slideX();\n        };\n        /**\n         * called as either the transitionend handler or manually when this.scrolled / this.imageWidth > 1\n         */\n        this.reorderImages = () => {\n            this.slider.classList.remove(\"slide-image\");\n            if (Math.abs(this.scrolled) > 0)\n                return (this.scrolled = 0);\n            // using length prevents a negative number in the subsequent modulo call\n            let offset = this.isLeft ? this.slides.length - 1 : 1;\n            this.slides.forEach((el, i) => {\n                this.imageOrder[i] = (this.imageOrder[i] + offset) % this.slides.length;\n                el.style.order = this.imageOrder[i].toString();\n            });\n            this.slideReset();\n        };\n        this.handlePointerDown = (e) => {\n            e.preventDefault();\n            const currentTarget = e.currentTarget;\n            // shows the grab cursor for mouseevents until the pointerup event is called\n            currentTarget.setPointerCapture(e.pointerId);\n            currentTarget.style.cursor = \"grabbing\";\n            e.preventDefault();\n            this.isScrolling = true;\n            this.start = e.clientX;\n        };\n        this.handlePointerMove = (e) => {\n            e.preventDefault();\n            if (!this.isScrolling)\n                return;\n            this.scrolled = e.clientX - this.start;\n            this.isLeft = this.scrolled < 0;\n            this.slideX();\n            if (Math.abs(this.scrolled / this.slideWidth) > 1) {\n                this.scrolled = 0;\n                this.reorderImages();\n                this.start = e.clientX;\n            }\n        };\n        this.handlePointerUp = (e) => {\n            e.preventDefault();\n            this.slider.classList.add(\"slide-image\");\n            if (Math.abs(this.scrolled / this.slideWidth) > 0.5) {\n                this.scrolled = 0;\n                this.slideX();\n            }\n            else {\n                this.slideReset();\n            }\n            this.isScrolling = false;\n        };\n        /**\n         * Apply translateX by either the amount scrolled by the user or, if this.scrolled = 0 (falsy when click event or during pointerup) by the current width of a slide\n         */\n        this.slideX = () => this.slider.style.transform = this.scrolled ? `translateX(${this.scrolled}px)` : `translateX(${(this.isLeft ? -1 : 1) * this.slideWidth}px)`;\n        /**\n         * TranslateX back to zero\n         */\n        this.slideReset = () => this.slider.style.transform = \"translateX(0)\";\n        let defaults = { maxWidth: \"100%\" };\n        this.settings = Object.assign(Object.assign({}, defaults), this.dataset);\n        this.attachShadow({ mode: \"open\" });\n        this.DOM = this.shadowRoot;\n        this.DOM.innerHTML = slider_image_html_1.default;\n        this.addStyles();\n        this.addUserDefinedStyles();\n        this.slider = this.DOM.querySelector(\".slider__slides\");\n        this.sliderControls = this.DOM.querySelector(\".slider__controls\");\n        this.slides = this.slider.querySelectorAll(\".slider__slide\");\n        this.imageOrder = [];\n        this.slideWidth = this.slides[0].getBoundingClientRect().width;\n        this.setEvents();\n        this.setInitImageOrder(this.slides);\n    }\n    addStyles() {\n        const styles = document.createElement(\"style\");\n        styles.textContent = slider_image_scss_1.default;\n        this.DOM.append(styles);\n    }\n    addUserDefinedStyles() {\n        const styleEl = document.createElement(\"style\");\n        this.DOM.append(styleEl);\n        const stylesheet = styleEl.sheet;\n        stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.insertRule(`.slider{max-width:${this.settings.maxWidth}}`, 0);\n        console.log(stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.cssRules);\n    }\n    /**\n     * Set all the event listeners\n     * all the event handler methods have been defined using function expression syntax to avoid the need for .bind(this) here\n     */\n    setEvents() {\n        this.sliderControls.addEventListener(\"click\", this.handleClick);\n        this.slider.addEventListener(\"transitionend\", this.reorderImages);\n        this.slider.addEventListener(\"pointerdown\", this.handlePointerDown);\n        this.slider.addEventListener(\"pointermove\", this.handlePointerMove);\n        this.slider.addEventListener(\"pointerup\", this.handlePointerUp);\n        window.addEventListener(\"resize\", () => (this.slideWidth = this.slides[0].getBoundingClientRect().width));\n    }\n    /**\n     * Create and populate an array with each slide's index\n     * @param slideList\n     */\n    setInitImageOrder(slideList) {\n        return this.imageOrder = Array.from({ length: slideList.length }, (el, i) => i);\n    }\n}\nexports[\"default\"] = Slider;\n\n\n//# sourceURL=webpack://image-slider/./src/slider-image.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;