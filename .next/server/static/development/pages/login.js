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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.scss":
/*!***************************************!*\
  !*** ./components/Button/Button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ "./components/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Button\\Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Button = props => {
  const {
    color,
    loading
  } = props;
  return __jsx("button", _extends({
    className: `button ${color}`
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), loading === 'true' ? __jsx("img", {
    height: "32",
    width: "32",
    src: "/loading.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }) : props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Input/Input.scss":
/*!*************************************!*\
  !*** ./components/Input/Input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Input/Input.tsx":
/*!************************************!*\
  !*** ./components/Input/Input.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.scss */ "./components/Input/Input.scss");
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Input\\Input.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const StyledInput = (_ref) => {
  let {
    field,
    form
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  const className = props.className || '';
  return __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, field, props, {
    className: 'juscredit-input' + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StyledInput);

/***/ }),

/***/ "./components/Register/LoginForm/LoginForm.tsx":
/*!*****************************************************!*\
  !*** ./components/Register/LoginForm/LoginForm.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegisterForm.scss */ "./components/Register/LoginForm/RegisterForm.scss");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\LoginForm\\LoginForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const LoginForm = () => {
  const handleSubmit = async values => {
    try {
      const res = await fetch(`${process.env.API_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password
        })
      });

      if (res.status === 200) {
        const {
          token
        } = await res.json();
        document.cookie = `lead=${true}; path=/`;
        document.cookie = `auth_token=${token}; path=/`;
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/find-partners');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return __jsx("div", {
    className: "login-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "card login-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "  ", __jsx("h1", {
    className: "card-title ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Login")), __jsx("div", {
    className: "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: handleSubmit,
    render: ({
      handleChange,
      submitForm
    }) => {
      return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }, "Fa\xE7a seu login abaixo:"), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: undefined
      }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "email",
        disabled: "true",
        placeholder: "Email",
        onChange: handleChange('email'),
        component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: undefined
      }), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
        name: "email",
        component: "span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: undefined
      }, "Senha"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "password",
        placeholder: "Senha",
        onChange: handleChange('password'),
        type: "password",
        component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: undefined
      }), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
        name: "password",
        component: "span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: undefined
      }))), __jsx("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: undefined
      }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "primary",
        onClick: () => submitForm(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
      }, "Entrar")));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/Register/LoginForm/RegisterForm.scss":
/*!*********************************************************!*\
  !*** ./components/Register/LoginForm/RegisterForm.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Register_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Register/LoginForm/LoginForm */ "./components/Register/LoginForm/LoginForm.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\login.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoginPage = () => {
  return __jsx(_components_Register_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/login.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Thais Linda\juscredit-web\pages\login.tsx */"./pages/login.tsx");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map