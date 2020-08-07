webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react-preload/lib/ImageCache.js":
/*!******************************************************!*\
  !*** ./node_modules/react-preload/lib/ImageCache.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hash = {};
const cache = [];

const add = (url, options = {}) => {
    if (!hash[url]) {
        hash[url] = new Image();

        if (options.crossOrigin) {
            hash[url].crossOrigin = options.crossOrigin;
        }

        hash[url].src = url;

        cache.push(hash[url]);
    }
    return hash[url];
};

const get = (url, options) => add(url, options);

const stuff = (urls, options) => {
    if (urls.length > 0) {
        urls.map(url => add(url, options));
    }
};

const ImageCache = {
    add,
    stuff,
    get,
    hash,
    cache
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCache);

/***/ }),

/***/ "./node_modules/react-preload/lib/ImageHelper.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-preload/lib/ImageHelper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCache */ "./node_modules/react-preload/lib/ImageCache.js");


const reflect = p => p.then(v => ({ v, status: 'fulfilled' }), e => ({ e, status: 'rejected' }));

const ImageHelper = {
    loadImage(url, options) {
        const image = _ImageCache__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, options);

        return new Promise((resolve, reject) => {
            const handleSuccess = () => {
                resolve(image);
            };
            const handleError = () => {
                reject(new Error(`failed to preload ${url}`));
            };

            if (image.complete) {
                // image is loaded, go ahead and change the state

                if (image.naturalWidth && image.naturalHeight) {
                    // successful load
                    handleSuccess();
                } else {
                    // IE CACHED IMAGES RACE CONDITION
                    // -------------------------------
                    // IE11 sometimes reports cached images as image.complete,
                    // but naturalWidth and naturalHeight = 0.
                    // A few ms later it will get the dimensions correct,
                    // so check a few times before rejecting it.
                    let counter = 1;
                    const checkDimensions = setInterval(() => {
                        if (image.naturalWidth && image.naturalHeight) {
                            window.clearInterval(checkDimensions);
                            handleSuccess();
                        }
                        if (counter === 3) {
                            window.clearInterval(checkDimensions);
                            handleError();
                        }
                        counter += 1;
                    }, 50);
                }
            } else {
                image.addEventListener('load', handleSuccess, false);
                image.addEventListener('error', handleError, false);
            }
        });
    },

    loadImages(urls, options) {
        const promises = urls.map(url => reflect(this.loadImage(url, options)));
        return Promise.all(promises).then(promises => {
            return promises.map(p => {
                if (p.status !== 'fulfilled') {
                    throw new Exception('One or more images failed to load');
                }
                return p;
            });
        });
    },

    // preload without caring about the result
    stuffImages(urls, options) {
        _ImageCache__WEBPACK_IMPORTED_MODULE_0__["default"].stuff(urls, options);
    }
};

/* harmony default export */ __webpack_exports__["default"] = (ImageHelper);

/***/ }),

/***/ "./node_modules/react-preload/lib/Preload.js":
/*!***************************************************!*\
  !*** ./node_modules/react-preload/lib/Preload.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageHelper */ "./node_modules/react-preload/lib/ImageHelper.js");




