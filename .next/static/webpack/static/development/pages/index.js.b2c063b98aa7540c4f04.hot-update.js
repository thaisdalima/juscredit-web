webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);









function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }



var Modal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Modal);

    _this = _super.call(this, props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "container", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "modalRoot", void 0);

    _this.modalRoot = document.getElementById("root-modal") || document.createElement("div");
    _this.modalRoot.className = "root-modal";
    _this.container = document.createElement("div");
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modalRoot.appendChild(this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.modalRoot.removeChild(this.container);
    }
  }, {
    key: "render",
    value: function render() {
      return react_dom__WEBPACK_IMPORTED_MODULE_9__["createPortal"](this.props.children, this.container);
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal/Modal */ "./components/Modal/Modal.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "JusCredit - Home")), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "map-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Antecipe seu "), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "cr\xE9dito trabalhista"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Quero investir"), __jsx("div", {
    className: "cursor-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: "/cursor.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    className: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "products-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " ", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Mais valor para quem vende", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "Simples para quem investe"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Vantagens para quem vende:"), __jsx("img", {
    src: "/agilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Quero antecipar")), __jsx(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    id: "lil-modal",
    className: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("span", {
    role: "button",
    onClick: _this.onClickHandler,
    className: "btn-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\xD7"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Modal Header")), __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Lorem ipsum dolor sit amet.")), __jsx("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Modal Footer"))))), "Vantagens para quem investe:"), __jsx("img", {
    src: "/rentabilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Quero investir"))), __jsx("div", {
    className: "funciona-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "poligono-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Conte com toda a seguran\xE7a, agilidade ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), "e praticidade na libera\xE7\xE3o do seu processo ganho."), __jsx("img", {
    src: "/trabalhador.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx("div", {
    className: "duvidas-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "T\xEAm d\xFAvidas?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Queremos te ajudar a resolv\xEA-las"), __jsx("img", {
    src: "/duvidas.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("div", {
    className: "parceiros-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mask: null,
    placeholder: "   Insira aqui seu e-mail",
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "fourth",
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Enviar"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b2c063b98aa7540c4f04.hot-update.js.map