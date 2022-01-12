/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_paieskosIsvedimas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/paieskosIsvedimas */ "./src/modules/paieskosIsvedimas.js");


(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_paieskosIsvedimas__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/aprasymas.js":
/*!**********************************!*\
  !*** ./src/modules/aprasymas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var aprasymas = function aprasymas() {
  return "\n    <div id=\"atstable\">\n    <table class=\"table table-responsive table-dark border border-white\">\n        <thead>\n        <tr>\n            <th scope=\"row\">Pavadinimas</th>\n            <th scope=\"row\">ingredientai</th>\n            <th scope=\"row\">Nuotrauka</th>\n        </tr>    \n        </thead>\n        <tbody>\n        <tr>\n           <td id=\"patiekaloPav\"></td>\n           <td id=\"patiekaloIngr\"></td>\n           <td><img src=\"\" id=\"patiekaloNuotr\" class=\"h-25\"> </img></td>\n        </tr>\n        </tbody>\n    </table>\n    <br id=\"exists\">\n    </div>\n";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aprasymas);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "\n    <div class=\"d-flex\">\n    <input type=\"text\" class=\"form-control term border border-white\" placeholder=\"Iveskite patiekalo pavadinima(Angl\u0173 kalba)\">\n    <button class=\"w-25 h-auto border border-white\" type=\"submit\">Ie\u0161koti <i class=\"fas fa-search\"></i></button>\n    </div>\n    <h1 id=\"isvedimasJeiNera\"></h1>\n";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/paieskosIsvedimas.js":
/*!******************************************!*\
  !*** ./src/modules/paieskosIsvedimas.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sitePaieska__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitePaieska */ "./src/modules/sitePaieska.js");
/* harmony import */ var _renderAprasymas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAprasymas */ "./src/modules/renderAprasymas.js");



var paieskosIsvedimas = function paieskosIsvedimas() {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var searchTerm = document.querySelector(".term").value;
    var searchResponse;
    (0,_sitePaieska__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      return searchResponse = result;
    }).then(function (result) {
      if (searchResponse.meals == null) {
        console.log("Patiekalo tokiu pavadinimu nėra");

        if (document.body.contains(document.getElementById("exists"))) {
          var trinti = document.getElementById("atstable");
          trinti.remove();
        }

        document.getElementById("isvedimasJeiNera").innerHTML = "Patiekalo tokiu pavadinimu n\u0117ra, pra\u0161ome bandyti dar kart\u0105";
      } else {
        console.log(searchResponse.meals[0]);

        if (document.body.contains(document.getElementById("exists"))) {
          document.getElementById("patiekaloPav").innerHTML = "".concat(searchResponse.meals[0].strMeal);
          document.getElementById("patiekaloIngr").innerHTML = "".concat(searchResponse.meals[0].strIngredient1, ",");
          document.getElementById("isvedimasJeiNera").innerHTML = "";
        } else (0,_renderAprasymas__WEBPACK_IMPORTED_MODULE_1__["default"])();

        document.getElementById("patiekaloPav").innerHTML = "".concat(searchResponse.meals[0].strMeal);
        document.getElementById("patiekaloIngr").innerHTML = "\n                    ".concat(searchResponse.meals[0].strIngredient1, ",").concat(searchResponse.meals[0].strIngredient2, ",\n                    ").concat(searchResponse.meals[0].strIngredient3, ",").concat(searchResponse.meals[0].strIngredient4, ",\n                    ").concat(searchResponse.meals[0].strIngredient5);
        document.getElementById("patiekaloNuotr").src = "".concat(searchResponse.meals[0].strMealThumb);
        document.getElementById("isvedimasJeiNera").innerHTML = "";
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paieskosIsvedimas);

/***/ }),

/***/ "./src/modules/renderAprasymas.js":
/*!****************************************!*\
  !*** ./src/modules/renderAprasymas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aprasymas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aprasymas */ "./src/modules/aprasymas.js");


var renderAprasymas = function renderAprasymas() {
  var formElement = document.createElement("aprasymas");
  formElement.innerHTML = (0,_aprasymas__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector("main").appendChild(formElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAprasymas);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");


var renderForm = function renderForm() {
  var formElement = document.createElement("form");
  formElement.className = "form.inline";
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector("main").appendChild(formElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/sitePaieska.js":
/*!************************************!*\
  !*** ./src/modules/sitePaieska.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var sitePaieska = function sitePaieska(term) {
  return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(term)).then(function (response) {
    return response.json();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sitePaieska);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkatsiskaitymas"] = self["webpackChunkatsiskaitymas"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;