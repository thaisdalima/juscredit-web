webpackHotUpdate("static\\development\\pages\\signup\\producer.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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

            try {
              setLoading(true);
              setLoading(false);
              setStep(2);
            } catch (e) {
              setLoading(false);
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
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
};

/* harmony default export */ __webpack_exports__["default"] = (SignupProducer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=producer.js.d1c30cb771790bdb4b1c.hot-update.js.map