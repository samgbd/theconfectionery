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

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/assets/styles/styles.css\");\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/main.scss */ \"./app/assets/styles/scss/main.scss\");\n/* harmony import */ var _modules_MemoryJogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/MemoryJogger */ \"./app/assets/scripts/modules/MemoryJogger.js\");\n/* harmony import */ var _modules_NavMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/NavMenu */ \"./app/assets/scripts/modules/NavMenu.js\");\n\r\n\r\n//* This is an example of how to import, and then call, your module files *\r\n\r\n\r\n\r\nnew _modules_MemoryJogger__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _modules_NavMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n//* Make sure you erase me once I've served my purpose *\r\n\r\nconsole.log(\"hey\")\r\n\r\nif (false) {}\n\n//# sourceURL=webpack://theconfectionery/./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MemoryJogger.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/MemoryJogger.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//* This is an example of how to set up your javascript module files *\r\n//* Make sure you delete me once I've served my purpose *\r\nclass MemoryJogger {\r\n  constructor () {\r\n    this.hamburger = document.getElementById('hamburger');\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryJogger);\n\n//# sourceURL=webpack://theconfectionery/./app/assets/scripts/modules/MemoryJogger.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/NavMenu.js":
/*!***********************************************!*\
  !*** ./app/assets/scripts/modules/NavMenu.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NavMenu {\r\n  constructor () {\r\n    this.hamburger = document.getElementById('hamburger');\r\n    this.navMenu = document.getElementById('navMenu');\r\n    this.navList = document.getElementById('navList');\r\n\r\n    this.testing()\r\n    this.events()\r\n  }\r\n\r\n  testing () {\r\n    console.log(\"hi\")\r\n    console.log(this.hamburger)\r\n  }\r\n\r\n  events(){\r\n    this.hamburger.addEventListener('click', () => this.toggleMenu());\r\n  }\r\n\r\n  toggleMenu () {\r\n    console.log(this.hamburger)\r\n    let navHeight = this.getHeight();\r\n    if (this.checkIfOpen()) {\r\n      this.hamburger.classList.remove('is-active')\r\n      this.navMenu.classList.remove('is-active')\r\n      this.navMenu.style.height = '0px';\r\n      console.log('close')\r\n    } else {\r\n      this.hamburger.classList.add('is-active')\r\n      this.navMenu.classList.add('is-active')\r\n      this.navMenu.style.height = `${navHeight}px`;\r\n      console.log('open')\r\n    }\r\n  }\r\n\r\n  checkIfOpen () {\r\n    return this.hamburger.classList.contains('is-active');\r\n  }\r\n\r\n  getHeight () {\r\n    return this.navList.offsetHeight;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);\n\n//# sourceURL=webpack://theconfectionery/./app/assets/scripts/modules/NavMenu.js?");

/***/ }),

/***/ "./app/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://theconfectionery/./app/assets/styles/styles.css?");

/***/ }),

/***/ "./app/assets/styles/scss/main.scss":
/*!******************************************!*\
  !*** ./app/assets/styles/scss/main.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://theconfectionery/./app/assets/styles/scss/main.scss?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/scripts/App.js");
/******/ 	
/******/ })()
;