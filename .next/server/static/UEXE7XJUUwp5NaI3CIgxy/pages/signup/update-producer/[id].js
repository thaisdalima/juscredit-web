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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u8y1");


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

/***/ "u8y1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Register/RegisterForm.scss
var RegisterForm = __webpack_require__("onHk");

// EXTERNAL MODULE: ./components/Input/Input.tsx
var Input = __webpack_require__("TuSW");

// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./utils/mask.tsx
let Masks;

(function (Masks) {
  Masks["CPF"] = "999.999.999-99";
  Masks["CNPJ"] = "99.999.999/9999-99";
})(Masks || (Masks = {}));
// CONCATENATED MODULE: ./utils/validateDocuments.ts
function validateCpf(value) {
  let cpf = value.replace(/\D/g, '');

  if (!cpf) {
    return false;
  }

  let numeros, digitos, soma, i, resultado, digitos_iguais;
  digitos_iguais = 1;

  if (cpf.length < 11) {
    return false;
  }

  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  }

  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;

    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(0)) {
      return false;
    }

    numeros = cpf.substring(0, 10);
    soma = 0;

    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultado != digitos.charAt(1) ? false : true;
  } else {
    return false;
  }
}
function validateCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj == '') return false;
  if (cnpj.length != 14) return false; // Elimina CNPJs invalidos conhecidos

  if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999") return false; // Valida DVs

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) return false;
  return true;
}
;
// CONCATENATED MODULE: ./utils/validators.ts

class validators_Validators {
  static cpf(cpf) {
    return validateCpf(cpf);
  }

  static cnpj(cnpj) {
    return validateCnpj(cnpj);
  }

}
// CONCATENATED MODULE: ./components/Register/RegisterForm.tsx

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados',
  formTitle: 'Informe seus contatos antes de receber acesso gratuito a nossa plataforma.'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados',
  formTitle: 'Informe seus contatos antes de receber acesso gratuito a nossa plataforma.'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados',
  formTitle: 'Confirme seus contatos antes de atualizar seus dados:'
}]]);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const PHONE_REGEX = new RegExp(/^\([1-9]{2}\) [0-9]{5}\-[0-9]{4}$/i);
const ONLY_NUMBERS_REGEX = new RegExp(/^\d+$/);

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
  } else if (!PHONE_REGEX.test(values.phone) && !ONLY_NUMBERS_REGEX.test(values.phone)) {
    errors.phone = 'Celular inválido';
  }

  if (!values.contactDocument) {
    errors.contactDocument = 'Campo obrigatório';
  } else if (!validators_Validators.cpf(values.contactDocument)) {
    errors.contactDocument = 'CPF inválido';
  }

  if (values.companyDocument && !validators_Validators.cnpj(values.companyDocument)) {
    errors.companyDocument = 'CNPJ inválido';
  }

  if (!values.termsOfUse) {
    errors.termsOfUse = "É necessário concordar com os termos de uso e com a política de privacidade";
  }

  return errors;
};

