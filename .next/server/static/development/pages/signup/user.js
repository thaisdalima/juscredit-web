module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
      lineNumber: 5
    },
    __self: undefined
  }), loading === 'true' ? __jsx("img", {
    height: "32",
    width: "32",
    src: "/loading.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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

/***/ "./components/Register/Confirmation/Confirmation.tsx":
/*!***********************************************************!*\
  !*** ./components/Register/Confirmation/Confirmation.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RegisterForm.scss */ "./components/Register/RegisterForm.scss");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button/Button */ "./components/Button/Button.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\Confirmation\\Confirmation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados'
}]]);
const choiceLabel = new Map([['email', 'email'], ['sms', 'celular']]);

const Confirmation = ({
  onSubmit,
  profile,
  confirmationChoice,
  loading = false
}) => {
  const {
    cardTitle
  } = stringMap.get(profile);
  const {
    0: confirmation,
    1: setConfirmation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Confirmar dados > Confirmar identidade > Inserir c\xF3digo"), __jsx("h1", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, cardTitle), __jsx("h2", {
    className: "form-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Enviamos um c\xF3digo de 6 digitos para o seu ", choiceLabel.get(confirmationChoice)), __jsx("div", {
    className: "confirmation-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Por favor, insira o c\xF3digo abaixo:"), __jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mask: "999999",
    value: confirmation,
    onChange: e => setConfirmation(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading,
    color: "primary",
    onClick: onSubmit,
    disabled: confirmation.length !== 6 || confirmation.includes('_'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Continuar")), __jsx("div", {
    className: "not-received",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "N\xE3o recebeu o c\xF3digo?"), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Clique aqui para enviar novamente >")));
};

/* harmony default export */ __webpack_exports__["default"] = (Confirmation);

/***/ }),

/***/ "./components/Register/ConfirmationChoice/ConfirmationChoice.tsx":
/*!***********************************************************************!*\
  !*** ./components/Register/ConfirmationChoice/ConfirmationChoice.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RegisterForm.scss */ "./components/Register/RegisterForm.scss");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button/Button */ "./components/Button/Button.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\ConfirmationChoice\\ConfirmationChoice.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados'
}]]);

const ConfirmationChoice = ({
  values,
  onSubmit,
  profile
}) => {
  const {
    cardTitle
  } = stringMap.get(profile);
  const {
    email,
    phone
  } = values;
  return __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Confirmar dados > Confirmar identidade"), __jsx("h1", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, cardTitle), __jsx("h2", {
    className: "form-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Como prefere confirmar sua identidade?"), __jsx("div", {
    className: "choice-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Email:   ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, " ", email)), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: () => onSubmit('email'),
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Confirmar por email")), __jsx("div", {
    className: "choice-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Telefone: ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, phone)), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: () => onSubmit('sms'),
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Confirmar por SMS")));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationChoice);

/***/ }),

/***/ "./components/Register/RegisterForm.scss":
/*!***********************************************!*\
  !*** ./components/Register/RegisterForm.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Register/RegisterForm.tsx":
/*!**********************************************!*\
  !*** ./components/Register/RegisterForm.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.scss */ "./components/Register/RegisterForm.scss");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\RegisterForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const stringMap = new Map([['user', {
  cardTitle: 'Antecipe o seu crédito'
}], ['producer', {
  cardTitle: 'Seja um Investidor'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados',
  formTitle: 'Confirme seus contatos antes de atualizar seus dados:'
}]]);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const PHONE_REGEX = new RegExp(/^\([1-9]{2}\) [0-9]{5}\-[0-9]{4}$/i);

const validate = values => {
  let errors = {};

  if (!values.email) {
    errors.email = 'Campo obrigatório';
  } else if (!MAIL_REGEX.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = 'Campo obrigatório';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Email não coincide';
  }

  if (!values.phone) {
    errors.phone = 'Campo obrigatório';
  } else if (!PHONE_REGEX.test(values.phone)) {
    errors.phone = 'Celular inválido';
  }

  return errors;
};

