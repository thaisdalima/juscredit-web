webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
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
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");





var _this = undefined,
    _jsxFileName = "E:\\VS2017\\Juscredit\\juscredit-web\\components\\Header\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















var Header = function Header(props) {
  var INITIAL_FORM = {
    full_name: '',
    account_type: '',
    person_type: '',
    number_proccess: '',
    email: '',
    phone: '',
    concordo_termos: '',
    investidor_qualificado: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    modalEnviadoMsg: '',
    modalErroMsg: ''
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      checkedModalAntecipe = _React$useState4[0],
      setCheckMdlAntecipe = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      checkedModalInvestirQualificado = _React$useState6[0],
      setCheckMdlInvestirQualificado = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      checkedModalInvestirConcordo = _React$useState8[0],
      setCheckMdlInvestirConcordo = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(INITIAL_FORM),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      formValues = _React$useState10[0],
      setFormValue = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      modalAnteciparState = _React$useState12[0],
      setAnteciparOpen = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      modalInvestirState = _React$useState14[0],
      setInvestirOpen = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      modalEnviado = _React$useState16[0],
      setFeedbackEnviado = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      modalErro = _React$useState18[0],
      setFeedbackErro = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState19, 2),
      profile = _React$useState20[0],
      setProfile = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState21, 2),
      selectProfile = _React$useState22[0],
      setSelectProfile = _React$useState22[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      openedMenu = _useState[0],
      setOpenedMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loggedIn = _useState2[0],
      setLoggedIn = _useState2[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState24 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState23, 2),
      originPath = _React$useState24[0],
      setOriginPath = _React$useState24[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  var tipoPessoaArr = [{
    value: 'f',
    label: 'Pessoa Fisica'
  }, {
    value: 'j',
    label: 'Pessoa Jurídica'
  }];
  var themeClass = '';

  if (router && router.pathname !== '/') {
    themeClass = 'white-navbar';
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _document;

    if ((_document = document) === null || _document === void 0 ? void 0 : _document.cookie) {
      if (document.cookie.includes('auth_token')) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
  }, [router.pathname]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setOpenedMenu(false);
  }, [router.pathname]);

  var toggleMenu = function toggleMenu() {
    setOpenedMenu(!openedMenu);
  };

  var handleModalAntecipar = function handleModalAntecipar() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'c',
      person_type: ''
    }));
    setAnteciparOpen(true);
  };

  var handleModalInvestir = function handleModalInvestir() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'i',
      person_type: ''
    }));
    setInvestirOpen(true);
  };

  var handleClose = function handleClose() {
    setCheckMdlAntecipe(false);
    setCheckMdlInvestirQualificado(false);
    setCheckMdlInvestirConcordo(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
    setOpenedMenu(false);
    setFeedbackEnviado(false);
    setFeedbackErro(false);
    setFormValue(_objectSpread({}, formValues, {
      full_name: '',
      account_type: '',
      person_type: '',
      number_proccess: '',
      email: '',
      phone: '',
      concordo_termos: '',
      investidor_qualificado: ''
    }));
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
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.checked)));
    } else {
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.value)));
    }

    console.log(formValues);
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

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      console.log(response);
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Seu cadastro foi iniciado, verique seu e-mail para continuar (se não achar olhe a pasta de Spam)."
      }));
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      console.log(error);
      setState(_objectSpread({}, state, {
        modalErroMsg: "Houve um problema, tente novamente mais tarde."
      }));
      handleClose();
      setFeedbackErro(true);
    });
  };

  function ProcessoFormat(props) {
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
      getInputRef: inputRef,
      format: "#######-##.####.#.##.########",
      allowEmptyFormatting: true,
      allowLeadingZeros: true,
      isNumericString: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }));
  }

  function CelularFormat(props) {
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
      getInputRef: inputRef,
      format: "(##) #-####-####",
      allowEmptyFormatting: true,
      isNumericString: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }));
  }

  ProcessoFormat.propTypes = {
    inputRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  };
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setOriginPath(window.location.origin);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("nav", {
    className: "navbar " + themeClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "navbar-brand",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/logo.svg",
    className: "header-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  })), __jsx("ul", {
    className: "link-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "#como-funciona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 29
    }
  }, "Como Funciona"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: handleModalAntecipar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 29
    }
  }, "Antecipar"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: handleModalInvestir,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "Investir"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "#parceiros-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }, "Parceiros"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "entrar",
    color: "seven",
    onClick: function onClick() {
      return window.open('https://app.juscredit.com.br');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, "Entrar"))), __jsx("div", {
    className: "menu-button",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, __jsx("path", {
    fill: themeClass === 'white-navbar' ? 'white' : '#395E66',
    d: "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  })))), openedMenu && __jsx("ul", {
    className: "mobile-link-container " + themeClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "#como-funciona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 29
    }
  }, "Como Funciona"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: handleModalAntecipar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }, "Antecipar"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: handleModalInvestir,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 29
    }
  }, "Investir"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "#parceiros-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 29
    }
  }, "Parceiros"))), __jsx("li", {
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 21
    }
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "entrar",
    color: "seven",
    onClick: function onClick() {
      return window.open('https://app.juscredit.com.br');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, "Entrar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 281,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 288,
      columnNumber: 25
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 33
      }
    }, option.label);
  })), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_14___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "9999999-99.9999.9.99.9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    name: "number_proccess",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 316,
      columnNumber: 25
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_14___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      lineNumber: 335,
      columnNumber: 29
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 29
    }
  }, "Concordo com os Termos da JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 29
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
      lineNumber: 345,
      columnNumber: 33
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }, "Cancelar"), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_19__["default"], "user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 21
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, "Invista em cr\xE9ditos trabalhistas"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 367,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 374,
      columnNumber: 25
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_14___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      lineNumber: 392,
      columnNumber: 25
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 33
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      lineNumber: 409,
      columnNumber: 29
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 29
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      lineNumber: 422,
      columnNumber: 29
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, "Concordo com os Termos da JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
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
      lineNumber: 434,
      columnNumber: 33
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 17
    }
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }, "Cancelar"), __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_19__["default"], "user"), formValues);
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: modalEnviado,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 17
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 21
    }
  }, "Seu cadastro foi iniciado, ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 52
    }
  }, "verique seu e-mail"), " para continuar (se n\xE3o achar olhe a pasta de Spam)."))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: modalErro,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 17
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__["default"], {
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 21
    }
  }, "Houve um problema, tente novamente mais tarde."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.c359662825bab0d6624c.hot-update.js.map