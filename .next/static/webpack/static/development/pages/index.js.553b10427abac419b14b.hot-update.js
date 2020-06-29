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
  };

  var handleModalInvestir = function handleModalInvestir() {
    setInvestirOpen(true);
    setFormValue({});
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
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "JusCredit - Home")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-2.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 27
    }
  }, "Receba diretamente em sua JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
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
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-4.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
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
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-5.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 27
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o \xE9 inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
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
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./illustration-3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
      lineNumber: 220,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 240,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
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
      lineNumber: 254,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 270,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 284,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 313,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
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
      lineNumber: 337,
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
      lineNumber: 343,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
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
      lineNumber: 358,
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
      lineNumber: 365,
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
      lineNumber: 371,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 378,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
      lineNumber: 394,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 9
    }
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
      lineNumber: 404,
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
      lineNumber: 410,
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
      lineNumber: 416,
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
      lineNumber: 422,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
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
      lineNumber: 438,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
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
      lineNumber: 449,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit")))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
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
      lineNumber: 465,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZE1vZGFsQW50ZWNpcGUiLCJjaGVja2VkTW9kYWxJbnZlc3RpclF1YWxpZmljYWRvIiwiY2hlY2tlZE1vZGFsSW52ZXN0aXJDb25jb3JkbyIsInN0YXRlIiwic2V0U3RhdGUiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlIiwibW9kYWxJbmRpY2FyU3RhdGUiLCJzZXRJbmRpY2FyT3BlbiIsIm1vZGFsQW50ZWNpcGFyU3RhdGUiLCJzZXRBbnRlY2lwYXJPcGVuIiwibW9kYWxJbnZlc3RpclN0YXRlIiwic2V0SW52ZXN0aXJPcGVuIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJzZWxlY3RQcm9maWxlIiwic2V0U2VsZWN0UHJvZmlsZSIsImF4aW9zIiwicmVxdWlyZSIsInRpcG9QZXNzb2FBcnIiLCJ2YWx1ZSIsImxhYmVsIiwiaGFuZGxlTW9kYWxJbmRpY2FyIiwiaGFuZGxlTW9kYWxBbnRlY2lwYXIiLCJoYW5kbGVNb2RhbEludmVzdGlyIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVQcm9maWxlIiwiX3Byb2ZpbGUiLCJoYW5kbGVDaGFuZ2VTZWxlY3QiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoYW5nZUNoZWNrYm94IiwibmFtZSIsImNoZWNrZWQiLCJhdHVhbGl6YUZvcm1WYWx1ZXMiLCJmb3JtSXRlbSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJyZXFVUkwiLCJyZXFCb2R5IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwibWFyZ2luIiwibWF4V2lkdGgiLCJtYXJnaW5SaWdodCIsImUiLCJtYXAiLCJvcHRpb24iLCJBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQUosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQUosQ0FIRixDQUhGLENBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHNCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUFKLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtHQUFKLENBRkYs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QUFBO0FBQUE7QUFBQTtBQUFBLDJDQVRGLENBN0NGLENBREYsQ0FGRixFQTZERSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQVEsV0FBTyxFQUFFUixXQUFqQjtBQUE4QixTQUFLLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUlFLE1BQUMsaUVBQUQ7QUFBUSxXQUFPLEVBQUUsaUJBQUF3QixDQUFDLEVBQUk7QUFBRVYsa0JBQVksV0FBSWEsNkNBQUosWUFBZ0IvQyxVQUFoQixDQUFaO0FBQXlDLEtBQWpFO0FBQW1FLFNBQUssRUFBQyxTQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0E3REYsQ0E3U0YsQ0FERjtBQXVYRCxDQXRjRDs7R0FBTVIsSzs7S0FBQUEsSztBQXVjU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU1M2IxMDQyN2FiYWM0MTliMTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi8uLi9hcGknO1xyXG5cclxuPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIjo6LXdlYmtpdD1kZXZpY2Utd2lkdGhcIj48L21ldGE+XHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgY2hlY2tlZE1vZGFsQW50ZWNpcGU6IGZhbHNlLFxyXG4gICAgY2hlY2tlZE1vZGFsSW52ZXN0aXJRdWFsaWZpY2FkbzogZmFsc2UsXHJcbiAgICBjaGVja2VkTW9kYWxJbnZlc3RpckNvbmNvcmRvOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICB9KTtcclxuICBjb25zdCBbbW9kYWxJbmRpY2FyU3RhdGUsIHNldEluZGljYXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxBbnRlY2lwYXJTdGF0ZSwgc2V0QW50ZWNpcGFyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsSW52ZXN0aXJTdGF0ZSwgc2V0SW52ZXN0aXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcImNsaWVudGVcIik7XHJcbiAgY29uc3QgW3NlbGVjdFByb2ZpbGUsIHNldFNlbGVjdFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcblxyXG4gIGNvbnN0IHRpcG9QZXNzb2FBcnIgPSBbXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnZicsXHJcbiAgICAgIGxhYmVsOiAnQ1BGJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnaicsXHJcbiAgICAgIGxhYmVsOiAnQ05QSicsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxJbmRpY2FyID0gKCkgPT4ge1xyXG4gICAgc2V0SW5kaWNhck9wZW4odHJ1ZSk7XHJcbiAgICBzZXRGb3JtVmFsdWUoe30pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vZGFsQW50ZWNpcGFyID0gKCkgPT4ge1xyXG4gICAgc2V0QW50ZWNpcGFyT3Blbih0cnVlKTtcclxuICAgIHNldEZvcm1WYWx1ZSh7fSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxJbnZlc3RpciA9ICgpID0+IHtcclxuICAgIHNldEludmVzdGlyT3Blbih0cnVlKTtcclxuICAgIHNldEZvcm1WYWx1ZSh7fSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmRpY2FyT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBbnRlY2lwYXJPcGVuKGZhbHNlKTtcclxuICAgIHNldEludmVzdGlyT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZSA9IChfcHJvZmlsZSkgPT4ge1xyXG4gICAgc2V0UHJvZmlsZShfcHJvZmlsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlbGVjdFByb2ZpbGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDaGVja2JveCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXR1YWxpemFGb3JtVmFsdWVzID0gKGV2ZW50LCBmb3JtSXRlbSkgPT4ge1xyXG4gICAgc2V0Rm9ybVZhbHVlKHsgLi4uZm9ybVZhbHVlcywgW2Zvcm1JdGVtXTogZXZlbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZm9ybVZhbHVlcyk7XHJcbiAgfSwgW2Zvcm1WYWx1ZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHJlcVVSTCwgcmVxQm9keSkgPT4ge1xyXG4gICAgXHJcbiAgICBheGlvcy5wb3N0KHJlcVVSTCwgcmVxQm9keSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5KdXNDcmVkaXQgLSBIb21lPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLXBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtdGV4dHNcIj5cclxuICAgICAgICAgICAgPGgxPkFudGVjaXBlIHNldSA8YnIgLz5jcsOpZGl0byB0cmFiYWxoaXN0YTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Uw6ptIHVtIHByb2Nlc3NvIGdhbmhvPyBSZWNlYmEgYWdvcmE8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbEFudGVjaXBhcigpfSBjb2xvcj1cInByaW1hcnlcIj5RdWVybyBhbnRlY2lwYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsSW52ZXN0aXIoKX0gY29sb3I9XCJzZWNvbmRhcnlcIj5RdWVybyBpbnZlc3RpcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rIGN1cnNvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI2NvbmhlY2EtdmFudGFnZW5zXCIgPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NoZXZyb24tZG93bi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Db25oZcOnYSBhcyB2YW50YWdlbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiY29uaGVjYS12YW50YWdlbnNcIiBjbGFzc05hbWU9XCJhbnRlY2lwYXJcIj5cclxuICAgICAgICAgIHtwcm9maWxlID09IFwiY2xpZW50ZVwiICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtdHdvLWNvbHVtbnMgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+TWFpcyB2YWxvciBwYXJhIHF1ZW0gaW52ZXN0ZS48YnIgLz5Sw6FwaWRvIHBhcmEgcXVlbSBhbnRlY2lwYS48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+U2VydmnDp28gZGUgYW50ZWNpcGHDp8OjbyBkaXNwb27DrXZlbCBwYXJhIFRyYWJhbGhhZG9yZXMgZSBBZHZvZ2Fkb3MuPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLWNvbnRhaW5lciBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2ZpbGUoXCJjbGllbnRlXCIpfSBjb2xvcj17cHJvZmlsZSA9PSBcImNsaWVudGVcIiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIn0+Q2xpZW50ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2ZpbGUoXCJpbnZlc3RpZG9yXCIpfSBjb2xvcj17cHJvZmlsZSAhPSBcImNsaWVudGVcIiA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIn0+SW52ZXN0aWRvcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1zaG93Y2FzZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi0yLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlByYXRpY2lkYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5Qcm9jZXNzbyBkZSBhbnRlY2lwYcOnw6NvIDEwMCUgZGlnaXRhbC48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+QW7DoWxpc2UgcsOhcGlkYSBlIHNlbSBjdXN0by48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbGx1c3RyYXRpb24tMS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5BZ2lsaWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkxpcXVpZGV6IGltZWRpYXRhLCBuw6NvIGVzcGVyZSBtYWlzIHBhcmEgcmVjZWJlciBvIHNldSBkaXJlaXRvLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi0zLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxpYmVyYcOnw6NvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5SZWNlYmEgZGlyZXRhbWVudGUgZW0gc3VhIEp1c0NyZWRpdC48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsQW50ZWNpcGFyKCl9IGNvbG9yPVwic2l4dHlcIj5RdWVybyBhbnRlY2lwYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtwcm9maWxlICE9IFwiY2xpZW50ZVwiICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtdHdvLWNvbHVtbnMgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+TWFpcyB2YWxvciBwYXJhIHF1ZW0gaW52ZXN0ZS48YnIgLz5Sw6FwaWRvIHBhcmEgcXVlbSBhbnRlY2lwYS48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+SW52ZXN0aW1lbnRvcyBlbSBjcsOpZGl0b3MganVkaWNpYWlzIGRlIGZvcm1hIHLDoXBpZGEgZSBkZXNjb21wbGljYWRhLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXIgc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9maWxlKFwiY2xpZW50ZVwiKX0gY29sb3I9e3Byb2ZpbGUgPT0gXCJjbGllbnRlXCIgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJ9PkNsaWVudGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9maWxlKFwiaW52ZXN0aWRvclwiKX0gY29sb3I9e3Byb2ZpbGUgIT0gXCJjbGllbnRlXCIgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJ9PkludmVzdGlkb3I8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHMtc2hvd2Nhc2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbGx1c3RyYXRpb24tNC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZW50YWJpbGlkYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5NYWlvciByZXRvcm5vIHF1ZSBpbnZlc3RpbWVudG9zIHRyYWRpY2lvbmFpcy48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+QmFpeG8gdmFsb3IgaW5pY2lhbCBkZSBpbnZlc3RpbWVudG8uPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkRpc3BvbsOtdmVsIHBhcmEgUEYgZSBQSi48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbGx1c3RyYXRpb24tNS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWd1cmFuw6dhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5Nb2RlbG8gcHJvcHJpZXTDoXJpbyBkZSBhbsOhbGlzZS48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+RW1wcmVzYXMgc2F1ZMOhdmVpcywgc2VtIG5lZ2F0aXZhw6fDo28gw6kgaW5jbHVzYXMgbm8gYmFuY28gbmFjaW9uYWwgZGUgZGV2ZWRvcmVzIHRyYWJhbGhpc3Rhcy48L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48cCBzdHlsZT17eyBtYXJnaW46IDAgfX0+UGFyY2Vpcm8gZGUgZXNjcml0w7NyaW8gZXNwZWNpYWxpemFkbyBlbSBkaXJlaXRvIGRvIHRyYWJhbGhvLjwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2lsbHVzdHJhdGlvbi0zLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlJlY2ViaW1lbnRvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxwIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5SZWNlYmEgb3MgdmFsb3JlcyBkb3MgY3LDqWRpdG9zIGp1ZGljaWFpcyBhZHF1aXJpZG9zIGRpcmV0YW1lbnRlIGVtIHN1YSBjb250YSBKdXNDcmVkaXQuPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbEludmVzdGlyKCl9IGNvbG9yPVwic2l4dHlcIj5RdWVybyBpbnZlc3RpcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbW8tZnVuY2lvbmFcIiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT5Db21vIGZ1bmNpb25hIGEgcGxhdGFmb3JtYT88L2gxPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIENvbnRlIGNvbSB0b2RhIGEgc2VndXJhbsOnYSwgYWdpbGlkYWRlIGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBwcmF0aWNpZGFkZSBuYSBsaWJlcmHDp8OjbyBkbyBzZXUgcHJvY2Vzc28gZ2FuaG9cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1ob3d0by13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gc3JjPVwiLi9pbGx1c3RyYXRpb24tNi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkNsaWVudGUgc29saWNpdGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLW51bWJlclwiPjE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpZW50ZSBzb2xpY2l0YSBhbnRlY2lwYcOnw6NvIGRvIGNyw6lkaXRvIHRyYWJhbGhpc3RhIG5hIHBsYXRhZm9ybWEuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IHNyYz1cIi4vaWxsdXN0cmF0aW9uLTcuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND5BbsOhbGlzZSBhdmFuw6dhZGE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLW51bWJlclwiPjI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQW7DoWxpc2UgY29tIG1vZGVsbyBwcm9wcmlldMOhcmlvIGRlIGNyw6lkaXRvLCBzZSBhcHJvdmFkbyDDqSBkaXNwb25pYmlsaXphZG8gYW8gaW52ZXN0aWRvcmVzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHMtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gc3JjPVwiLi9pbGx1c3RyYXRpb24tOC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PkludmVzdGlkb3JlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtbnVtYmVyXCI+MzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBPcyBpbnZlc3RpZG9yZXMgZXNjb2xoZW0gcXVhbnRvIGUgZW0gcXVhaXMgY3LDqWRpdG9zIHRyYWJhbGhpc3RhcyBxdWVyZW0gaW52ZXN0aXIuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IHNyYz1cIi4vaWxsdXN0cmF0aW9uLTkuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND5SZWNlYmE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLW51bWJlclwiPjQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTyB0cmFiYWxoYWRvciByZWNlYmUgYSBhbnRlY2lwYcOnw6NvIGUgb3MgaW52ZXN0aWRvcmVzIHNldXMgcGFnYW1lbnRvcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicGFyY2Vpcm9zLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImluZGljYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gU2VqYSB1bSBwYXJjZWlybyBKdXNDcmVkaXQ8L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JbmRpcXVlIGNyw6lkaXRvcyB0cmFiYWxoaXN0YXMgZWxlZ8OtdmVpcyBlIGdhbmhlIGNvbm9zY28uPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbEluZGljYXJ9PkluZGljYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8RGlhbG9nIG9wZW49e21vZGFsSW5kaWNhclN0YXRlfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwicGFyY2Vpcm8tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwicGFyY2Vpcm8tZGlhbG9nLXRpdGxlXCI+SW5zY3JldmEtc2U8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICBWb2PDqiByZWNlYmVyw6EgdW0gZW1haWwgcGFyYSBjcmlhw6fDo28gZGUgc2VuaGEgZSBjb21wbGV0YXIgc2V1IHBlcmZpbFxyXG4gICAgICAgICAgICBJcmVtb3MgZW50cmFyIGVtIGNvbnRhdG8gY29tIHZvY8OqIHBhcmEgY29uZmlybWFyIHN1YXMgaW5mb3JtYWPMp2/Mg2VzLlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBAXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG5cclxuICAgICAgPERpYWxvZyBvcGVuPXttb2RhbEFudGVjaXBhclN0YXRlfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiYW50ZWNpcGFyLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFudGVjaXBhci1kaWFsb2ctdGl0bGVcIj5BbnRlY2lwZSBvIHNldSBjcsOpZGl0bzwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtb2RhbC1mb3JtXCIgbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci0wXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5vbWUgY29tcGxldG9cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdmdWxsX25hbWUnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTFcIlxyXG4gICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGlwbyBkZSBQZXNzb2FcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdFByb2ZpbGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBoYW5kbGVDaGFuZ2VTZWxlY3QoZSk7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ3BlcnNvbl90eXBlJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXBvUGVzc29hQXJyLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRBbnRlY2lwYXItMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRvIHByb2Nlc3NvXCJcclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiRXhlbXBsbzogMDAwMDAyMC0zNy4yMDEwLjUuMTUuMDExOFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ3RpdGxlJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEFudGVjaXBhci0zXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAnZW1haWwnKSB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGF0dWFsaXphRm9ybVZhbHVlcyhlLnRhcmdldC52YWx1ZSwgJ3Bob25lJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkQW50ZWNpcGFyLTVcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUuY2hlY2tlZE1vZGFsQW50ZWNpcGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGhhbmRsZUNoYW5nZUNoZWNrYm94KGUpOyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQuY2hlY2tlZCwgJ2NvbmNvcmRvX3Rlcm1vcycpIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tlZE1vZGFsQW50ZWNpcGVcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnQ2hlY2tib3ggTW9kYWwgQW50ZWNpcGUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibW9kYWwtbGFiZWxcIiBodG1sRm9yPVwibW9kYWxGaWVsZEFudGVjaXBhci01XCI+Q29uY29yZG8gY29tIG9zIFRlcm1vcyBkbyBKdXNDcmVkaXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlID0+IHsgaGFuZGxlU3VibWl0KGAke0FQSX0vdXNlcmAsIGZvcm1WYWx1ZXMpIH19IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICA8RGlhbG9nIG9wZW49e21vZGFsSW52ZXN0aXJTdGF0ZX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImludmVzdGlyLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImludmVzdGlyLWRpYWxvZy10aXRsZVwiPkluc2NyZXZhLXNlPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1vZGFsLWZvcm1cIiBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtb2RhbEZpZWxkSW52ZXN0aXItMFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOb21lIGNvbXBsZXRvXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgYXR1YWxpemFGb3JtVmFsdWVzKGUudGFyZ2V0LnZhbHVlLCAnZnVsbF9uYW1lJykgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGggLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwibW9kYWxGaWVsZEludmVzdGlyLTFcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdlbWFpbCcpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci0yXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNlbHVsYXJcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdwaG9uZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci0zXCJcclxuICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUgUGVzc29hXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RQcm9maWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaGFuZGxlQ2hhbmdlU2VsZWN0KGUpOyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQudmFsdWUsICdwZXJzb25fdHlwZScpIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGlwb1Blc3NvYUFyci5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci00XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoZWNrZWRNb2RhbEludmVzdGlyUXVhbGlmaWNhZG99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGhhbmRsZUNoYW5nZUNoZWNrYm94KGUpOyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQuY2hlY2tlZCwgJ2ludmVzdGlkb3JfcXVhbGlmaWNhZG8nKSB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrZWRNb2RhbEludmVzdGlyUXVhbGlmaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnQ2hlY2tib3ggTW9kYWwgSW52ZXN0aXInIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibW9kYWwtbGFiZWxcIiBodG1sRm9yPVwibW9kYWxGaWVsZEludmVzdGlyLTRcIj5Tb3UgdW0gaW52ZXN0aWRvciBxdWFsaWZpY2FkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBpZD1cIm1vZGFsRmllbGRJbnZlc3Rpci01XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlLmNoZWNrZWRNb2RhbEludmVzdGlyQ29uY29yZG99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGhhbmRsZUNoYW5nZUNoZWNrYm94KGUpOyBhdHVhbGl6YUZvcm1WYWx1ZXMoZS50YXJnZXQuY2hlY2tlZCwgJ2NvbmNvcmRvX3Rlcm1vcycpIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tlZE1vZGFsSW52ZXN0aXJDb25jb3Jkb1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdDaGVja2JveCBNb2RhbCBJbnZlc3RpcicgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtb2RhbC1sYWJlbFwiIGh0bWxGb3I9XCJtb2RhbEZpZWxkSW52ZXN0aXItNVwiPkNvbmNvcmRvIGNvbSBvcyBUZXJtb3MgZG8gSnVzQ3JlZGl0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiB7IGhhbmRsZVN1Ym1pdChgJHtBUEl9L3VzZXJgLCBmb3JtVmFsdWVzKSB9fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgRW52aWFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9GcmFnbWVudCA+XHJcblxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7ICJdLCJzb3VyY2VSb290IjoiIn0=