webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../api */ "./api.js");



var _jsxFileName = "D:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















__jsx("meta", {
  name: "viewport",
  content: "::-webkit=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 1
  }
});

var Index = function Index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      modalIndicarState = _React$useState6[0],
      setIndicarOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      modalAnteciparState = _React$useState8[0],
      setAnteciparOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      modalInvestirState = _React$useState10[0],
      setInvestirOpen = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("cliente"),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      profile = _React$useState12[0],
      setProfile = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      selectProfile = _React$useState14[0],
      setSelectProfile = _React$useState14[1];

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
    setFormValue({});
  };

  var handleModalAntecipar = function handleModalAntecipar() {
    setAnteciparOpen(true);
    setFormValue({});
    setFormValue(_objectSpread(_objectSpread({}, formValues), {}, {
      account_type: 'c'
    }));
  };

  var handleModalInvestir = function handleModalInvestir() {
    setInvestirOpen(true);
    setFormValue({});
    setFormValue(_objectSpread(_objectSpread({}, formValues), {}, {
      account_type: 'i'
    }));
  };

  var handleClose = function handleClose() {
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
  };

  var handleProfile = function handleProfile(_profile) {
    setProfile(_profile);
  };

  var handleChangeSelect = function handleChangeSelect(event) {
    setSelectProfile(event.target.value);
  };

  var handleChangeCheckbox = function handleChangeCheckbox(event) {
    setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.checked)));
  };

  var atualizaFormValues = function atualizaFormValues(event, formItem) {
    setFormValue(_objectSpread(_objectSpread({}, formValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formItem, event)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(formValues);
  }, [formValues]);

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "JusCredit - Home")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "".concat(window.location.origin, "/illustration-2.svg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 27
    }
  }, "Receba diretamente em sua JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-4.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-5.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
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
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o \xE9 inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
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
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
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
    src: "./illustration-3.svg",
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
  }, "Recebimento"), __jsx("ul", {
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
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "./illustration-6.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "./illustration-7.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "./illustration-8.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "./illustration-9.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  }, "Voc\xEA receber\xE1 um email para cria\xE7\xE3o de senha e completar seu perfil Iremos entrar em contato com voc\xEA para confirmar suas informac\u0327o\u0303es."), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Email @",
    type: "email",
    variant: "outlined",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 339,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 345,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'title');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 367,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 373,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 380,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_15__["default"], "/user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 406,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 412,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 418,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 424,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 440,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      lineNumber: 451,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_15__["default"], "/user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 11
    }
  }, "Enviar"))));
};

