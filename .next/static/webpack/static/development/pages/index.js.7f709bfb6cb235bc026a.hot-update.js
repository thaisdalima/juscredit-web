webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modal/Modal */ "./components/Modal/Modal.tsx");

var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // getModalStyle is not a pure function, we roll the style only on the first render

var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getModalStyle),
    _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 1),
    modalStyle = _React$useState2[0];

var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
    _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];

var handleOpen = function handleOpen() {
  setOpen(true);
};

var handleClose = function handleClose() {
  setOpen(false);
};

var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "JusCredit - Home")), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "map-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Antecipe seu "), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "cr\xE9dito trabalhista"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Quero investir"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Open Modal"), __jsx(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, body)), __jsx("div", {
    className: "cursor-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: "/cursor.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    className: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "products-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " ", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Mais valor para quem vende", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "Simples para quem investe"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Vantagens para quem vende:"), __jsx("img", {
    src: "/agilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Quero antecipar")), "Vantagens para quem investe:"), __jsx("img", {
    src: "/rentabilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Quero investir"))), __jsx("div", {
    className: "funciona-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "poligono-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Conte com toda a seguran\xE7a, agilidade ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "e praticidade na libera\xE7\xE3o do seu processo ganho."), __jsx("img", {
    src: "/trabalhador.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("div", {
    className: "duvidas-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "T\xEAm d\xFAvidas?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Queremos te ajudar a resolv\xEA-las"), __jsx("img", {
    src: "/duvidas.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx("div", {
    className: "parceiros-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mask: null,
    placeholder: "   Insira aqui seu e-mail",
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "fourth",
    tabIndex: -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Enviar"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7f709bfb6cb235bc026a.hot-update.js.map