const RegisterForm_RegisterForm = ({
  profile,
  onSubmit,
  producer = null
}) => {
  const {
    cardTitle,
    formTitle
  } = stringMap.get(profile);
  return __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "title-container"
  }, __jsx("h1", {
    className: "card-title"
  }, cardTitle)), __jsx("div", {
    className: "card-content"
  }, __jsx("label", null, "Confirmar dados"), __jsx(external_formik_["Formik"], {
    initialValues: {
      contactName: '',
      contactDocument: '',
      email: '',
      confirmEmail: '',
      phone: '',
      companyName: '',
      companyDocument: '',
      termsOfUse: false
    },
    validate: validate,
    onSubmit: ({
      email,
      phone,
      contactDocument,
      contactName,
      companyName,
      companyDocument
    }) => onSubmit({
      email,
      phone,
      contactName,
      contactDocument,
      companyName,
      companyDocument
    })
  }, ({
    errors,
    touched,
    handleChange,
    values,
    setValues,
    setTouched
  }) => {
    if (producer && !values.contactName && !values.companyName) {
      setValues(_objectSpread(_objectSpread({}, producer), {}, {
        confirmEmail: producer.email
      }));
      setTouched(values);
    }

    return __jsx(external_formik_["Form"], {
      className: "form-container"
    }, __jsx("h2", {
      className: "form-title"
    }, formTitle), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Nome completo"), __jsx(external_formik_["Field"], {
      name: "contactName",
      mask: null,
      placeholder: "Nome completo",
      onChange: handleChange('contactName'),
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "contactName",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "CPF"), __jsx(external_formik_["Field"], {
      name: "contactDocument",
      mask: Masks.CPF,
      placeholder: "CPF",
      onChange: handleChange('contactDocument'),
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "contactDocument",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Nome da empresa (opcional)"), __jsx(external_formik_["Field"], {
      name: "companyName",
      mask: null,
      placeholder: "Nome da empresa",
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "companyName",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "CNPJ (opcional)"), __jsx(external_formik_["Field"], {
      name: "companyDocument",
      mask: Masks.CNPJ,
      placeholder: "CNPJ",
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "companyDocument",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Email"), __jsx(external_formik_["Field"], {
      name: "email",
      mask: null,
      placeholder: "Email",
      component: Input["a" /* default */],
      disabled: profile === 'update-producer'
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "email",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Confirme seu email"), __jsx(external_formik_["Field"], {
      name: "confirmEmail",
      mask: null,
      placeholder: "Confirme seu email",
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "confirmEmail",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Celular com DDD"), __jsx(external_formik_["Field"], {
      name: "phone",
      mask: "(99) 99999-9999",
      placeholder: "Celular com DDD",
      component: Input["a" /* default */]
    }), __jsx(external_formik_["ErrorMessage"], {
      name: "phone",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group checkbox"
    }, __jsx(external_formik_["Field"], {
      name: "termsOfUse",
      type: "checkbox",
      component: "input",
      checked: values.termsOfUse
    }), __jsx("label", null, "Li e concordo com os ", __jsx("a", null, "termos de uso"), " e com a ", __jsx("a", null, "pol\xEDtica de privacidade"), "."))), __jsx("div", {
      className: "button-container"
    }, __jsx(Button["a" /* default */], {
      color: "primary",
      type: "submit",
      tabIndex: 1,
      disabled: Object.keys(touched).length < 2 || Object.keys(errors).length > 0
    }, "Avan\xE7ar"), profile === 'update-producer' && __jsx("span", null, "Caso voc\xEA tenha sido encontrado em nossa base e queira atualizar o seu email e/ou telefone entre em contato conosco em ", __jsx("a", {
      href: "mailto:contato@organis8.com.br"
    }, "contato@organis8.com.br"))));
  })));
};

/* harmony default export */ var Register_RegisterForm = (RegisterForm_RegisterForm);
// CONCATENATED MODULE: ./components/Register/ConfirmationChoice/ConfirmationChoice.tsx

var ConfirmationChoice_jsx = external_react_default.a.createElement;


const ConfirmationChoice_stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados'
}]]);

const ConfirmationChoice = ({
  values,
  onSubmit,
  profile,
  choice
}) => {
  const {
    cardTitle
  } = ConfirmationChoice_stringMap.get(profile);
  const {
    email,
    phone
  } = values;
  return ConfirmationChoice_jsx("div", {
    className: "card"
  }, ConfirmationChoice_jsx("div", {
    className: "title-container"
  }, ConfirmationChoice_jsx("h1", {
    className: "card-title"
  }, cardTitle)), ConfirmationChoice_jsx("div", {
    className: "card-content"
  }, ConfirmationChoice_jsx("label", null, "Confirmar dados > Confirmar identidade"), ConfirmationChoice_jsx("h2", {
    className: "form-title"
  }, "Como prefere confirmar sua identidade?"), ConfirmationChoice_jsx("div", {
    className: "choice-container"
  }, ConfirmationChoice_jsx("div", {
    className: "choice-label"
  }, ConfirmationChoice_jsx("span", null, "Email:   ", ConfirmationChoice_jsx("strong", null, " ", email))), ConfirmationChoice_jsx(Button["a" /* default */], {
    onClick: () => onSubmit('email'),
    loading: choice === 'email' && "true",
    color: "primary"
  }, "Confirmar por email")), ConfirmationChoice_jsx("div", {
    className: "choice-container"
  }, ConfirmationChoice_jsx("div", {
    className: "choice-label"
  }, ConfirmationChoice_jsx("span", null, "Telefone: ", ConfirmationChoice_jsx("strong", null, phone))), ConfirmationChoice_jsx(Button["a" /* default */], {
    onClick: () => onSubmit('sms'),
    loading: choice === "sms" && "true",
    color: "primary"
  }, "Confirmar por SMS"))));
};

/* harmony default export */ var ConfirmationChoice_ConfirmationChoice = (ConfirmationChoice);
// CONCATENATED MODULE: ./components/Register/Confirmation/Confirmation.tsx

