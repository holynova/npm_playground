/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

// NAMESPACE OBJECT: ./src/random.js
var random_namespaceObject = {};
__webpack_require__.r(random_namespaceObject);
__webpack_require__.d(random_namespaceObject, {
  "between": () => (between),
  "choose": () => (choose),
  "float": () => (_float),
  "int": () => (_int),
  "shuffle": () => (shuffle),
  "timestamp": () => (timestamp)
});

;// CONCATENATED MODULE: ./src/random.js
// [min,max)  max is not included
function between() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  // return min + Math.random() * (max - min)
  return min + Math.floor(Math.random() * (max - min));
}

function _float() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return min + Math.random() * (max - min);
}



function _int() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return between(min, max); // return min + Math.floor(Math.random() * (max - min))
}


function choose() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = between(0, arr.length);
  return arr[index];
}
function timestamp() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 ? arguments[1] : undefined;
  min = min || new Date("2008-5-12").getTime();
  max = max || Date.now();
  return between(min, max);
}
function shuffle(arr) {
  if (Array.isArray(arr)) {
    for (var i = arr.length - 1; i > 0; i--) {
      var index = between(0, i);
      var temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }

  return arr;
} // module.exports = {
//   between,
//   float,
//   int,
//   choose,
//   timestamp,
//   shuffle,
// };
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ const src = ({
  random: random_namespaceObject
});
/******/ })()
;