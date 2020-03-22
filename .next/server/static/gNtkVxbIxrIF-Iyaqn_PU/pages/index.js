module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rJRk");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("89Ff");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "Juscredit - Home")), __jsx("main", null, __jsx("div", {
    className: "map-container"
  }, __jsx("div", {
    className: "map"
  }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("h1", null, "Antecipe seu cr\xE9dito trabalhista"), __jsx("h2", null, "T\xEAm um processo ganho? Receba agora"), __jsx("br", null), __jsx("div", {
    className: "buttons-container"
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signup/user'),
    color: "primary"
  }, "Quero participar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/be-part'),
    color: "secondary"
  }, "Quero investir"), __jsx("div", {
    className: "cursor-container"
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/be-part'),
    color: "third"
  }, __jsx("img", {
    src: "/cursor.svg"
  }), "Conhe\xE7a as vantagens")))), __jsx("div", {
    className: "who-we-are"
  }, __jsx("div", {
    className: "products-bg"
  }), __jsx("div", null, " ", __jsx("h1", null, "Mais valor para quem vende."), __jsx("h2", null, "R\xE1pido para quem antecipa"), __jsx("div", {
    className: "buttons-container"
  }, " ", __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signup/user'),
    color: "primary"
  }, "Trabalhador"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/be-part'),
    color: "secondary"
  }, "Investidor"))), __jsx("img", {
    src: "/agilidade.svg"
  }), __jsx("br", null), __jsx("br", null), __jsx("div", {
    className: "buttons-container"
  }, __jsx("br", null), " ", __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/be-part'),
    color: "secondary"
  }, "Quero participar")), __jsx("div", {
    className: "certified-container"
  }, __jsx("div", {
    className: "certificates"
  }), __jsx("h1", null, "Como funciona a plataforma?"), __jsx("h2", null, "Conte com toda a seguran\xE7a, agilidade praticidade na libera\xE7\xE3o do seu processo ganho")), __jsx("img", {
    src: "/trabalhador.svg"
  })), __jsx("div", {
    className: "mission-container"
  }, __jsx("h1", null, "T\xEAm d\xFAvidas ?  "), __jsx("p", null, "Est\xE1 na hora de san\xE1-las."), __jsx("br", null), " ", __jsx("p", null, "Queremos te ajudar a resolv\xEA-las"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "89Ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Fdx0");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Button = props => {
  const {
    color,
    loading
  } = props;
  return __jsx("button", _extends({
    className: `button ${color}`
  }, props), loading ? __jsx("img", {
    height: "32",
    width: "32",
    src: "/loading.svg"
  }) : props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Fdx0":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rJRk":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });