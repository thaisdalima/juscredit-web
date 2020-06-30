module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rijl");


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
  }, props), loading === 'true' ? __jsx("img", {
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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TuSW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eeON");
/* harmony import */ var _Input_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yKCf");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);

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
    className: 'juscredit-input' + className
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (StyledInput);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eeON":
/***/ (function(module, exports) {



/***/ }),

/***/ "onHk":
/***/ (function(module, exports) {



/***/ }),

/***/ "rijl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Register/RegisterForm.scss
var RegisterForm = __webpack_require__("onHk");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/Input/Input.tsx
var Input = __webpack_require__("TuSW");

// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Register/PasswordForm/PasswordForm.tsx

var __jsx = external_react_default.a.createElement;






const PasswordForm = ({
  user,
  token
}) => {
  const handleSubmit = async values => {
    try {
      const res = await fetch(`${process.env.API_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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
        router_default.a.push('/find-partners');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "title-container"
  }, "  ", __jsx("h1", {
    className: "card-title "
  }, "Criar senha")), __jsx("div", {
    className: "card-content"
  }, __jsx(external_formik_["Formik"], {
    initialValues: {
      email: user.email,
      password: '',
      confirmPassword: ''
    },
    onSubmit: handleSubmit,
    render: ({
      handleChange,
      submitForm
    }) => {
      return __jsx(external_formik_["Form"], {
        className: "form-container"
      }, __jsx("h2", null, "Ol\xE1 ", user.name, ", para acessar o seu perfil basta criar uma senha."), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Email"), __jsx(external_formik_["Field"], {
        name: "email",
        disabled: "true",
        placeholder: "Email",
        onChange: handleChange('email'),
        component: Input["a" /* default */]
      }), __jsx(external_formik_["ErrorMessage"], {
        name: "email",
        component: "span"
      }))), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Senha"), __jsx(external_formik_["Field"], {
        name: "password",
        placeholder: "Senha",
        onChange: handleChange('password'),
        type: "password",
        component: Input["a" /* default */]
      }), __jsx(external_formik_["ErrorMessage"], {
        name: "password",
        component: "span"
      }))), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Confirmar senha"), __jsx(external_formik_["Field"], {
        name: "confirmPassword",
        placeholder: "Confirmar senha",
        onChange: handleChange('confirmPassword'),
        type: "password",
        component: Input["a" /* default */]
      }), __jsx(external_formik_["ErrorMessage"], {
        name: "confirmPassword",
        component: "span"
      }))), __jsx("div", {
        className: "button-container"
      }, __jsx(Button["a" /* default */], {
        color: "primary",
        onClick: () => submitForm()
      }, "Finalizar cadastro")));
    }
  })));
};

/* harmony default export */ var PasswordForm_PasswordForm = (PasswordForm);
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./pages/signup/create-password/[token].tsx

var _token_jsx = external_react_default.a.createElement;




const redirectToHome = res => {
  if (res) {
    res.writeHead(302, {
      Location: '/'
    });
    res.end();
    res.finished = true;
  } else {
    router_default.a.push('/');
  }
};

const PasswordCreation = ({
  user,
  token
}) => {
  return _token_jsx(PasswordForm_PasswordForm, {
    user: user,
    token: token
  });
};

PasswordCreation.getInitialProps = async ({
  res,
  query
}) => {
  const {
    token
  } = query;

  try {
    const user = external_jwt_decode_default()(token);

    if (!user) {
      redirectToHome(res);
    }

    return {
      user,
      token
    };
  } catch (e) {
    redirectToHome(res);
  }
};

/* harmony default export */ var _token_ = __webpack_exports__["default"] = (PasswordCreation);

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "yKCf":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ })

/******/ });