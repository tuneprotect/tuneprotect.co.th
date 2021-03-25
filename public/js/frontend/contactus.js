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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/contactus.js":
/*!***********************************!*\
  !*** ./resources/js/contactus.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./main */ "./resources/js/main.js");

document.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\resources\\js\\main.js: Unexpected token (359:1)\n\n\u001b[0m \u001b[90m 357 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 358 | \u001b[39m                \u001b[36mif\u001b[39m (response\u001b[33m.\u001b[39mstatus \u001b[33m==\u001b[39m \u001b[32m'success'\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 359 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 360 | \u001b[39m                    \u001b[33mSwal\u001b[39m\u001b[33m.\u001b[39mfire(\u001b[0m\n\u001b[0m \u001b[90m 361 | \u001b[39m                        $form\u001b[33m.\u001b[39mgetAttribute(\u001b[32m'data-success'\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 362 | \u001b[39m                        $form\u001b[33m.\u001b[39mgetAttribute(\u001b[32m'data-success-description'\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n    at Object._raise (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Object.raiseWithData (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Object.raise (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.unexpected (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Object.jsxParseIdentifier (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4536:12)\n    at Object.jsxParseNamespacedName (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4546:23)\n    at Object.jsxParseElementName (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4557:21)\n    at Object.jsxParseOpeningElementAt (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4644:22)\n    at Object.jsxParseElementAt (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4677:33)\n    at Object.jsxParseElement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4751:17)\n    at Object.parseExprAtom (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:4758:19)\n    at Object.parseExprSubscripts (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Object.parseUpdate (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Object.parseMaybeUnary (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Object.parseExprOps (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Object.parseMaybeConditional (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Object.parseMaybeAssign (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at Object.parseExpressionBase (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9871:23)\n    at C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9865:39\n    at Object.allowInAnd (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11547:12)\n    at Object.parseExpression (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:9865:17)\n    at Object.parseStatementContent (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11807:23)\n    at Object.parseStatement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Object.parseBlockBody (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Object.parseBlock (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Object.parseStatementContent (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11752:21)\n    at Object.parseStatement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Object.parseIfStatement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12030:28)\n    at Object.parseStatementContent (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11721:21)\n    at Object.parseStatement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Object.parseBlockBody (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Object.parseBlock (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Object.parseTryStatement (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:12119:23)\n    at Object.parseStatementContent (C:\\Pattarapong\\Tuneprotect\\tuneprotect.co.th\\node_modules\\@babel\\parser\\lib\\index.js:11733:21)");

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./resources/js/contactus.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Pattarapong\Tuneprotect\tuneprotect.co.th\resources\js\contactus.js */"./resources/js/contactus.js");


/***/ })

/******/ });