var Confirmation_jsx = external_react_default.a.createElement;




const Confirmation_stringMap = new Map([['user', {
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
  loading = 'false',
  onSendAgain,
  invalid
}) => {
  const {
    cardTitle
  } = Confirmation_stringMap.get(profile);
  const {
    0: confirmation,
    1: setConfirmation
  } = Object(external_react_["useState"])('');
  return Confirmation_jsx("div", {
    className: "card"
  }, Confirmation_jsx("div", {
    className: "title-container"
  }, Confirmation_jsx("h1", {
    className: "card-title"
  }, cardTitle)), Confirmation_jsx("div", {
    className: "card-content"
  }, Confirmation_jsx("label", null, "Confirmar dados ", Confirmation_jsx("span", null, " > "), " Confirmar identidade"), Confirmation_jsx("h2", {
    className: "form-title"
  }, "Enviamos um c\xF3digo de 6 digitos para o seu ", choiceLabel.get(confirmationChoice)), Confirmation_jsx("div", {
    className: "confirmation-container"
  }, Confirmation_jsx("div", {
    className: "form-group"
  }, Confirmation_jsx("label", null, "Por favor, insira o c\xF3digo abaixo:"), Confirmation_jsx(Input["a" /* default */], {
    mask: "999999",
    value: confirmation,
    onChange: e => setConfirmation(e.target.value)
  })), Confirmation_jsx(Button["a" /* default */], {
    loading: loading.toString(),
    color: "primary",
    onClick: () => onSubmit(confirmation),
    disabled: confirmation.length !== 6 || confirmation.includes('_')
  }, "Continuar")), invalid && Confirmation_jsx("p", {
    className: "error-message"
  }, "C\xF3digo inv\xE1lido"), Confirmation_jsx("div", {
    className: "not-received"
  }, Confirmation_jsx("span", null, "N\xE3o recebeu o c\xF3digo?"), Confirmation_jsx("a", {
    onClick: () => onSendAgain()
  }, "Clique aqui para enviar novamente "))));
};

/* harmony default export */ var Confirmation_Confirmation = (Confirmation);
// CONCATENATED MODULE: ./components/Register/AddressForm/AddressForm.tsx

var AddressForm_jsx = external_react_default.a.createElement;

function AddressForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AddressForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddressForm_ownKeys(Object(source), true).forEach(function (key) { AddressForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddressForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddressForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AddressForm_stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados'
}]]);

const AddressForm_validate = values => {
  let errors = {};
  return errors;
};

const AddressForm = ({
  values,
  loading,
  onSubmit,
  profile,
  producer = null
}) => {
  const {
    cardTitle
  } = AddressForm_stringMap.get(profile);

  const handleCepChange = async (e, setValues, currentValues) => {
    const cep = e.target.value;

    if (cep && !cep.includes('_')) {
      const res = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      const data = await res.json();
      setValues(AddressForm_objectSpread(AddressForm_objectSpread({}, currentValues), {}, {
        zipcode: cep,
        address: data.logradouro,
        city: data.localidade,
        state: data.uf
      }));
    }
  };

  return AddressForm_jsx("div", {
    className: "card"
  }, AddressForm_jsx("div", {
    className: "title-container"
  }, AddressForm_jsx("h1", {
    className: "card-title"
  }, cardTitle)), AddressForm_jsx("div", {
    className: "card-content"
  }, AddressForm_jsx("label", null, "Confirmar dados: Endere\xE7o comercial"), AddressForm_jsx(external_formik_["Formik"], {
    initialValues: {
      address: '',
      zipcode: '',
      number: '',
      complement: '',
      city: '',
      state: ''
    },
    validate: AddressForm_validate,
    onSubmit: onSubmit
  }, ({
    errors,
    values,
    handleChange,
    setValues,
    setTouched
  }) => {
    return AddressForm_jsx(external_formik_["Form"], {
      className: "form-container"
    }, AddressForm_jsx("h2", {
      className: "form-title"
    }, "Para finalizar, basta atualizar os dados do seu enderec\u0327o comercial."), AddressForm_jsx("div", {
      className: "row"
    }, AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "CEP"), AddressForm_jsx(external_formik_["Field"], {
      name: "zipcode",
      mask: "99999-999",
      placeholder: "CEP",
      onChange: e => {
        handleCepChange(e, setValues, values);
        handleChange('zipcode')(e);
      },
      component: Input["a" /* default */]
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "zipcode",
      component: "span"
    }))), AddressForm_jsx("div", {
      className: "row"
    }, AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "Endere\xE7o"), AddressForm_jsx(external_formik_["Field"], {
      name: "address",
      mask: null,
      placeholder: "Endere\xE7o",
      component: Input["a" /* default */],
      disabled: true
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "address",
      component: "span"
    })), AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "N\xFAmero"), AddressForm_jsx(external_formik_["Field"], {
      name: "number",
      placeholder: "N\xFAmero",
      component: Input["a" /* default */]
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "number",
      component: "span"
    }))), AddressForm_jsx("div", {
      className: "row"
    }, AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "Complemento"), AddressForm_jsx(external_formik_["Field"], {
      name: "complement",
      placeholder: "Complemento",
      component: Input["a" /* default */]
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "complement",
      component: "span"
    })), AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "Cidade"), AddressForm_jsx(external_formik_["Field"], {
      name: "city",
      mask: null,
      placeholder: "Cidade",
      component: Input["a" /* default */],
      disabled: true
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "city",
      component: "span"
    }))), AddressForm_jsx("div", {
      className: "form-group"
    }, AddressForm_jsx("label", null, "Estado"), AddressForm_jsx(external_formik_["Field"], {
      name: "state",
      mask: null,
      placeholder: "Estado",
      component: Input["a" /* default */],
      disabled: true
    }), AddressForm_jsx(external_formik_["ErrorMessage"], {
      name: "state",
      component: "span"
    })), AddressForm_jsx("div", {
      className: "button-container"
    }, AddressForm_jsx(Button["a" /* default */], {
      color: "secundary",
      type: "submit",
      tabIndex: 1,
      loading: loading.toString(),
      disabled: Object.keys(errors).length > 0
    }, "Avan\xE7ar")));
  })));
};

