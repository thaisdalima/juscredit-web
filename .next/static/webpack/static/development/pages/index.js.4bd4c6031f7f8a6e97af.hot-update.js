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

var Index = function Index(props) {
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

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
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
    setOriginPath(window.location.origin);
  });

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
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "JusCredit - Home")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-2.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxWidth: '150px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("li", {
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
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-1.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 27
    }
  }, "Receba diretamente em sua JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
      lineNumber: 172,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-4.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx("li", {
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
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
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
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
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
    src: "/card-img-5.svg",
    alt: "Ilustra\xE7\xE3o do Card",
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
  }, "Seguran\xE7a"), __jsx("ul", {
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
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
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
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o \xE9 inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 27
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 243,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 257,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
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
      lineNumber: 287,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
      lineNumber: 316,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 340,
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
      lineNumber: 346,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
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
      lineNumber: 361,
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
      lineNumber: 368,
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
      lineNumber: 374,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
      lineNumber: 381,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 397,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 407,
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
      lineNumber: 413,
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
      lineNumber: 419,
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
      lineNumber: 425,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
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
      lineNumber: 441,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
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
      lineNumber: 452,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
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
      lineNumber: 468,
      columnNumber: 11
    }
  }, "Enviar"))));
};

_s(Index, "+jTLfkQOtta/oGKUoHcMNXyJnmI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjaGVja2VkTW9kYWxBbnRlY2lwZSIsImNoZWNrZWRNb2RhbEludmVzdGlyUXVhbGlmaWNhZG8iLCJjaGVja2VkTW9kYWxJbnZlc3RpckNvbmNvcmRvIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWUiLCJtb2RhbEluZGljYXJTdGF0ZSIsInNldEluZGljYXJPcGVuIiwibW9kYWxBbnRlY2lwYXJTdGF0ZSIsInNldEFudGVjaXBhck9wZW4iLCJtb2RhbEludmVzdGlyU3RhdGUiLCJzZXRJbnZlc3Rpck9wZW4iLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInNlbGVjdFByb2ZpbGUiLCJzZXRTZWxlY3RQcm9maWxlIiwib3JpZ2luUGF0aCIsInNldE9yaWdpblBhdGgiLCJheGlvcyIsInJlcXVpcmUiLCJ0aXBvUGVzc29hQXJyIiwidmFsdWUiLCJsYWJlbCIsImhhbmRsZU1vZGFsSW5kaWNhciIsImhhbmRsZU1vZGFsQW50ZWNpcGFyIiwiYWNjb3VudF90eXBlIiwiaGFuZGxlTW9kYWxJbnZlc3RpciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlUHJvZmlsZSIsIl9wcm9maWxlIiwiaGFuZGxlQ2hhbmdlU2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVDaGFuZ2VDaGVja2JveCIsIm5hbWUiLCJjaGVja2VkIiwiYXR1YWxpemFGb3JtVmFsdWVzIiwiZm9ybUl0ZW0iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImhhbmRsZVN1Ym1pdCIsInJlcVVSTCIsInJlcUJvZHkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImUiLCJtYXAiLCJvcHRpb24iLCJB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emNEOztHQUFNVCxLOztLQUFBQSxLO0FBMGNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNGJkNGM2MDMxZjdmOGE2ZTk3YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLy4uL2FwaSc7XHJcblxyXG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiOjotd2Via2l0PWRldmljZS13aWR0aFwiPjwvbWV0YT5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGNoZWNrZWRNb2RhbEFudGVjaXBlOiBmYWxzZSxcclxuICAgIGNoZWNrZWRNb2RhbEludmVzdGlyUXVhbGlmaWNhZG86IGZhbHNlLFxyXG4gICAgY2hlY2tlZE1vZGFsSW52ZXN0aXJDb25jb3JkbzogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgfSk7XHJcbiAgY29uc3QgW21vZGFsSW5kaWNhclN0YXRlLCBzZXRJbmRpY2FyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsQW50ZWNpcGFyU3RhdGUsIHNldEFudGVjaXBhck9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbEludmVzdGlyU3RhdGUsIHNldEludmVzdGlyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJjbGllbnRlXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RQcm9maWxlLCBzZXRTZWxlY3RQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbb3JpZ2luUGF0aCwgc2V0T3JpZ2luUGF0aF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbiAgY29uc3QgdGlwb1Blc3NvYUFyciA9IFtcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdmJyxcclxuICAgICAgbGFiZWw6ICdDUEYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdqJyxcclxuICAgICAgbGFiZWw6ICdDTlBKJyxcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2RhbEluZGljYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmRpY2FyT3Blbih0cnVlKTtcclxuICAgIHNldEZvcm1WYWx1ZSh7fSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxBbnRlY2lwYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRBbnRlY2lwYXJPcGVuKHRydWUpO1xyXG4gICAgc2V0Rm9ybVZhbHVlKHt9KTtcclxuICAgIHNldEZvcm1WYWx1ZSh7IC4uLmZvcm1WYWx1ZXMsIGFjY291bnRfdHlwZTogJ2MnIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsSW52ZXN0aXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnZlc3Rpck9wZW4odHJ1ZSk7XHJcbiAgICBzZXRGb3JtVmFsdWUoe30pO1xyXG4gICAgc2V0Rm9ybVZhbHVlKHsgLi4uZm9ybVZhbHVlcywgYWNjb3VudF90eXBlOiAnaScgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmRpY2FyT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBbnRlY2lwYXJPcGVuKGZhbHNlKTtcclxuICAgIHNldEludmVzdGlyT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZSA9IChfcHJvZmlsZSkgPT4ge1xyXG4gICAgc2V0UHJvZmlsZShfcHJvZmlsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlbGVjdFByb2ZpbGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDaGVja2JveCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR1YWxpemFGb3JtVmFsdWVzID0gKGV2ZW50LCBmb3JtSXRlbSkgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlKHsgLi4uZm9ybVZhbHVlcywgW2Zvcm1JdGVtXTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0T3JpZ2luUGF0aCh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHJlcVVSTCwgcmVxQm9keSkgPT4ge1xyXG5cclxuICAgIGF4aW9zLnBvc3QocmVxVVJMLCByZXFCb2R5KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkp1c0NyZWRpdCAtIEhvbWU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tcGFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC10ZXh0c1wiPlxyXG4gICAgICAgICAgICA8aDE+QW50ZWNpcGUgc2V1IDxiciAvPmNyw6lkaXRvIHRyYWJhbGhpc3RhPC9oMT5cclxuICAgICAgICAgICAgPGgyPlTDqm0gdW0gcHJvY2Vzc28gZ2FuaG8/IFJlY2ViYSBhZ29yYTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsQW50ZWNpcGFyKCl9IGNvbG9yPVwicHJpbWFyeVwiPlF1ZXJvIGFudGVjaXBhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWxJbnZlc3RpcigpfSBjb2xvcj1cInNlY29uZGFyeVwiPlF1ZXJvIGludmVzdGlyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY3Vyc29yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjY29uaGVjYS12YW50YWdlbnNcIiA+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hldnJvbi1kb3duLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbmhlw6dhIGFzIHZhbnRhZ2Vuczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb25oZWNhLXZhbnRhZ2Vuc1wiIGNsYXNzTmFtZT1cImFudGVjaXBhclwiPlxyXG4gICAgICAgICAge3Byb2ZpbGUgPT0gXCJjbGllbnRlXCIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC10d28tY29sdW1ucyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5NYWlzIHZhbG9yIHBhcmEgcXVlbSBpbnZlc3RlLjxiciAvPlLDoXBpZG8gcGFyYSBxdWVtIGFudGVjaXBhLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5TZXJ2acOnbyBkZSBhbnRlY2lwYcOnw6NvIGRpc3BvbsOtdmVsIHBhcmEgVHJhYmFsaGFkb3JlcyBlIEFkdm9nYWRvcy48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvZmlsZShcImNsaWVudGVcIil9IGNvbG9yPXtwcm9maWxlID09IFwiY2xpZW50ZVwiID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwifT5DbGllbnRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvZmlsZShcImludmVzdGlkb3JcIil9IGNvbG9yPXtwcm9maWxlICE9IFwiY2xpZW50ZVwiID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwifT5JbnZlc3RpZG9yPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLXNob3djYXNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJkLWltZy0yLnN2Z1wiIGFsdD1cIklsdXN0cmHDp8OjbyBkbyBDYXJkXCIgc3R5bGU9e3ttYXhXaWR0aDogJzE1MHB4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlByYXRpY2lkYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5Qcm9jZXNzbyBkZSBhbnRlY2lwYcOnw6NvIDEwMCUgZGlnaXRhbC48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+QW7DoWxpc2UgcsOhcGlkYSBlIHNlbSBjdXN0by48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcmQtaW1nLTEuc3ZnXCIgYWx0PVwiSWx1c3RyYcOnw6NvIGRvIENhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5BZ2lsaWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkxpcXVpZGV6IGltZWRpYXRhLCBuw6NvIGVzcGVyZSBtYWlzIHBhcmEgcmVjZWJlciBvIHNldSBkaXJlaXRvLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2FyZC1pbWctMy5zdmdcIiBhbHQ9XCJJbHVzdHJhw6fDo28gZG8gQ2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxpYmVyYcOnw6NvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5SZWNlYmEgZGlyZXRhbWVudGUgZW0gc3VhIEp1c0NyZWRpdC48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsQW50ZWNpcGFyKCl9IGNvbG9yPVwic2l4dHlcIj5RdWVybyBhbnRlY2lwYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtwcm9maWxlICE9IFwiY2xpZW50ZVwiICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtdHdvLWNvbHVtbnMgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+TWFpcyB2YWxvciBwYXJhIHF1ZW0gaW52ZXN0ZS48YnIgLz5Sw6FwaWRvIHBhcmEgcXVlbSBhbnRlY2lwYS48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+SW52ZXN0aW1lbnRvcyBlbSBjcsOpZGl0b3MganVkaWNpYWlzIGRlIGZvcm1hIHLDoXBpZGEgZSBkZXNjb21wbGljYWRhLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXIgc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9maWxlKFwiY2xpZW50ZVwiKX0gY29sb3I9e3Byb2ZpbGUgPT0gXCJjbGllbnRlXCIgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJ9PkNsaWVudGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9maWxlKFwiaW52ZXN0aWRvclwiKX0gY29sb3I9e3Byb2ZpbGUgIT0gXCJjbGllbnRlXCIgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJ9PkludmVzdGlkb3I8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHMtc2hvd2Nhc2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcmQtaW1nLTQuc3ZnXCIgYWx0PVwiSWx1c3RyYcOnw6NvIGRvIENhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZW50YWJpbGlkYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5NYWlvciByZXRvcm5vIHF1ZSBpbnZlc3RpbWVudG9zIHRyYWRpY2lvbmFpcy48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+QmFpeG8gdmFsb3IgaW5pY2lhbCBkZSBpbnZlc3RpbWVudG8uPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkRpc3BvbsOtdmVsIHBhcmEgUEYgZSBQSi48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NhcmQtaW1nLTUuc3ZnXCIgYWx0PVwiSWx1c3RyYcOnw6NvIGRvIENhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWd1cmFuw6dhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5Nb2RlbG8gcHJvcHJpZXTDoXJpbyBkZSBhbsOhbGlzZS48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+RW1wcmVzYXMgc2F1ZMOhdmVpcywgc2VtIG5lZ2F0aXZhw6fDo28gw6kgaW5jbHVzYXMgbm8gYmFuY28gbmFjaW9uYWwgZGUgZGV2ZWRvcmVzIHRyYWJhbGhpc3Rhcy48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+UGFyY2Vpcm8gZGUgZXNjcml0w7NyaW8gZXNwZWNpYWxpemFkbyBlbSBkaXJlaXRvIGRvIHRyYWJhbGhvLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2FyZC1pbWctMy5zdmdcIiBhbHQ9XCJJbHVzdHJhw6fDo28gZG8gQ2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlJlY2ViaW1lbnRvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5SZWNlYmEgb3MgdmFsb3JlcyBkb3MgY3LDqWRpdG9zIGp1ZGljaWFpcyBhZHF1aXJpZG9zIGRpcmV0YW1lbnRlIGVtIHN1YSBjb250YSBKdXNDcmVkaXQuPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbEludmVzdGlyKCl9IGNvbG9yPVwic2l4dHlcIj5RdWVybyBpbnZlc3RpcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbW8tZnVuY2lvbmFcIiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT5Db21vIGZ1bmNpb25hIGEgcGxhdGFmb3JtYT88L2gxPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIENvbnRlIGNvbSB0b2RhIGEgc2VndXJhbsOnYSwgYWdpbGlkYWRlIGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBwcmF0aWNpZGFkZSBuYSBsaWJlcmHDp8OjbyBkbyBzZXUgcHJvY2Vzc28gZ2FuaG9cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1ob3d0by13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gc3JjPVwiL2NhcmQtaW1nLTYuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND5DbGllbnRlIHNvbGljaXRhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1udW1iZXJcIj4xPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIENsaWVudGUgc29saWNpdGEgYW50ZWNpcGHDp8OjbyBkbyBjcsOpZGl0byB0cmFiYWxoaXN0YSBuYSBwbGF0YWZvcm1hLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCI3MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBzcmM9XCIvY2FyZC1pbWctNy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkFuw6FsaXNlIGF2YW7Dp2FkYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+MjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBbsOhbGlzZSBjb20gbW9kZWxvIHByb3ByaWV0w6FyaW8gZGUgY3LDqWRpdG8sIHNlIGFwcm92YWRvIMOpIGRpc3BvbmliaWxpemFkbyBhbyBpbnZlc3RpZG9yZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCI3MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fSBzcmM9XCIvY2FyZC1pbWctOC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkludmVzdGlkb3JlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+MzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBPcyBpbnZlc3RpZG9yZXMgZXNjb2xoZW0gcXVhbnRvIGUgZW0gcXVhaXMgY3LDqWRpdG9zIHRyYWJhbGhpc3RhcyBxdWVyZW0gaW52ZXN0aXIuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IHNyYz1cIi9jYXJkLWltZy05LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVjZWJhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1udW1iZXJcIj40PC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIE8gdHJhYmFsaGFkb3IgcmVjZWJlIGEgYW50ZWNpcGHDp8OjbyBlIG9zIGludmVzdGlkb3JlcyBzZXVzIHBhZ2FtZW50b3MuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInBhcmNlaXJvcy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJpbmRpY2FyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFNlamEgdW0gcGFyY2Vpcm8gSnVzQ3JlZGl0PC9oMT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SW5kaXF1ZSBjcsOpZGl0b3MgdHJhYmFsaGlzdGFzIGVsZWfDrXZlaXMgZSBnYW5oZSBjb25vc2NvLjwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTW9kYWxJbmRpY2FyfT5JbmRpY2FyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPERpYWxvZyBvcGVuPXttb2RhbEluZGljYXJTdGF0ZX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInBhcmNlaXJvLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInBhcmNlaXJvLWRpYWxvZy10aXRsZVwiPkluc2NyZXZhLXNlPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgVm9jw6ogcmVjZWJlcsOhIHVtIGVtYWlsIHBhcmEgY3JpYcOnw6NvIGRlIHNlbmhhIGUgY29tcGxldGFyIHNldSBwZXJmaWxcclxuICAgICAgICAgICAgSXJlbW9zIGVudHJhciBlbSBjb250YXRvIGNvbSB2b2PDqiBwYXJhIGNvbmZpcm1hciBzdWFzIGluZm9ybWFjzKdvzINlcy5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgIDxEaWFsb2cgb3Blbj17bW9kYWxBbnRlY2lwYXJTdGF0ZX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImFudGVjaXBhci1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbnRlY2lwYXItZGlhbG9nLXRpdGxlXCI+QW50ZWNpcGUgbyBzZXUgY3LDqWRpdG88L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibW9kYWwtZm9ybVwiIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItMFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOb21lIGNvbXBsZXRvXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAnZnVsbF9uYW1lJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci0xXCJcclxuICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUgUGVzc29hXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RQcm9maWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaGFuZGxlQ2hhbmdlU2VsZWN0KGUpOyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdwZXJzb25fdHlwZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGlwb1Blc3NvYUFyci5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkbyBwcm9jZXNzb1wiXHJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIkV4ZW1wbG86IDAwMDAwMjAtMzcuMjAxMC41LjE1LjAxMThcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICd0aXRsZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItM1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ2VtYWlsJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci00XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNlbHVsYXJcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdwaG9uZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci01XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoZWNrZWRNb2RhbEFudGVjaXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBoYW5kbGVDaGFuZ2VDaGVja2JveChlKTsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LmNoZWNrZWQsICdjb25jb3Jkb190ZXJtb3MnKSB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrZWRNb2RhbEFudGVjaXBlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ0NoZWNrYm94IE1vZGFsIEFudGVjaXBlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1vZGFsLWxhYmVsXCIgaHRtbEZvcj1cIm1vZGFsRmllbGRBbnRlY2lwYXItNVwiPkNvbmNvcmRvIGNvbSBvcyBUZXJtb3MgZG8gSnVzQ3JlZGl0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiB7IGhhbmRsZVN1Ym1pdChgJHtBUEl9L3VzZXJgLCBmb3JtVmFsdWVzKSB9fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgPERpYWxvZyBvcGVuPXttb2RhbEludmVzdGlyU3RhdGV9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJpbnZlc3Rpci1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJpbnZlc3Rpci1kaWFsb2ctdGl0bGVcIj5JbnNjcmV2YS1zZTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtb2RhbC1mb3JtXCIgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTBcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBjb21wbGV0b1wiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ2Z1bGxfbmFtZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci0xXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAnZW1haWwnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDZWx1bGFyXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAncGhvbmUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItM1wiXHJcbiAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUaXBvIGRlIFBlc3NvYVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0UHJvZmlsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGhhbmRsZUNoYW5nZVNlbGVjdChlKTsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAncGVyc29uX3R5cGUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpcG9QZXNzb2FBcnIubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItNFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0ZS5jaGVja2VkTW9kYWxJbnZlc3RpclF1YWxpZmljYWRvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBoYW5kbGVDaGFuZ2VDaGVja2JveChlKTsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LmNoZWNrZWQsICdpbnZlc3RpZG9yX3F1YWxpZmljYWRvJykgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2VkTW9kYWxJbnZlc3RpclF1YWxpZmljYWRvXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ0NoZWNrYm94IE1vZGFsIEludmVzdGlyJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1vZGFsLWxhYmVsXCIgaHRtbEZvcj1cIm1vZGFsRmllbGRJbnZlc3Rpci00XCI+U291IHVtIGludmVzdGlkb3IgcXVhbGlmaWNhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItNVwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzdGF0ZS5jaGVja2VkTW9kYWxJbnZlc3RpckNvbmNvcmRvfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBoYW5kbGVDaGFuZ2VDaGVja2JveChlKTsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LmNoZWNrZWQsICdjb25jb3Jkb190ZXJtb3MnKSB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrZWRNb2RhbEludmVzdGlyQ29uY29yZG9cIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnQ2hlY2tib3ggTW9kYWwgSW52ZXN0aXInIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibW9kYWwtbGFiZWxcIiBodG1sRm9yPVwibW9kYWxGaWVsZEludmVzdGlyLTVcIj5Db25jb3JkbyBjb20gb3MgVGVybW9zIGRvIEp1c0NyZWRpdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2UgPT4geyBoYW5kbGVTdWJtaXQoYCR7QVBJfS91c2VyYCwgZm9ybVZhbHVlcykgfX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIEVudmlhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvRnJhZ21lbnQgPlxyXG5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyAiXSwic291cmNlUm9vdCI6IiJ9