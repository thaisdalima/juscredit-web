webpackHotUpdate("static\\development\\pages\\signup\\user.js",{

/***/ "./components/Register/RegisterForm.tsx":
/*!**********************************************!*\
  !*** ./components/Register/RegisterForm.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterForm.scss */ "./components/Register/RegisterForm.scss");
/* harmony import */ var _RegisterForm_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RegisterForm_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\components\\Register\\RegisterForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var stringMap = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a([['user', {
  cardTitle: 'Seja um Investidor'
}], ['producer', {
  cardTitle: 'Antecipe o seu crédito'
}], ['update-producer', {
  cardTitle: 'Atualizando os meus dados',
  formTitle: 'Confirme seus contatos antes de atualizar seus dados:'
}]]);
var MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
var PHONE_REGEX = new RegExp(/^\([1-9]{2}\) [0-9]{5}\-[0-9]{4}$/i);

var validate = function validate(values) {
  var errors = {};

  if (!values.email) {
    errors.email = 'Campo obrigatório';
  } else if (!MAIL_REGEX.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = 'Campo obrigatório';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Email não coincide';
  }

  if (!values.phone) {
    errors.phone = 'Campo obrigatório';
  } else if (!PHONE_REGEX.test(values.phone)) {
    errors.phone = 'Celular inválido';
  }

  return errors;
};

var RegisterForm = function RegisterForm(_ref) {
  var profile = _ref.profile,
      _onSubmit = _ref.onSubmit;

  var _stringMap$get = stringMap.get(profile),
      cardTitle = _stringMap$get.cardTitle,
      formTitle = _stringMap$get.formTitle;

  return __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Confirmar dados"), __jsx("h1", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, cardTitle), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: {
      email: '',
      confirmEmail: '',
      phone: ''
    },
    validate: validate,
    onSubmit: function onSubmit(_ref2) {
      var email = _ref2.email,
          phone = _ref2.phone;
      return _onSubmit({
        email: email,
        phone: phone
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, function (_ref3) {
    var errors = _ref3.errors,
        touched = _ref3.touched;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("h2", {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, formTitle), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      name: "email",
      mask: null,
      placeholder: "Email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
      name: "email",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Confirme seu email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      name: "confirmEmail",
      mask: null,
      placeholder: "Confirme seu email",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
      name: "confirmEmail",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Celular com DDD"), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      name: "phone",
      mask: "(99) 99999-9999",
      placeholder: "Celular com DDD",
      component: _Input_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
      name: "phone",
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), __jsx("div", {
      className: "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      type: "submit",
      tabIndex: 1,
      disabled: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(touched).length < 2 || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length > 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Avan\xE7ar")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=user.js.913fe81b4dfe9abddf25.hot-update.js.map