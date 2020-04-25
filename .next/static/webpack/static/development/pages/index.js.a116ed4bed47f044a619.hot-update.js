webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/Modal/modal-container.tsx":
/*!**********************************************!*\
  !*** ./containers/Modal/modal-container.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\containers\\Modal\\modal-container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var modal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#00000052",
  zIndex: 10000
};
var content = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "15px",
  padding: "15px",
  width: "100px",
  height: "100px",
  margin: "auto",
  backgroundColor: "#fff",
  zIndex: 10000000
};

var Modal = function Modal(props, ref) {
  var _content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      _content: _content
    };
  });
  return __jsx("div", {
    style: modal,
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    ref: _content,
    style: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Hello i'm a modal Route"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Modal));

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
/* harmony import */ var _containers_Modal_modal_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Modal/modal-container */ "./containers/Modal/modal-container.tsx");
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "JusCredit - Home")), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "map-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Antecipe seu "), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "cr\xE9dito trabalhista"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Quero investir"), __jsx(_containers_Modal_modal_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " ", __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "third",
    round: true,
    onClick: function onClick() {
      return setModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Modal")), __jsx("div", {
    className: "cursor-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/cursor.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    className: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "products-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " ", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Mais valor para quem vende", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), "Simples para quem investe"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Vantagens para quem vende:"), __jsx("img", {
    src: "/agilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Quero antecipar")), "Vantagens para quem investe:"), __jsx("img", {
    src: "/rentabilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Quero investir"))), __jsx("div", {
    className: "funciona-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "poligono-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Conte com toda a seguran\xE7a, agilidade ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "e praticidade na libera\xE7\xE3o do seu processo ganho."), __jsx("img", {
    src: "/trabalhador.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx("div", {
    className: "duvidas-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "T\xEAm d\xFAvidas?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Queremos te ajudar a resolv\xEA-las"), __jsx("img", {
    src: "/duvidas.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx("div", {
    className: "parceiros-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mask: null,
    placeholder: "   Insira aqui seu e-mail",
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 78
    },
    __self: this
  }, "Enviar"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a116ed4bed47f044a619.hot-update.js.map