const RegisterForm = ({
  profile,
  onSubmit
}) => {
  const {
    cardTitle,
    formTitle
  } = stringMap.get(profile);
  return __jsx("div", {
    className: "card",
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
  }, "Confirmar dados"), __jsx("h1", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, cardTitle), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      email: '',
      confirmEmail: '',
      phone: ''
    },
    validate: validate,
    onSubmit: ({
      email,
      phone
    }) => onSubmit({
      email,
      phone
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, ({
    errors,
    touched
  }) => {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, __jsx("h2", {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, formTitle), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "email",
      mask: null,
      placeholder: "Email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, "Confirme seu email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "confirmEmail",
      mask: null,
      placeholder: "Confirme seu email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "confirmEmail",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, "Celular com DDD"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "phone",
      mask: "(99) 99999-9999",
      placeholder: "Celular com DDD",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "phone",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    })), __jsx("div", {
      className: "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      type: "submit",
      tabIndex: 1,
      disabled: Object.keys(touched).length < 2 || Object.keys(errors).length > 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, "Avan\xE7ar")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./components/Register/RegisterSuccess/RegisterSuccess.tsx":
/*!*****************************************************************!*\
  !*** ./components/Register/RegisterSuccess/RegisterSuccess.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\RegisterSuccess\\RegisterSuccess.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RegisterSuccess = () => {
  return __jsx("div", {
    className: "card success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    className: "card-title success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Cadastro finalizado"), __jsx("h1", {
    className: "form-title success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Parabe\u0301ns, seu cadastro foi finalizado!"), __jsx("h2", {
    className: "community-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Voce\u0302 agora faz parte!"), __jsx("h3", {
    className: "contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Iremos entrar em contato com voc\xEA para confirmar suas informac\u0327o\u0303es."), __jsx("div", {
    className: "finish-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "primary",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Finalizar e voltar para home")));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterSuccess);

/***/ }),

/***/ "./pages/signup/user.tsx":
/*!*******************************!*\
  !*** ./pages/signup/user.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Register/RegisterForm */ "./components/Register/RegisterForm.tsx");
/* harmony import */ var _components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Register/ConfirmationChoice/ConfirmationChoice */ "./components/Register/ConfirmationChoice/ConfirmationChoice.tsx");
/* harmony import */ var _components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Register/Confirmation/Confirmation */ "./components/Register/Confirmation/Confirmation.tsx");
/* harmony import */ var _components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Register/RegisterSuccess/RegisterSuccess */ "./components/Register/RegisterSuccess/RegisterSuccess.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\signup\\user.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SignupUser = () => {
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: userValues,
    1: setUserValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: confirmationChoice,
    1: setConfirmationChoice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleUserSubmit = values => {
    setUserValues(values);
    setStep(1);
  };

  const handleConfimationChoice = choice => {
    setConfirmationChoice(choice);
    setStep(2);
  };

  const handleConfimation = async value => {
    setLoading(true);
    await createUser(_objectSpread({}, userValues));
    setStep(3);
  };

  const createUser = async body => {
    try {
      const res = await fetch('', {
        method: 'POST',
        body: JSON.stringify(body)
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  switch (step) {
    case 0:
      return __jsx(_components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        profile: "user",
        onSubmit: handleUserSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      });

    case 1:
      return __jsx(_components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_2__["default"], {
        profile: "user",
        values: userValues,
        onSubmit: handleConfimationChoice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      });

    case 2:
      return __jsx(_components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loading: loading,
        profile: "user",
        confirmationChoice: confirmationChoice,
        onSubmit: handleConfimation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      });

    case 3:
      return __jsx(_components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: undefined
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SignupUser);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/signup/user.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Thais Linda\juscredit-web\pages\signup\user.tsx */"./pages/signup/user.tsx");


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
//# sourceMappingURL=user.js.map