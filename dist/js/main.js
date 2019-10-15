<<<<<<< Updated upstream
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_form__ = __webpack_require__(2);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__components_form__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var dropdowns = Array.from(document.getElementsByClassName('rasci-value'));
var savebuttons = Array.from(document.getElementsByClassName('savebutton'));
var form = document.getElementById('Form_SaveForm');
var table = document.getElementById('totals-table');

/* harmony default export */ __webpack_exports__["a"] = (function () {
    dropdowns.forEach(function (item) {
        item.addEventListener("change", function () {
            var cell = item.closest('td');
            var row = cell.closest('tr');
            cell.classList.remove('r', 'a', 's', 'c', 'i');
            if (item.value) {
                cell.classList.add(item.value[0].toLowerCase());
            }
            savebuttons.forEach(function (item) {
                item.style.display = 'none';
            });
            document.querySelector('th.savebutton').style.display = 'block';
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var original = e.explicitOriginalTarget;
        original.value = "";
        e.explicitOriginalTarget.classList.add('spinner-border');
        var data = new FormData(form);
        var request = new XMLHttpRequest();
        request.open("POST", form.getAttribute('action'));
        request.send(data);
        request.onreadystatechange = function () {
            table.innerHTML = request.response;
        };
        setTimeout(function () {
            e.explicitOriginalTarget.classList.remove('spinner-border');
            e.explicitOriginalTarget.value = "Save";
            try {
                e.explicitOriginalTarget.closest('td').style.display = 'none';
                document.querySelector('th.savebutton').style.display = 'none';
                Array.from(document.querySelectorAll('td.savebutton.alert-dark')).forEach(function (item) {
                    item.style.display = 'none';
                });
            } catch (exception) {
                // no-op
            }
        }, 1000);
        return false;
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
=======
!function(n){function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r={};o.m=n,o.c=r,o.d=function(n,r,e){o.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},o.p="./",o(o.s=0)}([function(n,o,r){!function(){throw new Error('Cannot find module "/Users/simon/projects/policies/iso27001compliance/client/src/js/main.js"')}(),function(){throw new Error('Cannot find module "/Users/simon/projects/policies/iso27001compliance/client/src/scss/main.scss"')}()}]);
>>>>>>> Stashed changes