_s(Index, "VfFWc74IFLXjxe71gjV6zPwtfkM=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZE1vZGFsQW50ZWNpcGUiLCJjaGVja2VkTW9kYWxJbnZlc3RpclF1YWxpZmljYWRvIiwiY2hlY2tlZE1vZGFsSW52ZXN0aXJDb25jb3JkbyIsInN0YXRlIiwic2V0U3RhdGUiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlIiwibW9kYWxJbmRpY2FyU3RhdGUiLCJzZXRJbmRpY2FyT3BlbiIsIm1vZGFsQW50ZWNpcGFyU3RhdGUiLCJzZXRBbnRlY2lwYXJPcGVuIiwibW9kYWxJbnZlc3RpclN0YXRlIiwic2V0SW52ZXN0aXJPcGVuIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJzZWxlY3RQcm9maWxlIiwic2V0U2VsZWN0UHJvZmlsZSIsImF4aW9zIiwicmVxdWlyZSIsInRpcG9QZXNzb2FBcnIiLCJ2YWx1ZSIsImxhYmVsIiwiaGFuZGxlTW9kYWxJbmRpY2FyIiwiaGFuZGxlTW9kYWxBbnRlY2lwYXIiLCJhY2NvdW50X3R5cGUiLCJoYW5kbGVNb2RhbEludmVzdGlyIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVQcm9maWxlIiwiX3Byb2ZpbGUiLCJoYW5kbGVDaGFuZ2VTZWxlY3QiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoYW5nZUNoZWNrYm94IiwibmFtZSIsImNoZWNrZWQiLCJhdHVhbGl6YUZvcm1WYWx1ZXMiLCJmb3JtSXRlbSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJyZXFVUkwiLCJyZXFCb2R5IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm1hcmdpblJpZ2h0IiwiZSIsIm1hcCIsIm9wdGlvbiIsIkFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsU0FBSyxFQUFFO0FBQUVxQyxZQUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQUosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQUosQ0FIRixDQUhGLENBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHNCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FB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QW5CLENBQWxCO0FBQXlELEtBSHJHO0FBSUUsUUFBSSxFQUFDLDhCQUpQO0FBS0UsU0FBSyxFQUFDLFNBTFI7QUFNRSxjQUFVLEVBQUU7QUFBRSxvQkFBYztBQUFoQixLQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQU8sYUFBUyxFQUFDLGFBQWpCO0FBQStCLFdBQU8sRUFBQyxzQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FURixDQTdDRixDQURGLENBRkYsRUE2REUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFRLFdBQU8sRUFBRVIsV0FBakI7QUFBOEIsU0FBSyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFJRSxNQUFDLGlFQUFEO0FBQVEsV0FBTyxFQUFFLGlCQUFBMkIsQ0FBQyxFQUFJO0FBQUViLGtCQUFZLFdBQUlnQiw2Q0FBSixZQUFnQm5ELFVBQWhCLENBQVo7QUFBeUMsS0FBakU7QUFBbUUsU0FBSyxFQUFDLFNBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQTdERixDQTdTRixDQURGO0FBdVhELENBeGNEOztHQUFNUixLOztLQUFBQSxLO0FBeWNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzVlZDhjYmZjM2IxMGE4OTY0ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLy4uL2FwaSc7XHJcblxyXG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiOjotd2Via2l0PWRldmljZS13aWR0aFwiPjwvbWV0YT5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBjaGVja2VkTW9kYWxBbnRlY2lwZTogZmFsc2UsXHJcbiAgICBjaGVja2VkTW9kYWxJbnZlc3RpclF1YWxpZmljYWRvOiBmYWxzZSxcclxuICAgIGNoZWNrZWRNb2RhbEludmVzdGlyQ29uY29yZG86IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gIH0pO1xyXG4gIGNvbnN0IFttb2RhbEluZGljYXJTdGF0ZSwgc2V0SW5kaWNhck9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbEFudGVjaXBhclN0YXRlLCBzZXRBbnRlY2lwYXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxJbnZlc3RpclN0YXRlLCBzZXRJbnZlc3Rpck9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiY2xpZW50ZVwiKTtcclxuICBjb25zdCBbc2VsZWN0UHJvZmlsZSwgc2V0U2VsZWN0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbiAgY29uc3QgdGlwb1Blc3NvYUFyciA9IFtcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdmJyxcclxuICAgICAgbGFiZWw6ICdDUEYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdqJyxcclxuICAgICAgbGFiZWw6ICdDTlBKJyxcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2RhbEluZGljYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmRpY2FyT3Blbih0cnVlKTtcclxuICAgIHNldEZvcm1WYWx1ZSh7fSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxBbnRlY2lwYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRBbnRlY2lwYXJPcGVuKHRydWUpO1xyXG4gICAgc2V0Rm9ybVZhbHVlKHt9KTtcclxuICAgIHNldEZvcm1WYWx1ZSh7IC4uLmZvcm1WYWx1ZXMsIGFjY291bnRfdHlwZTogJ2MnIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsSW52ZXN0aXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnZlc3Rpck9wZW4odHJ1ZSk7XHJcbiAgICBzZXRGb3JtVmFsdWUoe30pO1xyXG4gICAgc2V0Rm9ybVZhbHVlKHsgLi4uZm9ybVZhbHVlcywgYWNjb3VudF90eXBlOiAnaScgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmRpY2FyT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBbnRlY2lwYXJPcGVuKGZhbHNlKTtcclxuICAgIHNldEludmVzdGlyT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZSA9IChfcHJvZmlsZSkgPT4ge1xyXG4gICAgc2V0UHJvZmlsZShfcHJvZmlsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlbGVjdFByb2ZpbGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDaGVja2JveCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR1YWxpemFGb3JtVmFsdWVzID0gKGV2ZW50LCBmb3JtSXRlbSkgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlKHsgLi4uZm9ybVZhbHVlcywgW2Zvcm1JdGVtXTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZm9ybVZhbHVlcyk7XHJcbiAgfSwgW2Zvcm1WYWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHJlcVVSTCwgcmVxQm9keSkgPT4ge1xyXG5cclxuICAgIGF4aW9zLnBvc3QocmVxVVJMLCByZXFCb2R5KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkp1c0NyZWRpdCAtIEhvbWU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tcGFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC10ZXh0c1wiPlxyXG4gICAgICAgICAgICA8aDE+QW50ZWNpcGUgc2V1IDxiciAvPmNyw6lkaXRvIHRyYWJhbGhpc3RhPC9oMT5cclxuICAgICAgICAgICAgPGgyPlTDqm0gdW0gcHJvY2Vzc28gZ2FuaG8/IFJlY2ViYSBhZ29yYTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsQW50ZWNpcGFyKCl9IGNvbG9yPVwicHJpbWFyeVwiPlF1ZXJvIGFudGVjaXBhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWxJbnZlc3RpcigpfSBjb2xvcj1cInNlY29uZGFyeVwiPlF1ZXJvIGludmVzdGlyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY3Vyc29yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjY29uaGVjYS12YW50YWdlbnNcIiA+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hldnJvbi1kb3duLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbmhlw6dhIGFzIHZhbnRhZ2Vuczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb25oZWNhLXZhbnRhZ2Vuc1wiIGNsYXNzTmFtZT1cImFudGVjaXBhclwiPlxyXG4gICAgICAgICAge3Byb2ZpbGUgPT0gXCJjbGllbnRlXCIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC10d28tY29sdW1ucyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5NYWlzIHZhbG9yIHBhcmEgcXVlbSBpbnZlc3RlLjxiciAvPlLDoXBpZG8gcGFyYSBxdWVtIGFudGVjaXBhLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5TZXJ2acOnbyBkZSBhbnRlY2lwYcOnw6NvIGRpc3BvbsOtdmVsIHBhcmEgVHJhYmFsaGFkb3JlcyBlIEFkdm9nYWRvcy48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvZmlsZShcImNsaWVudGVcIil9IGNvbG9yPXtwcm9maWxlID09IFwiY2xpZW50ZVwiID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwifT5DbGllbnRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvZmlsZShcImludmVzdGlkb3JcIil9IGNvbG9yPXtwcm9maWxlICE9IFwiY2xpZW50ZVwiID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwifT5JbnZlc3RpZG9yPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLXNob3djYXNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vaWxsdXN0cmF0aW9uLTIuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UHJhdGljaWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlByb2Nlc3NvIGRlIGFudGVjaXBhw6fDo28gMTAwJSBkaWdpdGFsLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5BbsOhbGlzZSByw6FwaWRhIGUgc2VtIGN1c3RvLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi0xLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkFnaWxpZGFkZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+TGlxdWlkZXogaW1lZGlhdGEsIG7Do28gZXNwZXJlIG1haXMgcGFyYSByZWNlYmVyIG8gc2V1IGRpcmVpdG8uPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaWxsdXN0cmF0aW9uLTMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TGliZXJhw6fDo288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlJlY2ViYSBkaXJldGFtZW50ZSBlbSBzdWEgSnVzQ3JlZGl0LjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lciBmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWxBbnRlY2lwYXIoKX0gY29sb3I9XCJzaXh0eVwiPlF1ZXJvIGFudGVjaXBhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Byb2ZpbGUgIT0gXCJjbGllbnRlXCIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC10d28tY29sdW1ucyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5NYWlzIHZhbG9yIHBhcmEgcXVlbSBpbnZlc3RlLjxiciAvPlLDoXBpZG8gcGFyYSBxdWVtIGFudGVjaXBhLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5JbnZlc3RpbWVudG9zIGVtIGNyw6lkaXRvcyBqdWRpY2lhaXMgZGUgZm9ybWEgcsOhcGlkYSBlIGRlc2NvbXBsaWNhZGEuPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lciBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2ZpbGUoXCJjbGllbnRlXCIpfSBjb2xvcj17cHJvZmlsZSA9PSBcImNsaWVudGVcIiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIn0+Q2xpZW50ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2ZpbGUoXCJpbnZlc3RpZG9yXCIpfSBjb2xvcj17cHJvZmlsZSAhPSBcImNsaWVudGVcIiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIn0+SW52ZXN0aWRvcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1zaG93Y2FzZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi00LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlJlbnRhYmlsaWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pk1haW9yIHJldG9ybm8gcXVlIGludmVzdGltZW50b3MgdHJhZGljaW9uYWlzLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5CYWl4byB2YWxvciBpbmljaWFsIGRlIGludmVzdGltZW50by48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+RGlzcG9uw612ZWwgcGFyYSBQRiBlIFBKLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi01LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlNlZ3VyYW7Dp2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pk1vZGVsbyBwcm9wcmlldMOhcmlvIGRlIGFuw6FsaXNlLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5FbXByZXNhcyBzYXVkw6F2ZWlzLCBzZW0gbmVnYXRpdmHDp8OjbyDDqSBpbmNsdXNhcyBubyBiYW5jbyBuYWNpb25hbCBkZSBkZXZlZG9yZXMgdHJhYmFsaGlzdGFzLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5QYXJjZWlybyBkZSBlc2NyaXTDs3JpbyBlc3BlY2lhbGl6YWRvIGVtIGRpcmVpdG8gZG8gdHJhYmFsaG8uPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaWxsdXN0cmF0aW9uLTMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UmVjZWJpbWVudG88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlJlY2ViYSBvcyB2YWxvcmVzIGRvcyBjcsOpZGl0b3MganVkaWNpYWlzIGFkcXVpcmlkb3MgZGlyZXRhbWVudGUgZW0gc3VhIGNvbnRhIEp1c0NyZWRpdC48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsSW52ZXN0aXIoKX0gY29sb3I9XCJzaXh0eVwiPlF1ZXJvIGludmVzdGlyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29tby1mdW5jaW9uYVwiIGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgxPkNvbW8gZnVuY2lvbmEgYSBwbGF0YWZvcm1hPzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgQ29udGUgY29tIHRvZGEgYSBzZWd1cmFuw6dhLCBhZ2lsaWRhZGUgZSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHByYXRpY2lkYWRlIG5hIGxpYmVyYcOnw6NvIGRvIHNldSBwcm9jZXNzbyBnYW5ob1xyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLWhvd3RvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCI3MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBzcmM9XCIuL2lsbHVzdHJhdGlvbi02LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q2xpZW50ZSBzb2xpY2l0YTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+MTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBDbGllbnRlIHNvbGljaXRhIGFudGVjaXBhw6fDo28gZG8gY3LDqWRpdG8gdHJhYmFsaGlzdGEgbmEgcGxhdGFmb3JtYS5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gc3JjPVwiLi9pbGx1c3RyYXRpb24tNy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkFuw6FsaXNlIGF2YW7Dp2FkYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+MjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBbsOhbGlzZSBjb20gbW9kZWxvIHByb3ByaWV0w6FyaW8gZGUgY3LDqWRpdG8sIHNlIGFwcm92YWRvIMOpIGRpc3BvbmliaWxpemFkbyBhbyBpbnZlc3RpZG9yZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCI3MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBzcmM9XCIuL2lsbHVzdHJhdGlvbi04LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+SW52ZXN0aWRvcmVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1udW1iZXJcIj4zPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIE9zIGludmVzdGlkb3JlcyBlc2NvbGhlbSBxdWFudG8gZSBlbSBxdWFpcyBjcsOpZGl0b3MgdHJhYmFsaGlzdGFzIHF1ZXJlbSBpbnZlc3Rpci5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gc3JjPVwiLi9pbGx1c3RyYXRpb24tOS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PlJlY2ViYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+NDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBPIHRyYWJhbGhhZG9yIHJlY2ViZSBhIGFudGVjaXBhw6fDo28gZSBvcyBpbnZlc3RpZG9yZXMgc2V1cyBwYWdhbWVudG9zLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwYXJjZWlyb3MtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiaW5kaWNhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBTZWphIHVtIHBhcmNlaXJvIEp1c0NyZWRpdDwvaDE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkluZGlxdWUgY3LDqWRpdG9zIHRyYWJhbGhpc3RhcyBlbGVnw612ZWlzIGUgZ2FuaGUgY29ub3Njby48L2gyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU1vZGFsSW5kaWNhcn0+SW5kaWNhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxEaWFsb2cgb3Blbj17bW9kYWxJbmRpY2FyU3RhdGV9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJwYXJjZWlyby1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJwYXJjZWlyby1kaWFsb2ctdGl0bGVcIj5JbnNjcmV2YS1zZTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgIFZvY8OqIHJlY2ViZXLDoSB1bSBlbWFpbCBwYXJhIGNyaWHDp8OjbyBkZSBzZW5oYSBlIGNvbXBsZXRhciBzZXUgcGVyZmlsXHJcbiAgICAgICAgICAgIElyZW1vcyBlbnRyYXIgZW0gY29udGF0byBjb20gdm9jw6ogcGFyYSBjb25maXJtYXIgc3VhcyBpbmZvcm1hY8ynb8yDZXMuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEBcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICA8RGlhbG9nIG9wZW49e21vZGFsQW50ZWNpcGFyU3RhdGV9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJhbnRlY2lwYXItZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYW50ZWNpcGFyLWRpYWxvZy10aXRsZVwiPkFudGVjaXBlIG8gc2V1IGNyw6lkaXRvPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1vZGFsLWZvcm1cIiBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBjb21wbGV0b1wiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ2Z1bGxfbmFtZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItMVwiXHJcbiAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUaXBvIGRlIFBlc3NvYVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0UHJvZmlsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGhhbmRsZUNoYW5nZVNlbGVjdChlKTsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAncGVyc29uX3R5cGUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpcG9QZXNzb2FBcnIubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci0yXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZG8gcHJvY2Vzc29cIlxyXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJFeGVtcGxvOiAwMDAwMDIwLTM3LjIwMTAuNS4xNS4wMTE4XCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAndGl0bGUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTNcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdlbWFpbCcpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItNFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDZWx1bGFyXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAncGhvbmUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItNVwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0ZS5jaGVja2VkTW9kYWxBbnRlY2lwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaGFuZGxlQ2hhbmdlQ2hlY2tib3goZSk7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC5jaGVja2VkLCAnY29uY29yZG9fdGVybW9zJykgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2VkTW9kYWxBbnRlY2lwZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdDaGVja2JveCBNb2RhbCBBbnRlY2lwZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtb2RhbC1sYWJlbFwiIGh0bWxGb3I9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTVcIj5Db25jb3JkbyBjb20gb3MgVGVybW9zIGRvIEp1c0NyZWRpdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2UgPT4geyBoYW5kbGVTdWJtaXQoYCR7QVBJfS91c2VyYCwgZm9ybVZhbHVlcykgfX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgIDxEaWFsb2cgb3Blbj17bW9kYWxJbnZlc3RpclN0YXRlfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiaW52ZXN0aXItZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiaW52ZXN0aXItZGlhbG9nLXRpdGxlXCI+SW5zY3JldmEtc2U8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibW9kYWwtZm9ybVwiIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci0wXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5vbWUgY29tcGxldG9cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdmdWxsX25hbWUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItMVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ2VtYWlsJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ3Bob25lJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTNcIlxyXG4gICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGlwbyBkZSBQZXNzb2FcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdFByb2ZpbGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBoYW5kbGVDaGFuZ2VTZWxlY3QoZSk7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ3BlcnNvbl90eXBlJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXBvUGVzc29hQXJyLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTRcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hlY2tlZE1vZGFsSW52ZXN0aXJRdWFsaWZpY2Fkb31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaGFuZGxlQ2hhbmdlQ2hlY2tib3goZSk7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC5jaGVja2VkLCAnaW52ZXN0aWRvcl9xdWFsaWZpY2FkbycpIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tlZE1vZGFsSW52ZXN0aXJRdWFsaWZpY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdDaGVja2JveCBNb2RhbCBJbnZlc3RpcicgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtb2RhbC1sYWJlbFwiIGh0bWxGb3I9XCJtb2RhbEZpZWxkSW52ZXN0aXItNFwiPlNvdSB1bSBpbnZlc3RpZG9yIHF1YWxpZmljYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTVcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hlY2tlZE1vZGFsSW52ZXN0aXJDb25jb3Jkb31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaGFuZGxlQ2hhbmdlQ2hlY2tib3goZSk7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC5jaGVja2VkLCAnY29uY29yZG9fdGVybW9zJykgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2VkTW9kYWxJbnZlc3RpckNvbmNvcmRvXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ0NoZWNrYm94IE1vZGFsIEludmVzdGlyJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1vZGFsLWxhYmVsXCIgaHRtbEZvcj1cIm1vZGFsRmllbGRJbnZlc3Rpci01XCI+Q29uY29yZG8gY29tIG9zIFRlcm1vcyBkbyBKdXNDcmVkaXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlID0+IHsgaGFuZGxlU3VibWl0KGAke0FQSX0vdXNlcmAsIGZvcm1WYWx1ZXMpIH19IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L0ZyYWdtZW50ID5cclxuXHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgIl0sInNvdXJjZVJvb3QiOiIifQ==