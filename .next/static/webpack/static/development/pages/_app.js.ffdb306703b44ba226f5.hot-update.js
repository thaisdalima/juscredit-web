webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link/Link */ "./components/Link/Link.tsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Header\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openedMenu = _useState[0],
      setOpenedMenu = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var themeClass = '';

  if (router && router.pathname !== '/') {
    themeClass = 'white-navbar';
  }

  var toggleMenu = function toggleMenu() {
    setOpenedMenu(!openedMenu);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "nav" + themeClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " ", __jsx("img", {
    src: "/logo.svg",
    className: "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    passHref: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Como Funciona")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Antecipar")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Investir")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " Parceiros ")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " ", __jsx("button", {
    id: "entrar",
    className: "entrar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Entrar")))), __jsx("div", {
    className: "menu-button",
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("path", {
    fill: themeClass === 'white-navbar' ? 'black' : 'white',
    d: "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), openedMenu && __jsx("div", {
    className: "mobile-link-container " + themeClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
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
  }, "Como Funciona")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Antecipar")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Investir")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " Parceiros ")), __jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Entrar "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.ffdb306703b44ba226f5.hot-update.js.map