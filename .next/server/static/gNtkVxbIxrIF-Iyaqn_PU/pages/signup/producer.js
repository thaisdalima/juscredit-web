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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("t6kq");


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

/***/ "B1eL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("onHk");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("89Ff");

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
    className: "card"
  }, __jsx("label", null, "Confirmar dados > Confirmar identidade"), __jsx("h1", {
    className: "card-title"
  }, cardTitle), __jsx("h2", {
    className: "form-title"
  }, "Como prefere confirmar sua identidade?"), __jsx("div", {
    className: "choice-container"
  }, __jsx("span", null, "Email:   ", __jsx("strong", null, " ", email)), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => onSubmit('email'),
    color: "primary"
  }, "Confirmar por email")), __jsx("div", {
    className: "choice-container"
  }, __jsx("span", null, "Telefone: ", __jsx("strong", null, phone)), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onClick: () => onSubmit('sms'),
    color: "primary"
  }, "Confirmar por SMS")));
};

/* harmony default export */ __webpack_exports__["a"] = (ConfirmationChoice);

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
    className: 'juscredit-input ' + className
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

/***/ "fpb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("onHk");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TuSW");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("89Ff");

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
    className: "card"
  }, __jsx("label", null, "Confirmar dados > Confirmar identidade > Inserir c\xF3digo"), __jsx("h1", {
    className: "card-title"
  }, cardTitle), __jsx("h2", {
    className: "form-title"
  }, "Enviamos um c\xF3digo de 6 digitos para o seu ", choiceLabel.get(confirmationChoice)), __jsx("div", {
    className: "confirmation-container"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Por favor, insira o c\xF3digo abaixo:"), __jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    mask: "999999",
    value: confirmation,
    onChange: e => setConfirmation(e.target.value)
  })), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    loading: loading,
    color: "primary",
    onClick: onSubmit,
    disabled: confirmation.length !== 6 || confirmation.includes('_')
  }, "Continuar")), __jsx("div", {
    className: "not-received"
  }, __jsx("span", null, "N\xE3o recebeu o c\xF3digo?"), __jsx("a", null, "Clique aqui para enviar novamente >")));
};

/* harmony default export */ __webpack_exports__["a"] = (Confirmation);

/***/ }),

/***/ "onHk":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLzi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("89Ff");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RegisterSuccess = () => {
  return __jsx("div", {
    className: "card success"
  }, __jsx("h1", {
    className: "card-title success"
  }, "Cadastro finalizado"), __jsx("h1", {
    className: "form-title success"
  }, "Parabe\u0301ns, seu cadastro foi finalizado!"), __jsx("h2", {
    className: "community-info"
  }, "Voce\u0302 agora faz parte da maior comunidade de produtores orga\u0302nicos do Brasil."), __jsx("h3", {
    className: "contact-info"
  }, "Iremos entrar em contato com voc\xEA para confirmar suas informac\u0327o\u0303es."), __jsx("div", {
    className: "finish-container"
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    color: "primary",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/')
  }, "Finalizar e voltar para home")));
};

/* harmony default export */ __webpack_exports__["a"] = (RegisterSuccess);

/***/ }),

