webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Checkbox/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js":
false,

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js":
false,

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js":
false,

/***/ "./node_modules/@material-ui/core/esm/NoSsr/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js":
false,

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
false,

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var Index = function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "JusCredit - Home")), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "map-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Antecipe seu "), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "cr\xE9dito trabalhista"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/Modal');
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Quero investir"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("button", {
    color: "primary",
    onClick: function onClick() {
      return setSignupModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Signup"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: signupModal,
    keepMounted: true,
    onClose: function onClose() {
      return setSignupModal(false);
    },
    "aria-labelledby": "signup-modal-slide-title",
    "aria-describedby": "signup-modal-slide-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "signup-modal-slide-title",
    disableTypography: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("button", {
    key: "close",
    "aria-label": "Close",
    onClick: function onClick() {
      return setSignupModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " "), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Register")), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "signup-modal-slide-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "formControlProps=", {
    fullWidth: true
  }, "inputProps=", {
    startAdornment: __jsx(InputAdornment, {
      position: "start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }),
    placeholder: "First Name..."
  }, "/> formControlProps=", {
    fullWidth: true
  }, "inputProps=", {
    startAdornment: __jsx(InputAdornment, {
      position: "start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }),
    placeholder: "Email..."
  }, "/>", __jsx(FormControlLabel, {
    classes: {
      label: classes.label
    },
    control: __jsx(Checkbox, {
      tabIndex: -1,
      onClick: function onClick() {
        return _this.handleToggle(1);
      },
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }),
    label: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "I agree to the ", __jsx("a", {
      href: "#pablo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "terms and conditions"), "."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx("div", {
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("button", {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Get started")))))), __jsx("div", {
    className: "cursor-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("img", {
    src: "/cursor.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    className: "antecipar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "products-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, " ", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Mais valor para quem vende", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), "Simples para quem investe"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Vantagens para quem vende:"), __jsx("img", {
    src: "/agilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Quero antecipar")), "Vantagens para quem investe:"), __jsx("img", {
    src: "/rentabilidade.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx("div", {
    className: "buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    color: "sixty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Quero investir"))), __jsx("div", {
    className: "funciona-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "poligono-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Conte com toda a seguran\xE7a, agilidade ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), "e praticidade na libera\xE7\xE3o do seu processo ganho."), __jsx("img", {
    src: "/trabalhador.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), __jsx("div", {
    className: "duvidas-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "T\xEAm d\xFAvidas?"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Queremos te ajudar a resolv\xEA-las"), __jsx("img", {
    src: "/duvidas.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), __jsx("div", {
    className: "parceiros-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Indicar"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Inscreva-se"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Voc\xEA receber\xE1 um email para cria\xE7\xE3o de senha e completar seu perfil Iremos entrar em contato com voc\xEA para confirmar suas informac\u0327o\u0303es."), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Email @ ",
    type: "email",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleClose,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleClose,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Enviar")))))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a328a6b7bd28942c0d09.hot-update.js.map