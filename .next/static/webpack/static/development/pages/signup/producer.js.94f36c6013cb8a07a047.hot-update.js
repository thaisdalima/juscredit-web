webpackHotUpdate("static\\development\\pages\\signup\\producer.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/signup/producer.tsx":
/*!***********************************!*\
  !*** ./pages/signup/producer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Register/RegisterForm */ "./components/Register/RegisterForm.tsx");
/* harmony import */ var _components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Register/ConfirmationChoice/ConfirmationChoice */ "./components/Register/ConfirmationChoice/ConfirmationChoice.tsx");
/* harmony import */ var _components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Register/Confirmation/Confirmation */ "./components/Register/Confirmation/Confirmation.tsx");
/* harmony import */ var _components_Register_AddressForm_AddressForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Register/AddressForm/AddressForm */ "./components/Register/AddressForm/AddressForm.tsx");
/* harmony import */ var _components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Register/RegisterSuccess/RegisterSuccess */ "./components/Register/RegisterSuccess/RegisterSuccess.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Register_ProducerNotFound_ProducerNotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Register/ProducerNotFound/ProducerNotFound */ "./components/Register/ProducerNotFound/ProducerNotFound.tsx");



var _jsxFileName = "C:\\Users\\Thais Linda\\juscredit-web\\pages\\signup\\producer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var SignupProducer = function SignupProducer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      userValues = _useState2[0],
      setUserValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      confirmationChoice = _useState3[0],
      setConfirmationChoice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      invalidCode = _useState5[0],
      setInvalid = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query.notFound) {
      setStep(-1);
    }
  }, [router.query]);

  var handleUserSubmit = function handleUserSubmit(values) {
    setUserValues(values);
    setStep(1);
  };

  var handleConfimationChoice = function handleConfimationChoice(choice) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handleConfimationChoice$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setConfirmationChoice(choice);
            _context.prev = 1;
            setLoading(true);
            _context.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(sendConfirmation(choice));

          case 5:
            setLoading(false);
            setStep(2);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
  };

  var handleConfimation = function handleConfimation(value) {
    var email, phone, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handleConfimation$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = userValues.email, phone = userValues.phone;
            setLoading(true);
            _context2.prev = 2;
            _context2.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(fetch("".concat(process.env.API_URL, "/api/confirmation/verify"), {
              method: 'POST',
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                target: confirmationChoice === 'email' ? email : "+55".concat(phone.replace(/\D/g, '')),
                code: value
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 5:
            res = _context2.sent;
            setLoading(false);

            if (res.status === 200) {
              setStep(3);
            } else {
              setInvalid(true);
            }

            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            setLoading(false);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 10]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
  };

  var sendConfirmation = function sendConfirmation(choice) {
    var email, phone, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function sendConfirmation$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = userValues.email, phone = userValues.phone;
            _context3.prev = 1;
            _context3.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(fetch("".concat(process.env.API_URL, "/api/confirmation/send-").concat(choice), {
              method: 'POST',
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(choice === 'email' ? {
                email: email
              } : {
                phone: "+55".concat(phone.replace(/\D/g, ''))
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 4:
            res = _context3.sent;

            if (!(res.status !== 200)) {
              _context3.next = 7;
              break;
            }

            throw res;

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            throw _context3.t0;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 9]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
  };

  var createProducer = function createProducer(body) {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function createProducer$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(fetch("".concat(process.env.API_URL, "/api/produtores"), {
              method: 'POST',
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 3:
            res = _context4.sent;
            _context4.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(res.json());

          case 6:
            data = _context4.sent;

            if (!(res.status !== 200)) {
              _context4.next = 9;
              break;
            }

            throw res.json();

          case 9:
            return _context4.abrupt("return", data);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 12]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
  };

  switch (step) {
    case -1:
      return __jsx(_components_Register_ProducerNotFound_ProducerNotFound__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSubmit: function onSubmit() {
          return setStep(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      });

    case 0:
      return __jsx(_components_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        profile: "producer",
        onSubmit: handleUserSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      });

    case 1:
      return __jsx(_components_Register_ConfirmationChoice_ConfirmationChoice__WEBPACK_IMPORTED_MODULE_5__["default"], {
        choice: confirmationChoice,
        profile: "producer",
        values: userValues,
        onSubmit: handleConfimationChoice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      });

    case 2:
      return __jsx(_components_Register_Confirmation_Confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSendAgain: function onSendAgain() {
          return sendConfirmation(confirmationChoice);
        },
        invalid: invalidCode,
        profile: "producer",
        confirmationChoice: confirmationChoice,
        onSubmit: handleConfimation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      });

    case 3:
      return __jsx(_components_Register_AddressForm_AddressForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        profile: "producer",
        loading: loading.toString(),
        values: userValues,
        onSubmit: handleAddressSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      });

    case 4:
      return __jsx(_components_Register_RegisterSuccess_RegisterSuccess__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SignupProducer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=producer.js.94f36c6013cb8a07a047.hot-update.js.map