/***/ "t6kq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ziZL");
/* harmony import */ var _components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B1eL");
/* harmony import */ var _components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fpb8");
/* harmony import */ var _components_Register_AddressForm_AddressForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("t8m8");
/* harmony import */ var _components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sLzi");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SignupProducer = () => {
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

  const handleConfimation = value => {
    setStep(3);
  };

  const handleAddressSubmit = async values => {
    setLoading(true);
    const addressString = `${values.address}, ${values.number}, ${values.city}, ${values.state}`;
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=AIzaSyD9birqocIzncUHjXSWIrx67UAT865gp84`);
    const data = await res.json();
    const {
      lat,
      lng
    } = data.results[0].geometry.location;
    await createProducer(_objectSpread({
      address: `${values.address}, ${values.number}`,
      city: values.city,
      state: values.state
    }, userValues, {
      latitude: lat,
      longitude: lng
    }));
    setStep(4);
  };

  const createProducer = async body => {
    try {
      const res = await fetch('https://api.organis8.com.br/api/produtores', {
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
      return __jsx(_components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        profile: "producer",
        onSubmit: handleUserSubmit
      });

    case 1:
      return __jsx(_components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        profile: "producer",
        values: userValues,
        onSubmit: handleConfimationChoice
      });

    case 2:
      return __jsx(_components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        profile: "producer",
        confirmationChoice: confirmationChoice,
        onSubmit: handleConfimation
      });

    case 3:
      return __jsx(_components_Register_AddressForm_AddressForm__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        profile: "producer",
        loading: loading,
        values: userValues,
        onSubmit: handleAddressSubmit
      });

    case 4:
      return __jsx(_components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SignupProducer);

/***/ }),

/***/ "t8m8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("onHk");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TuSW");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("89Ff");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const stringMap = new Map([['user', {
  cardTitle: 'Cadastrando meus dados'
}], ['producer', {
  cardTitle: 'Cadastrando meus dados'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados'
}]]);

const validate = values => {
  let errors = {};
  return errors;
};

const AddressForm = ({
  values,
  loading,
  onSubmit,
  profile
}) => {
  const {
    cardTitle
  } = stringMap.get(profile);

  const handleCepChange = async (e, setValues) => {
    const cep = e.target.value;

    if (cep && !cep.includes('_')) {
      const res = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      const data = await res.json();
      setValues({
        address: data.logradouro,
        city: data.localidade,
        state: data.uf
      });
    }
  };

  return __jsx("div", {
    className: "card"
  }, __jsx("label", null, "Confirmar dados > Endere\xE7o comercial"), __jsx("h1", {
    className: "card-title"
  }, cardTitle), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      address: '',
      cep: '',
      number: '',
      complement: '',
      city: '',
      state: ''
    },
    validate: validate,
    onSubmit: onSubmit
  }, ({
    errors,
    values,
    handleChange,
    setValues
  }) => {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "form-container"
    }, __jsx("h2", {
      className: "form-title"
    }, "Para finalizar, basta atualizar os dados do seu enderec\u0327o comercial."), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "CEP"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "cep",
      mask: "99999-999",
      placeholder: "CEP",
      onChange: e => {
        handleCepChange(e, setValues);
        handleChange('cep')(e);
      },
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "cep",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Endere\xE7o"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "address",
      mask: null,
      placeholder: "Endere\xE7o",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      disabled: true
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "address",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "N\xFAmero"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "number",
      placeholder: "N\xFAmero",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "number",
      component: "span"
    }))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Complemento"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "complement",
      placeholder: "Complemento",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "complement",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Cidade"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "city",
      mask: null,
      placeholder: "Cidade",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      disabled: true
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "city",
      component: "span"
    }))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Estado"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "state",
      mask: null,
      placeholder: "Estado",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      disabled: true
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "state",
      component: "span"
    })), __jsx("div", {
      className: "button-container"
    }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      color: "primary",
      type: "submit",
      tabIndex: 1,
      loading: loading,
      disabled: Object.keys(errors).length > 0
    }, "Avan\xE7ar")));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AddressForm);

/***/ }),

/***/ "yKCf":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "ziZL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("onHk");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TuSW");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("89Ff");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
    className: "card"
  }, __jsx("label", null, "Confirmar dados"), __jsx("h1", {
    className: "card-title"
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
    })
  }, ({
    errors,
    touched
  }) => {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      className: "form-container"
    }, __jsx("h2", {
      className: "form-title"
    }, formTitle), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "email",
      mask: null,
      placeholder: "Email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      component: "span"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Confirme seu email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "confirmEmail",
      mask: null,
      placeholder: "Confirme seu email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "confirmEmail",
      component: "span"
    }))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Celular com DDD"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      name: "phone",
      mask: "(99) 99999-9999",
      placeholder: "Celular com DDD",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "phone",
      component: "span"
    })), __jsx("div", {
      className: "button-container"
    }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      color: "primary",
      type: "submit",
      tabIndex: 1,
      disabled: Object.keys(touched).length < 2 || Object.keys(errors).length > 0
    }, "Avan\xE7ar")));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (RegisterForm);

/***/ })

/******/ });