webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../api */ "./api.js");



var _jsxFileName = "E:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















__jsx("meta", {
  name: "viewport",
  content: "::-webkit=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 1
  }
});

var Index = function Index(props) {
  var INITIAL_FORM = {
    full_name: '',
    account_type: '',
    person_type: '',
    number_proccess: '',
    email: '',
    phone: '',
    concordo_termos: false,
    investidor_qualificado: null
  };
  var INITIAL_FORM_PARCEIRO = {
    full_name: '',
    email: '',
    assunto: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    modalEnviadoMsg: '',
    modalErroMsg: ''
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // checkedModalAntecipe: false,
  //   checkedModalInvestirQualificado: false,
  //   checkedModalInvestirConcordo: false,


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      checkedModalAntecipe = _React$useState4[0],
      setCheckMdlAntecipe = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      checkedModalInvestirQualificado = _React$useState6[0],
      setCheckMdlInvestirQualificado = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      checkedModalInvestirConcordo = _React$useState8[0],
      setCheckMdlInvestirConcordo = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_FORM),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      formValues = _React$useState10[0],
      setFormValue = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_FORM_PARCEIRO),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      parceiroValues = _React$useState12[0],
      setParceiroValue = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      modalIndicarState = _React$useState14[0],
      setIndicarOpen = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      modalAnteciparState = _React$useState16[0],
      setAnteciparOpen = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState17, 2),
      modalInvestirState = _React$useState18[0],
      setInvestirOpen = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState19, 2),
      modalEnviado = _React$useState20[0],
      setFeedbackEnviado = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState21, 2),
      modalErro = _React$useState22[0],
      setFeedbackErro = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("cliente"),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState23, 2),
      profile = _React$useState24[0],
      setProfile = _React$useState24[1];

  var _React$useState25 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState26 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState25, 2),
      selectProfile = _React$useState26[0],
      setSelectProfile = _React$useState26[1];

  var _React$useState27 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState28 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState27, 2),
      originPath = _React$useState28[0],
      setOriginPath = _React$useState28[1];

  var _React$useState29 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState30 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState29, 2),
      isLoadingImgs = _React$useState30[0],
      setLoadingImgs = _React$useState30[1];

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  var tipoPessoaArr = [{
    value: 'f',
    label: 'Pessoa Física'
  }, {
    value: 'j',
    label: 'Pessoa Jurídica'
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
    setCheckMdlAntecipe(false);
    setCheckMdlInvestirQualificado(false);
    setCheckMdlInvestirConcordo(false);
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
    setFeedbackEnviado(false);
    setFeedbackErro(false);
    setFormValue(_objectSpread({}, formValues, {
      full_name: '',
      account_type: '',
      person_type: '',
      number_proccess: '',
      email: '',
      phone: '',
      concordo_termos: false,
      investidor_qualificado: false
    }));
  };

  var handleProfile = function handleProfile(_profile) {
    setProfile(_profile);
  };

  var handleChangeSelect = function handleChangeSelect(event) {
    setSelectProfile(event.target.value);
  };

  var handleChangeCheckbox = function handleChangeCheckbox(event) {
    if (event.target.id === 'modalFieldAntecipar-5') {
      setCheckMdlAntecipe(event.target.checked);
    }

    if (event.target.id === 'modalFieldInvestir-4') {
      setCheckMdlInvestirQualificado(event.target.checked);
    }

    if (event.target.id === 'modalFieldInvestir-5') {
      setCheckMdlInvestirConcordo(event.target.checked);
    }
  };

  var atualizaFormValues = function atualizaFormValues(event) {
    if (event.target.type == "checkbox") {
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.checked)));
    } else {
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
    }

    console.log(formValues);
  };

  var getParceiroValue = function getParceiroValue(event, formItem) {
    setParceiroValue(_objectSpread({}, parceiroValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formItem, event)));
  };

  var isEnabled = function isEnabled() {
    for (var key in formValues) {
      if (formValues["account_type"] !== "i") {
        formValues["investidor_qualificado"] = null;
      }

      if (formValues["account_type"] !== "c") {
        formValues["number_proccess"] = null;
      }

      if (formValues[key] != "") {} else {
        return true;
      }
    }
  };

  var isEnabledParceiro = function isEnabledParceiro() {
    for (var key in parceiroValues) {
      if (parceiroValues[key] != "") {} else {
        return true;
      }
    }
  };

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Seu cadastro foi iniciado, verique seu e-mail para continuar (se não achar olhe a pasta de Spam)."
      }));
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      setState(_objectSpread({}, state, {
        modalErroMsg: "Houve um problema, tente novamente mais tarde."
      }));
      handleClose();
      setFeedbackErro(true);
    });
  };

  var handleSubmitParceiro = function handleSubmitParceiro(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Obrigado por se interessar em ser nosso parceiro! Entraremos em contato em breve"
      }));
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Houve um problema, tente novamente mais tarde."
      }));
      handleClose();
      setFeedbackErro(true);
    });
  };

  var cacheImages = function cacheImages(srcArray) {
    var body = document.querySelector('body');
    body.classList.add('no-scroll');
    srcArray.forEach(function (src) {
      new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;

        img.onload = function () {
          resolve();
        };

        img.onerror = function () {
          reject();
        };
      });
    });
    setTimeout(function () {
      body.classList.remove('no-scroll');
      setLoadingImgs(false);
    }, 2500);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOriginPath(window.location.origin);
    var imgs = ['/lawyer.jpg', '/img-abre-site.svg', '/Logo.png', '/logo.svg', '/android-chrome-192x192.png', '/android-chrome-512x512.png', '/loading.svg', '/loading2.svg', '/card-img-1.svg', '/card-img-2.svg', '/card-img-3.svg', '/card-img-4.svg', '/card-img-5.svg', '/card-img-6.svg', '/card-img-7.svg', '/card-img-8.svg', '/card-img-9.svg', '/facebook_icon.png', '/anteceba.svg', '/ic-carta.svg', '/ic-facebook.svg', '/ic-instagram.svg', '/ic-linkedin.svg'];
    cacheImages(imgs);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, "JusCredit")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora!"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 15
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 294,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
      lineNumber: 304,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
      lineNumber: 313,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 27
    }
  }, "Receba diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 342,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 353,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o e inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 27
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
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
      lineNumber: 364,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 15
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 61
    }
  }), "se aprovado \xE9 disponibilizado aos investidores."))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
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
      lineNumber: 393,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 407,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
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
      lineNumber: 423,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
      lineNumber: 437,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx("div", {
    className: "backdrop-loading ".concat(isLoadingImgs ? '' : 'hidden'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "backdrop-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/logo.svg",
    className: "header-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 11
    }
  }), __jsx("img", {
    height: "32",
    width: "32",
    src: "/loading2.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 11
    }
  }), __jsx("h4", {
    className: "backdrop-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 11
    }
  }, "Carregando..."))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 9
    }
  }, "Seja parceiro!"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    autoFocus: true,
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldIndicar-1",
    label: "Assunto",
    variant: "outlined",
    name: "assunto",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'assunto');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldIndicar-2",
    label: "Email",
    type: "mail",
    variant: "outlined",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabledParceiro(),
    onClick: function onClick(e) {
      handleSubmitParceiro("https://api-dot-juscredit-hml.ue.r.appspot.com/api/v1/sendmailpartner", parceiroValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-1",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    name: "person_type",
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "9999999-99.9999.9.99.9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    name: "number_proccess",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-3",
    label: "Email",
    variant: "outlined",
    name: "email",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 13
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-5",
    checked: checkedModalAntecipe,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "concordo_termos",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalAntecipe'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 15
    }
  }, "Concordo com os Termos da JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
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
      lineNumber: 576,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_16__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 9
    }
  }, "Invista em cr\xE9ditos trabalhistas"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-1",
    label: "Email",
    variant: "outlined",
    name: "email",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 13
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-3",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    name: "person_type",
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-4",
    checked: checkedModalInvestirQualificado,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "investidor_qualificado",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalInvestirQualificado'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-5",
    checked: checkedModalInvestirConcordo,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "concordo_termos",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalInvestirConcordo'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 15
    }
  }, "Concordo com os Termos da JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
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
      lineNumber: 665,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_16__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalEnviado,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 11
    }
  }, state.modalEnviadoMsg))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalErro,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 11
    }
  }, state.modalErroMsg))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.219fcfcc781cfc032cf4.hot-update.js.map