const propTypes = {
    // Rendered on success
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,

    // Rendered during load
    loadingIndicator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

    // Array of image urls to be preloaded
    images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

    // If set, the preloader will automatically show
    // the children content after this amount of time
    autoResolveDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    // Error callback. Is passed the error
    onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    // Success callback
    onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    // Whether or not we should still show the content
    // even if there is a preloading error
    resolveOnError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    // Whether or not we should mount the child content after
    // images have finished loading (or after autoResolveDelay)
    mountChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

const defaultProps = {
    loadingIndicator: null,
    images: [],
    autoResolveDelay: 0,
    onError: null,
    onSuccess: null,
    resolveOnError: true,
    mountChildren: true
};

class Preload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this._mounted = false, this.state = {
            ready: false
        }, this.loadImages = () => {
            const { images, autoResolveDelay } = this.props;
            _ImageHelper__WEBPACK_IMPORTED_MODULE_2__["default"].loadImages(images).then(this._handleSuccess, this._handleError);

            if (autoResolveDelay && autoResolveDelay > 0) {
                this.autoResolveTimeout = setTimeout(this._handleAutoResolve, autoResolveDelay);
            }
        }, this._handleAutoResolve = () => {
            this._handleSuccess({ didAutoResolve: true });
        }, this._handleSuccess = ({ didError, didAutoResolve } = {}) => {
            if (this.autoResolveTimeout) {
                clearTimeout(this.autoResolveTimeout);
                this.autoResolveTimeout = null;
            }

            const { ready } = this.state;
            if (ready || !this._mounted) {
                return;
            }

            this.setState({
                ready: true
            });

            const { onSuccess } = this.props;
            if (onSuccess) {
                onSuccess({ didError, didAutoResolve });
            }
        }, this._handleError = err => {
            if (!this._mounted) {
                return;
            }

            const { resolveOnError, onError } = this.props;

            if (resolveOnError) {
                this._handleSuccess({ didError: true, error: err });
            }

            if (onError) {
                onError(err);
            }
        }, _temp;
    }

    componentWillMount() {
        const { images } = this.props;
        if (!images || images.length === 0) {
            this._handleSuccess();
        }
    }

    componentDidMount() {
        this._mounted = true;
        this.loadImages();
    }

    componentDidUpdate(prevProps) {
        const { images } = this.props;
        const oldImages = new Set(prevProps.images);

        let hasChanged = false;
        for (let i = 0; i < images.length; i += 1) {
            const image = images[i];
            if (!oldImages.has(image)) {
                hasChanged = true;
                break;
            }
        }

        if (hasChanged) {
            this.loadImages();
        }
    }

    componentWillUnmount() {
        this._mounted = false;
        if (this.autoResolveTimeout) {
            clearTimeout(this.autoResolveTimeout);
        }
    }

    render() {
        const { ready } = this.state;
        const { mountChildren, children, loadingIndicator } = this.props;

        return ready && mountChildren ? children : loadingIndicator;
    }
}

Preload.propTypes = propTypes;
Preload.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (Preload);

/***/ }),

/***/ "./node_modules/react-preload/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-preload/lib/index.js ***!
  \*************************************************/
/*! exports provided: ImageCache, ImageHelper, Preload, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preload", function() { return Preload; });
/* harmony import */ var _Preload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preload */ "./node_modules/react-preload/lib/Preload.js");
/* harmony import */ var _ImageCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCache */ "./node_modules/react-preload/lib/ImageCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCache", function() { return _ImageCache__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ImageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageHelper */ "./node_modules/react-preload/lib/ImageHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageHelper", function() { return _ImageHelper__WEBPACK_IMPORTED_MODULE_2__["default"]; });





const Preload = _Preload__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Preload);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../api */ "./api.js");



var _jsxFileName = "E:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















__jsx("meta", {
  name: "viewport",
  content: "::-webkit=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 1
  }
});