/* harmony default export */ var AddressForm_AddressForm = (AddressForm);
// CONCATENATED MODULE: ./components/Register/RegisterSuccess/RegisterSuccess.tsx

var RegisterSuccess_jsx = external_react_default.a.createElement;

const RegisterSuccess = () => {
  return RegisterSuccess_jsx("div", {
    className: "card success"
  }, RegisterSuccess_jsx("div", {
    className: "title-container"
  }, RegisterSuccess_jsx("h1", {
    className: "card-title success"
  }, "Cadastro finalizado")), RegisterSuccess_jsx("div", {
    className: "card-content"
  }, RegisterSuccess_jsx("h1", {
    className: "form-title success"
  }, "Parabe\u0301ns, seu cadastro foi finalizado!"), RegisterSuccess_jsx("h2", {
    className: "community-info"
  }, "Voce\u0302 agora faz parte da JusCredit!"), RegisterSuccess_jsx("h3", {
    className: "contact-info"
  }, "Voc\xEA receber\xE1 um email para cria\xE7\xE3o de senha e completar seu perfil ", RegisterSuccess_jsx("br", null), "Iremos entrar em contato com voc\xEA para confirmar suas informac\u0327o\u0303es.")));
};

/* harmony default export */ var RegisterSuccess_RegisterSuccess = (RegisterSuccess);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Register/ProducerFound/ProducerFound.tsx

var ProducerFound_jsx = external_react_default.a.createElement;




const ProducerFound = ({
  producer,
  onSubmit
}) => {
  const router = Object(router_["useRouter"])();
  return ProducerFound_jsx("div", {
    className: "card"
  }, ProducerFound_jsx("div", {
    className: "title-container"
  }, "  ", ProducerFound_jsx("h1", {
    className: "card-title "
  }, "Meus dados")), ProducerFound_jsx("div", {
    className: "card-content"
  }, ProducerFound_jsx("h1", {
    className: "form-title success"
  }, "Parab\xE9ns voc\xEA est\xE1 cadastrado no MAPA!"), ProducerFound_jsx("div", {
    className: "map-svg-container"
  }, ProducerFound_jsx("div", {
    className: "info-container"
  }, ProducerFound_jsx("p", null, producer.companyName || producer.contactName || 'PRODUTOR SEM NOME'), ProducerFound_jsx("p", null, `${producer.address}, ${producer.city} - ${producer.state}`), ProducerFound_jsx("p", null, "CEP ", producer.zipcode))), ProducerFound_jsx("p", null, "Mas para sua valida\xE7\xE3o, precisamos que voc\xEA confirme os dados acima."), ProducerFound_jsx("div", {
    className: "button-container"
  }, ProducerFound_jsx(Button["a" /* default */], {
    color: "primary",
    onClick: onSubmit
  }, "Atualizar dados"), ProducerFound_jsx(Button["a" /* default */], {
    color: "secondary",
    onClick: () => router.push('/find-partners')
  }, "Os dados est\xE3o corretos"))));
};

