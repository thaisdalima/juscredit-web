webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./containers/Contact/contact-container.tsx":
/*!**************************************************!*\
  !*** ./containers/Contact/contact-container.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.scss */ "./containers/Contact/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Input/Input */ "./components/Input/Input.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\containers\\Contact\\contact-container.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      subject = _useState3[0],
      setSubject = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState4[0],
      setMessage = _useState4[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "contact-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Quer falar com a gente?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\xC9 s\xF3 escrever para ", __jsx("a", {
    className: "email",
    href: "mailto:contato@organis.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "contato@organis8.org"), " ou nos enviar uma mensagem no campo abaixo. Entraremos em contato o mais r\xE1pido poss\xEDvel!"), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Nome completo",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Assunto",
    value: subject,
    onChange: function onChange(e) {
      return setSubject(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("textarea", {
    className: "organis-input",
    placeholder: "Mensagem",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("a", {
    className: "link button warn",
    href: "mailto:contato@organis.org?subject=".concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(message + '\n' + name)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Enviar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.d702e76b58bad792a740.hot-update.js.map