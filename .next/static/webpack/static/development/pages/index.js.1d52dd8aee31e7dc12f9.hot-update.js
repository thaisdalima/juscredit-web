webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../api */ "./api.js");





var _jsxFileName = "D:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















__jsx("meta", {
  name: "viewport",
  content: "::-webkit=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 1
  }
});

var Index = function Index(props) {
  var INITIAL_FORM = {
    full_name: '',
    account_type: '',
    person_type: '',
    title: '',
    email: '',
    phone: '',
    concordo_termos: '',
    investidor_qualificado: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(INITIAL_FORM),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      modalIndicarState = _React$useState6[0],
      setIndicarOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      modalAnteciparState = _React$useState8[0],
      setAnteciparOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      modalInvestirState = _React$useState10[0],
      setInvestirOpen = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("cliente"),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      profile = _React$useState12[0],
      setProfile = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      selectProfile = _React$useState14[0],
      setSelectProfile = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      originPath = _React$useState16[0],
      setOriginPath = _React$useState16[1];

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  var tipoPessoaArr = [{
    value: 'f',
    label: 'CPF'
  }, {
    value: 'j',
    label: 'CNPJ'
  }];

  var handleModalIndicar = function handleModalIndicar() {
    setIndicarOpen(true);
  };

  var handleModalAntecipar = function handleModalAntecipar() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'c'
    }));
    setAnteciparOpen(true);
  };

  var handleModalInvestir = function handleModalInvestir() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'i'
    }));
    setInvestirOpen(true);
  };

  var handleClose = function handleClose() {
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
    setFormValue(_objectSpread({}, formValues, {
      full_name: '',
      account_type: '',
      person_type: '',
      title: '',
      email: '',
      phone: '',
      concordo_termos: '',
      investidor_qualificado: ''
    }));
  };

  var handleProfile = function handleProfile(_profile) {
    setProfile(_profile);
  };

  var handleChangeSelect = function handleChangeSelect(event) {
    setSelectProfile(event.target.value);
  };

  var handleChangeCheckbox = function handleChangeCheckbox(event) {
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.checked)));
  };

  var atualizaFormValues = function atualizaFormValues(event, formItem) {
    var fieldNumeroProcesso = document.getElementById("modalFieldAntecipar-2");

    if (fieldNumeroProcesso != null) {
      console.log(fieldNumeroProcesso);
    }

    setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, formItem, event)));
  };

  var isEnabled = function isEnabled() {
    for (var key in formValues) {
      if (formValues["account_type"] !== "i") {
        formValues["investidor_qualificado"] = null;
      }

      if (formValues["account_type"] !== "c") {
        formValues["title"] = null;
      }

      if (formValues[key] != "") {} else {
        return true;
      }
    }
  };

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  function ProcessoFormat(props) {
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
      getInputRef: inputRef,
      format: "#######-##.####.#.##.[#]",
      allowEmptyFormatting: true,
      isNumericString: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }
    }));
  }

  ProcessoFormat.propTypes = {
    inputRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  };
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setOriginPath(window.location.origin);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "JusCredit - Home")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-2.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-1.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 27
    }
  }, "Receba diretamente em sua JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-4.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-5.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 27
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o \xE9 inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 27
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-6.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-7.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-8.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-9.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    autoFocus: true,
    id: "name",
    label: "Email @",
    type: "mail",
    variant: "outlined",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldAntecipar-1",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e.target.value, 'person_type');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    InputProps: {
      inputComponent: ProcessoFormat
    },
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'title');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldAntecipar-3",
    label: "Email",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'phone');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "modalFieldAntecipar-5",
    checked: state.checkedModalAntecipe,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'concordo_termos');
    },
    name: "checkedModalAntecipe",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Antecipe'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "modal-label",
    target: "_blank",
    style: {
      marginLeft: "6px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_18__["default"], "/user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldInvestir-0",
    label: "Nome completo",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldInvestir-1",
    label: "Email",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'phone');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "modalFieldInvestir-3",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e.target.value, 'person_type');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "modalFieldInvestir-4",
    checked: state.checkedModalInvestirQualificado,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'investidor_qualificado');
    },
    name: "checkedModalInvestirQualificado",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "modal-label",
    target: "_blank",
    style: {
      marginLeft: "6px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 17
    }
  }, "Leia os termos"))), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "modalFieldInvestir-5",
    checked: state.checkedModalInvestirConcordo,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'concordo_termos');
    },
    name: "checkedModalInvestirConcordo",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "modal-label",
    target: "_blank",
    style: {
      marginLeft: "6px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_18__["default"], "/user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: true,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 9
    }
  }, __jsx(Alert, {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 11
    }
  }, "Seu cadastro foi iniciado, ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 40
    }
  }, "verifique seu email"), " para conclui-lo e iniciar seus investimentos em nossa plataforma!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1d52dd8aee31e7dc12f9.hot-update.js.map