var Index = function Index(props) {
  var INITIAL_FORM = {
    full_name: '',
    account_type: '',
    person_type: '',
    number_proccess: '',
    email: '',
    phone: '',
    concordo_termos: '',
    investidor_qualificado: ''
  };
  var INITIAL_FORM_PARCEIRO = {
    full_name: '',
    email: '',
    assunto: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false,
    modalEnviadoMsg: '',
    modalErroMsg: ''
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_FORM),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_FORM_PARCEIRO),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      parceiroValues = _React$useState6[0],
      setParceiroValue = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      modalIndicarState = _React$useState8[0],
      setIndicarOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      modalAnteciparState = _React$useState10[0],
      setAnteciparOpen = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 2),
      modalInvestirState = _React$useState12[0],
      setInvestirOpen = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState13, 2),
      modalEnviado = _React$useState14[0],
      setFeedbackEnviado = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState15, 2),
      modalErro = _React$useState16[0],
      setFeedbackErro = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("cliente"),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState17, 2),
      profile = _React$useState18[0],
      setProfile = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState19, 2),
      selectProfile = _React$useState20[0],
      setSelectProfile = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState21, 2),
      originPath = _React$useState22[0],
      setOriginPath = _React$useState22[1];

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  var loadingIndicator = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 27
    }
  }, "Loading...");

  var images = [];

  var Preload = __webpack_require__(/*! react-preload */ "./node_modules/react-preload/lib/index.js").Preload;

  var tipoPessoaArr = [{
    value: 'f',
    label: 'Pessoa Física'
  }, {
    value: 'j',
    label: 'Pessoa Jurídica'
  }];

  var handleModalIndicar = function handleModalIndicar() {
    setIndicarOpen(true);
  };

  var handleModalAntecipar = function handleModalAntecipar() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'c'
    }));
    setAnteciparOpen(true);
  };

  var handleModalInvestir = function handleModalInvestir() {
    setFormValue(_objectSpread({}, formValues, {
      account_type: 'i'
    }));
    setInvestirOpen(true);
  };

  var handleClose = function handleClose() {
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
    setFeedbackEnviado(false);
    setFeedbackErro(false);
    setFormValue(_objectSpread({}, formValues, {
      full_name: '',
      account_type: '',
      person_type: '',
      number_proccess: '',
      email: '',
      phone: '',
      concordo_termos: '',
      investidor_qualificado: ''
    }));
  };

  var handleProfile = function handleProfile(_profile) {
    setProfile(_profile);
  };

  var handleChangeSelect = function handleChangeSelect(event) {
    setSelectProfile(event.target.value);
  };

  var handleChangeCheckbox = function handleChangeCheckbox(event) {
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.ariaLabel, event.target.checked)));
  };

  var atualizaFormValues = function atualizaFormValues(event) {
    if (event.target.type == "checkbox") {
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.checked)));
      console.log(formValues);
    } else {
      setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
    }
  };

  var getParceiroValue = function getParceiroValue(event, formItem) {
    setParceiroValue(_objectSpread({}, parceiroValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formItem, event)));
  };

  var isEnabled = function isEnabled() {
    for (var key in formValues) {
      if (formValues["account_type"] !== "i") {
        formValues["investidor_qualificado"] = null;
      }

      if (formValues["account_type"] !== "c") {
        formValues["number_proccess"] = null;
      }

      if (formValues[key] != "") {} else {
        return true;
      }
    }
  };

  var isEnabledParceiro = function isEnabledParceiro() {
    for (var key in parceiroValues) {
      if (parceiroValues[key] != "") {} else {
        return true;
      }
    }
  };

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Seu cadastro foi iniciado, verifique seu email para conclui-lo e iniciar seus investimentos em nossa plataforma!"
      }));
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      setState(_objectSpread({}, state, {
        modalErroMsg: "Houve um problema, tente novamente mais tarde."
      }));
      handleClose();
      setFeedbackErro(true);
    });
  };

  var handleSubmitParceiro = function handleSubmitParceiro(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Obrigado por se interessar em ser nosso parceiro! Entraremos em contato em breve"
      }));
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      setState(_objectSpread({}, state, {
        modalEnviadoMsg: "Houve um problema, tente novamente mais tarde."
      }));
      handleClose();
      setFeedbackErro(true);
    });
  }; // const loadImagesArray = () => {
  //   var array = new Array(
  //     "./assets/images/bagageiro/PM-CENA-01.jpg",
  //     "./assets/images/bagageiro/PM-CENA-02.jpg",
  //     "./assets/images/bagageiro/PM-CENA-03.jpg",
  //   );
  //   document.addEventListener("DOMContentLoaded", () => { preloadImages(array) }, true);
  // }
  // function preloadImages(params) {
  //   console.log('chegou aqui');
  //   var images = new Array();
  //   var loadedImages = 0;
  //   for (var i = 0; i < params.length; i++) {
  //     images[i] = new Image();
  //     images[i].src = params[i];
  //     images[i].onload = function () {
  //       document.getElementById('log').innerHTML = ((loadedImages / params.length) * 100).toFixed(0) + '%';
  //       loadedImages++;
  //       if (loadedImages === params.length) {
  //         imagesLoaded();
  //       }
  //     }
  //   }
  // }
  // function imagesLoaded() {
  //   // Load total
  //   console.log('imagens carregaram');
  // }


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOriginPath(window.location.origin); // loadImagesArray();
  });
  return __jsx(Preload, {
    loadingIndicator: loadingIndicator,
    images: images,
    autoResolveDelay: 3000,
    onError: _this._handleImageLoadError,
    onSuccess: _this._handleImageLoadSuccess,
    resolveOnError: true,
    mountChildren: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, "JusCredit")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 32
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 54
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 21
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-2.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 23
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-1.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 23
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 29
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 23
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 29
    }
  }, "Receba diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 19
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 54
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 21
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-4.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 23
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 29
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 29
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 29
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-5.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 29
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 29
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o e inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/card-img-3.svg",
    alt: "Ilustra\xE7\xE3o do Card",
    style: {
      maxHeight: '105px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 23
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 29
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 63
    }
  }), "se aprovado \xE9 disponibilizado aos investidores."))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-6.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 25
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 25
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 23
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 21
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-7.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 25
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 25
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 23
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-8.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 25
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 25
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 23
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 23
    }
  }, __jsx("img", {
    style: {
      maxWidth: "70px",
      marginRight: "10px"
    },
    src: "/card-img-9.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 25
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 25
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 23
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 21
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 15
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 17
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 11
    }
  }, "Seja parceiro!"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 11
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    autoFocus: true,
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldIndicar-1",
    label: "Assunto",
    variant: "outlined",
    name: "assunto",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'assunto');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldIndicar-2",
    label: "Email",
    type: "mail",
    variant: "outlined",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 11
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 13
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabledParceiro(),
    onClick: function onClick(e) {
      handleSubmitParceiro("https://api-dot-juscredit-hml.ue.r.appspot.com/api/v1/sendmailpartner", parceiroValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 11
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-1",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    name: "person_type",
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 15
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 19
      }
    }, option.label);
  })), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "9999999-99.9999.9.99.9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    name: "number_proccess",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-3",
    label: "Email",
    variant: "outlined",
    name: "email",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 15
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-5",
    checked: state.checkedModalAntecipe,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "concordo_termos",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalAntecipe'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 17
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "modal-label",
    target: "_blank",
    style: {
      marginLeft: "6px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 19
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 11
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 13
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_16__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 13
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 11
    }
  }, "Invista em cr\xE9ditos trabalhistas"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 11
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_name",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-1",
    label: "Email",
    variant: "outlined",
    name: "email",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 15
    }
  }), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    mask: "(99) 99999-9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined",
    name: "phone",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-3",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    name: "person_type",
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 15
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 19
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-4",
    checked: state.checkedModalInvestirQualificado,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "investidor_qualificado",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalInvestirQualificado'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 17
    }
  }, "Sou um investidor qualificado")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-5",
    checked: state.checkedModalInvestirConcordo,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e);
    },
    name: "concordo_termos",
    color: "primary",
    inputProps: {
      'aria-label': 'checkedModalInvestirConcordo'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 17
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "modal-label",
    target: "_blank",
    style: {
      marginLeft: "6px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 19
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 11
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 13
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_16__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 13
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalEnviado,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 11
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 13
    }
  }, state.modalEnviadoMsg))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalErro,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 11
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 13
    }
  }, state.modalErroMsg)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fb1e7efd8e98dd56d4f7.hot-update.js.map