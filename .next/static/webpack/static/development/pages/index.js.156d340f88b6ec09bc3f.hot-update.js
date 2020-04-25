webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleModal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");

var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Modal\\Modal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50 + rand();
  var left = 50 + rand();
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

function SimpleModal() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var body = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h2", {
    id: "simple-modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Text in a modal"), __jsx("p", {
    id: "simple-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."), __jsx(SimpleModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Open Modal"), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, body));
}

/***/ })

})
//# sourceMappingURL=index.js.156d340f88b6ec09bc3f.hot-update.js.map