/* harmony default export */ var ProducerFound_ProducerFound = (ProducerFound);
// CONCATENATED MODULE: ./pages/signup/update-producer/[id].tsx

var _id_jsx = external_react_default.a.createElement;

function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const UpdateProducer = ({
  data
}) => {
  const {
    id: producerId
  } = data;
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])(-1);
  const {
    0: userValues,
    1: setUserValues
  } = Object(external_react_["useState"])(null);
  const {
    0: confirmationChoice,
    1: setConfirmationChoice
  } = Object(external_react_["useState"])(null);
  const {
    0: invalidCode,
    1: setInvalid
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  const handleUserSubmit = values => {
    setUserValues(values);
    setStep(1);
  };

  const handleConfimationChoice = async choice => {
    setConfirmationChoice(choice);

    try {
      setLoading(true);
      await sendConfirmation(choice);
      setLoading(false);
      setStep(2);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleConfimation = async value => {
    const {
      email,
      phone
    } = userValues;
    setLoading(true);

    try {
      const res = await external_isomorphic_unfetch_default()(`${process.env.API_URL}/api/confirmation/verify`, {
        method: 'POST',
        body: JSON.stringify({
          target: confirmationChoice === 'email' ? email : `+55${phone.replace(/\D/g, '')}`,
          code: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setLoading(false);

      if (res.status === 200) {
        setStep(3);
      } else {
        setInvalid(true);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const sendConfirmation = async choice => {
    const {
      email,
      phone
    } = userValues;

    try {
      const res = await external_isomorphic_unfetch_default()(`${process.env.API_URL}/api/confirmation/send-${choice}`, {
        method: 'POST',
        body: JSON.stringify(choice === 'email' ? {
          email
        } : {
          phone: `+55${phone.replace(/\D/g, '')}`
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status !== 200) {
        throw res;
      }
    } catch (e) {
      throw e;
    }
  };

  const handleAddressSubmit = async values => {
    setLoading(true);
    const addressString = `${values.address}, ${values.number}, ${values.city}, ${values.state}`;
    const res = await external_isomorphic_unfetch_default()(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=AIzaSyD9birqocIzncUHjXSWIrx67UAT865gp84`);
    const data = await res.json();
    const {
      lat,
      lng
    } = data.results[0].geometry.location;

    if (res.status === 200) {
      await updateProducer(_id_objectSpread(_id_objectSpread({
        zipcode: values.zipcode,
        address: `${values.address}, ${values.number}`,
        city: values.city,
        state: values.state,
        country: 'BR'
      }, userValues), {}, {
        latitude: lat,
        longitude: lng
      }));
      document.cookie = `lead=${true}; path=/`;
      setStep(4);
    } else {
      setInvalid(true);
    }
  };

  const updateProducer = async body => {
    try {
      const res = await external_isomorphic_unfetch_default()(`${process.env.API_URL}/api/produtores/${producerId}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  switch (step) {
    case -1:
      return _id_jsx(ProducerFound_ProducerFound, {
        producer: data,
        onSubmit: () => setStep(0)
      });

    case 0:
      return _id_jsx(Register_RegisterForm, {
        profile: "update-producer",
        onSubmit: handleUserSubmit,
        producer: data
      });

    case 1:
      return _id_jsx(ConfirmationChoice_ConfirmationChoice, {
        choice: confirmationChoice,
        profile: "producer",
        values: userValues,
        onSubmit: handleConfimationChoice
      });

    case 2:
      return _id_jsx(Confirmation_Confirmation, {
        onSendAgain: () => sendConfirmation(confirmationChoice),
        profile: "producer",
        invalid: invalidCode,
        confirmationChoice: confirmationChoice,
        onSubmit: handleConfimation
      });

    case 3:
      return _id_jsx(AddressForm_AddressForm, {
        profile: "producer",
        loading: loading.toString(),
        values: userValues,
        producer: data,
        onSubmit: handleAddressSubmit
      });

    case 4:
      return _id_jsx(RegisterSuccess_RegisterSuccess, null);
  }
};

UpdateProducer.getInitialProps = async ({
  query
}) => {
  const {
    id
  } = query;
  const res = await external_isomorphic_unfetch_default()(`${process.env.API_URL}/api/produtores/${id}`);
  const data = await res.json();
  return {
    data
  };
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (UpdateProducer);

/***/ }),

/***/ "yKCf":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ })

/******/ });