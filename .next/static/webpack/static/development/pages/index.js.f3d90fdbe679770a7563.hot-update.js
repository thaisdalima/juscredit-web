webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.4.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}
function charIsNumber(_char) {
  return !!(_char || '').match(/\d/);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;

    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;

    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator);
} //spilt a float number into different parts beforeDecimal, afterDecimal, and negation

function splitDecimal(numStr) {
  var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');
  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';
  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';
  return "".concat(isNegative ? '-' : '').concat(beforeDecimal).concat(afterDecimal ? ".".concat(afterDecimal) : '');
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */

function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';

  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }

  return str;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */

function roundToPrecision(numStr, scale, fixedDecimalScale) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) return numStr;
  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

  var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

  var roundedDecimalParts = parseFloat("0.".concat(afterDecimal || '0')).toFixed(scale).split('.');
  var intPart = beforeDecimal.split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }

    return current + roundedStr;
  }, roundedDecimalParts[0]);
  var decimalPart = limitToScale(roundedDecimalParts[1] || '', Math.min(scale, afterDecimal.length), fixedDecimalScale);
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return "".concat(negation).concat(intPart).concat(decimalSeparator).concat(decimalPart);
}
function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}
/** set the caret positon in an input field **/

function setCaretPosition(el, caretPos) {
  el.value = el.value; // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)

  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    } // (el.selectionStart === 0 added for Firefox bug)


    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    } // fail city, fortunately this never happens (as far as I've tested) :)


    el.focus();
    return false;
  }
}
/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/

function findChangedIndex(prevValue, newValue) {
  var i = 0,
      j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;

  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  } //check what has been changed from last


  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }

  return {
    start: i,
    end: prevLength - j
  };
}
/*
  Returns a number whose value is limited to the given range
*/

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function getCurrentCaretPosition(el) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

var propTypes$1 = {
  thousandSeparator: propTypes.oneOfType([propTypes.string, propTypes.oneOf([true])]),
  decimalSeparator: propTypes.string,
  allowedDecimalSeparators: propTypes.arrayOf(propTypes.string),
  thousandsGroupStyle: propTypes.oneOf(['thousand', 'lakh', 'wan']),
  decimalScale: propTypes.number,
  fixedDecimalScale: propTypes.bool,
  displayType: propTypes.oneOf(['input', 'text']),
  prefix: propTypes.string,
  suffix: propTypes.string,
  format: propTypes.oneOfType([propTypes.string, propTypes.func]),
  removeFormatting: propTypes.func,
  mask: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
  isNumericString: propTypes.bool,
  customInput: propTypes.elementType,
  allowNegative: propTypes.bool,
  allowEmptyFormatting: propTypes.bool,
  allowLeadingZeros: propTypes.bool,
  onValueChange: propTypes.func,
  onKeyDown: propTypes.func,
  onMouseUp: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  type: propTypes.oneOf(['text', 'tel', 'password']),
  isAllowed: propTypes.func,
  renderText: propTypes.func,
  getInputRef: propTypes.oneOfType([propTypes.func, // for legacy refs
  propTypes.shape({
    current: propTypes.any
  })])
};
var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue
};

var NumberFormat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberFormat, _React$Component);

  function NumberFormat(props) {
    var _this;

    _classCallCheck(this, NumberFormat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberFormat).call(this, props));
    var defaultValue = props.defaultValue; //validate props

    _this.validateProps();

    var formattedValue = _this.formatValueProp(defaultValue);

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };
    _this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumberFormat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: "updateValueIfRequired",
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state,
          focusedElm = this.focusedElm;
      var stateValue = state.value,
          _state$numAsString = state.numAsString,
          lastNumStr = _state$numAsString === void 0 ? '' : _state$numAsString; // If only state changed no need to do any thing

      if (prevProps !== props) {
        //validate props
        this.validateProps();
        var lastValueWithNewFormat = this.formatNumString(lastNumStr);
        var formattedValue = props.value === undefined ? lastValueWithNewFormat : this.formatValueProp();
        var numAsString = this.removeFormatting(formattedValue);
        var floatValue = parseFloat(numAsString);
        var lastFloatValue = parseFloat(lastNumStr);

        if ( //while typing set state only when float value changes
        (!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue || //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue || //set state always when not in focus and formatted value is changed
        focusedElm === null && formattedValue !== stateValue) {
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: focusedElm
          });
        }
      }
    }
    /** Misc methods **/

  }, {
    key: "getFloatString",
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decimalScale = this.props.decimalScale;

      var _this$getSeparators = this.getSeparators(),
          decimalSeparator = _this$getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true); //remove negation for regex check

      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', ''); //if decimal scale is zero remove decimal and number after decimalSeparator

      if (decimalSeparator && decimalScale === 0) {
        num = num.split(decimalSeparator)[0];
      }

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.'); //remove extra decimals

      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = "".concat(num.substring(0, firstDecimalIndex), ".").concat(num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
      } //add negation back


      if (hasNegation) num = '-' + num;
      return num;
    } //returned regex assumes decimalSeparator is as per prop

  }, {
    key: "getNumberRegex",
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _this$props = this.props,
          format = _this$props.format,
          decimalScale = _this$props.decimalScale;

      var _this$getSeparators2 = this.getSeparators(),
          decimalSeparator = _this$getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + escapeRegExp(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: "getSeparators",
    value: function getSeparators() {
      var decimalSeparator = this.props.decimalSeparator;
      var _this$props2 = this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          allowedDecimalSeparators = _this$props2.allowedDecimalSeparators;

      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators
      };
    }
  }, {
    key: "getMaskAtIndex",
    value: function getMaskAtIndex(index) {
      var _this$props$mask = this.props.mask,
          mask = _this$props$mask === void 0 ? ' ' : _this$props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: "getValueObject",
    value: function getValueObject(formattedValue, numAsString) {
      var floatValue = parseFloat(numAsString);
      return {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: isNaN(floatValue) ? undefined : floatValue
      };
    }
  }, {
    key: "validateProps",
    value: function validateProps() {
      var mask = this.props.mask; //validate decimalSeparator and thousandSeparator

      var _this$getSeparators3 = this.getSeparators(),
          decimalSeparator = _this$getSeparators3.decimalSeparator,
          thousandSeparator = _this$getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(thousandSeparator, " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: ").concat(decimalSeparator, " (default value for decimalSeparator is .)\n       "));
      } //validate mask


      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();

        if (maskAsStr.match(/\d/g)) {
          throw new Error("\n          Mask ".concat(mask, " should not contain numeric character;\n        "));
        }
      }
    }
    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: "setPatchedCaretPosition",
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      setCaretPosition(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) setCaretPosition(el, caretPos);
      }, 0);
    }
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: "correctCaretPosition",
    value: function correctCaretPosition(value, caretPos, direction) {
      var _this$props3 = this.props,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          format = _this$props3.format; //if value is empty return 0

      if (value === '') return 0; //caret position should be between 0 and value length

      caretPos = clamp(caretPos, 0, value.length); //in case of format as number limit between prefix and suffix

      if (!format) {
        var hasNegation = value[0] === '-';
        return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
      } //in case if custom format method don't do anything


      if (typeof format === 'function') return caretPos;
      /* in case format is string find the closest # position from the caret position */
      //in case the caretPos have input value on it don't do anything

      if (format[caretPos] === '#' && charIsNumber(value[caretPos])) return caretPos; //if caretPos is just after input value don't do anything

      if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) return caretPos; //find the nearest caret position

      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#'); //limit the cursor between the first # position and the last # position

      caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);
      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos); //get the position where the last number is present

      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !charIsNumber(value[caretRightBound]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBound - caretPos;

      if (goToLeft) {
        //check if number should be taken after the bound or after it
        //if number preceding a valid number keep it after
        return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
      }

      return caretRightBound;
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;
      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j, i;
      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || ''; //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123

        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue; //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;

        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue; //we are not using currentFormatChar because j can change here

        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }

        j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      } //correct caret position if its outside of editable area


      j = this.correctCaretPosition(formattedValue, j);
      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: "removePrefixAndSuffix",
    value: function removePrefixAndSuffix(val) {
      var _this$props4 = this.props,
          format = _this$props4.format,
          prefix = _this$props4.prefix,
          suffix = _this$props4.suffix; //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-'; //remove negation sign

        if (isNegative) val = val.substring(1, val.length); //remove prefix

        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val; //remove suffix

        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val; //add negation sign back

        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: "removePatternFormatting",
    value: function removePatternFormatting(val) {
      var format = this.props.format;
      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || ''; //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##

        var index = i === ln ? val.length : val.indexOf(part, start);
        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */

        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: "removeFormatting",
    value: function removeFormatting(val) {
      var _this$props5 = this.props,
          format = _this$props5.format,
          removeFormatting = _this$props5.removeFormatting;
      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }

      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/

    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: "formatWithPattern",
    value: function formatWithPattern(numStr) {
      var format = this.props.format;
      var hashCount = 0;
      var formattedNumberAry = format.split('');

      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }

      return formattedNumberAry.join('');
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: "formatAsNumber",
    value: function formatAsNumber(numStr) {
      var _this$props6 = this.props,
          decimalScale = _this$props6.decimalScale,
          fixedDecimalScale = _this$props6.fixedDecimalScale,
          prefix = _this$props6.prefix,
          suffix = _this$props6.suffix,
          allowNegative = _this$props6.allowNegative,
          thousandsGroupStyle = _this$props6.thousandsGroupStyle;

      var _this$getSeparators4 = this.getSeparators(),
          thousandSeparator = _this$getSeparators4.thousandSeparator,
          decimalSeparator = _this$getSeparators4.decimalSeparator;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = splitDecimal(numStr, allowNegative),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const
      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
      } //add prefix and suffix


      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix; //restore negation sign

      if (addNegation) beforeDecimal = '-' + beforeDecimal;
      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;
      return numStr;
    }
  }, {
    key: "formatNumString",
    value: function formatNumString() {
      var numStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props7 = this.props,
          format = _this$props7.format,
          allowEmptyFormatting = _this$props7.allowEmptyFormatting;
      var formattedValue = numStr;

      if (numStr === '' && !allowEmptyFormatting) {
        formattedValue = '';
      } else if (numStr === '-' && !format) {
        formattedValue = '-';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: "formatValueProp",
    value: function formatValueProp(defaultValue) {
      var _this$props8 = this.props,
          format = _this$props8.format,
          decimalScale = _this$props8.decimalScale,
          fixedDecimalScale = _this$props8.fixedDecimalScale,
          allowEmptyFormatting = _this$props8.allowEmptyFormatting;
      var _this$props9 = this.props,
          _this$props9$value = _this$props9.value,
          value = _this$props9$value === void 0 ? defaultValue : _this$props9$value,
          isNumericString = _this$props9.isNumericString;
      var isNonNumericFalsy = !value && value !== 0;

      if (isNonNumericFalsy && allowEmptyFormatting) {
        value = '';
      } // if value is not defined return empty string


      if (isNonNumericFalsy && !allowEmptyFormatting) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      } //change infinity value to empty string


      if (value === 'Infinity' && isNumericString) {
        value = '';
      } //round the number based on decimalScale
      //format only if non formatted value is provided


      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = roundToPrecision(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);
      return formattedValue;
    }
  }, {
    key: "formatNegation",
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;
      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)'); // Check number has '-' value

      var hasNegation = negationRegex.test(value); // Check number has 2 or more '-' values

      var removeNegation = doubleNegationRegex.test(value); //remove negation

      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: "formatInput",
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format; //format negation only if we are formatting as number

      if (!format) {
        value = this.removePrefixAndSuffix(value);
        value = this.formatNegation(value);
      } //remove formatting from number


      value = this.removeFormatting(value);
      return this.formatNumString(value);
    }
    /*** format specific methods end ***/

  }, {
    key: "isCharacterAFormat",
    value: function isCharacterAFormat(caretPos, value) {
      var _this$props10 = this.props,
          format = _this$props10.format,
          prefix = _this$props10.prefix,
          suffix = _this$props10.suffix,
          decimalScale = _this$props10.decimalScale,
          fixedDecimalScale = _this$props10.fixedDecimalScale;

      var _this$getSeparators5 = this.getSeparators(),
          decimalSeparator = _this$getSeparators5.decimalSeparator; //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true; //check in number format

      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: "checkIfFormatGotDeleted",
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }

      return false;
    }
    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: "correctInputValue",
    value: function correctInputValue(caretPos, lastValue, value) {
      var _this$props11 = this.props,
          format = _this$props11.format,
          allowNegative = _this$props11.allowNegative,
          prefix = _this$props11.prefix,
          suffix = _this$props11.suffix,
          decimalScale = _this$props11.decimalScale;

      var _this$getSeparators6 = this.getSeparators(),
          allowedDecimalSeparators = _this$getSeparators6.allowedDecimalSeparators,
          decimalSeparator = _this$getSeparators6.decimalSeparator;

      var lastNumStr = this.state.numAsString || '';
      var _this$selectionBefore = this.selectionBeforeInput,
          selectionStart = _this$selectionBefore.selectionStart,
          selectionEnd = _this$selectionBefore.selectionEnd;

      var _findChangedIndex = findChangedIndex(lastValue, value),
          start = _findChangedIndex.start,
          end = _findChangedIndex.end;
      /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */


      if (!format && start === end && allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        return value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length);
      }
      /* don't do anyhting if something got added,
       or if value is empty string (when whole input is cleared)
       or whole input is replace with a number
      */


      var leftBound = !!format ? 0 : prefix.length;
      var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

      if (value.length > lastValue.length || !value.length || start === end || selectionStart === 0 && selectionEnd === lastValue.length || selectionStart === leftBound && selectionEnd === rightBound) {
        return value;
      } //if format got deleted reset the value to last value


      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      } //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign


      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = splitDecimal(numericString, allowNegative),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const
        //clear only if something got deleted


        var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;

        if (numericString.length < lastNumStr.length && isBeforeDecimalPoint && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
    /** Update value and caret position */

  }, {
    key: "updateValue",
    value: function updateValue(params) {
      var formattedValue = params.formattedValue,
          input = params.input,
          _params$setCaretPosit = params.setCaretPosition,
          setCaretPosition = _params$setCaretPosit === void 0 ? true : _params$setCaretPosit;
      var numAsString = params.numAsString,
          caretPos = params.caretPos;
      var onValueChange = this.props.onValueChange;
      var lastValue = this.state.value;

      if (input) {
        //set caret position, and value imperatively when element is provided
        if (setCaretPosition) {
          //calculate caret position if not defined
          if (!caretPos) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = getCurrentCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */

            input.value = formattedValue; //get the caret position

            caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
          } //set caret position


          this.setPatchedCaretPosition(input, caretPos, formattedValue);
        } else {
          /**
           * if we are not setting caret position set the value imperatively.
           * This is required on onBlur method
           */
          input.value = formattedValue;
        }
      } //calculate numeric string if not passed


      if (numAsString === undefined) {
        numAsString = this.removeFormatting(formattedValue);
      } //update state if value is changed


      if (formattedValue !== lastValue) {
        this.setState({
          value: formattedValue,
          numAsString: numAsString
        }); // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287

        onValueChange(this.getValueObject(formattedValue, numAsString));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;
      var lastValue = state.value || '';
      var currentCaretPosition = getCurrentCaretPosition(el);
      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);
      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);
      var valueObj = this.getValueObject(formattedValue, numAsString);

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      this.updateValue({
        formattedValue: formattedValue,
        numAsString: numAsString,
        inputValue: inputValue,
        input: el
      });
      props.onChange(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur,
          allowLeadingZeros = props.allowLeadingZeros;
      var numAsString = state.numAsString;
      var lastValue = state.value;
      this.focusedElm = null;

      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }

      if (!format) {
        // if the numAsString is not a valid number reset it to empty
        if (isNaN(parseFloat(numAsString))) {
          numAsString = '';
        }

        if (!allowLeadingZeros) {
          numAsString = fixLeadingZero(numAsString);
        }

        var formattedValue = this.formatNumString(numAsString); //change the state

        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: e.target,
            setCaretPosition: false
          });
          onBlur(e);
          return;
        }
      }

      onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value = el.value,
          value = _el$value === void 0 ? '' : _el$value;
      var expectedCaretPosition;
      var _this$props12 = this.props,
          decimalScale = _this$props12.decimalScale,
          fixedDecimalScale = _this$props12.fixedDecimalScale,
          prefix = _this$props12.prefix,
          suffix = _this$props12.suffix,
          format = _this$props12.format,
          onKeyDown = _this$props12.onKeyDown;
      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';
      this.selectionBeforeInput = {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }; //Handle backspace and delete against non numerical/decimal characters or arrow keys

      if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      } //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle


      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
        /* NOTE: This is special case when backspace is pressed on a
        negative value while the cursor position is after prefix. We can't handle it on onChange because
        we will not have any information of keyPress
        */
        if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
          var newValue = value.substring(1);
          this.updateValue({
            formattedValue: newValue,
            caretPos: newCaretPosition,
            input: el
          });
        } else if (!negativeRegex.test(value[expectedCaretPosition])) {
          while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
            newCaretPosition--;
          }

          newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
        }
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }
      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */


      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      onKeyDown(e);
    }
    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      var el = e.target;
      /**
       * NOTE: we have to give default value for value as in case when custom input is provided
       * value can come as undefined when nothing is provided on value prop.
      */

      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value2 = el.value,
          value = _el$value2 === void 0 ? '' : _el$value2;

      if (selectionStart === selectionEnd) {
        var caretPosition = this.correctCaretPosition(value, selectionStart);

        if (caretPosition !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPosition, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this2 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      this.focusedElm = e.target;
      this.focusTimeout = setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value3 = el.value,
            value = _el$value3 === void 0 ? '' : _el$value3;

        var caretPosition = _this2.correctCaretPosition(value, selectionStart); //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)


        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          _this2.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this2.props.onFocus(e);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          type = _this$props13.type,
          displayType = _this$props13.displayType,
          customInput = _this$props13.customInput,
          renderText = _this$props13.renderText,
          getInputRef = _this$props13.getInputRef;
      var value = this.state.value;
      var otherProps = omit(this.props, propTypes$1);

      var inputProps = _extends({
        inputMode: 'numeric'
      }, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, otherProps, {
          ref: getInputRef
        }), value);
      } else if (customInput) {
        var CustomInput = customInput;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomInput, _extends({}, inputProps, {
          ref: getInputRef
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, inputProps, {
        ref: getInputRef
      }));
    }
  }]);

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

NumberFormat.propTypes = propTypes$1;
NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ }),

/***/ "./node_modules/react-text-mask/dist/reactTextMask.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./pages/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../api */ "./api.js");





var _jsxFileName = "D:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















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
    title: '',
    email: '',
    phone: '',
    concordo_termos: '',
    investidor_qualificado: ''
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(INITIAL_FORM),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      parceiroValues = _React$useState6[0],
      setParceiroValue = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      modalIndicarState = _React$useState8[0],
      setIndicarOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      modalAnteciparState = _React$useState10[0],
      setAnteciparOpen = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      modalInvestirState = _React$useState12[0],
      setInvestirOpen = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      modalEnviado = _React$useState14[0],
      setFeedbackEnviado = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      modalErro = _React$useState16[0],
      setFeedbackErro = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState("cliente"),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState17, 2),
      profile = _React$useState18[0],
      setProfile = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState19, 2),
      selectProfile = _React$useState20[0],
      setSelectProfile = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState21, 2),
      originPath = _React$useState22[0],
      setOriginPath = _React$useState22[1];

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

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
      title: '',
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
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.checked)));
  };

  var atualizaFormValues = function atualizaFormValues(event, formItem) {
    setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, formItem, event)));
  };

  var getParceiroValue = function getParceiroValue(event, formItem) {
    setParceiroValue(_objectSpread({}, parceiroValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, formItem, event)));
  };

  var isEnabled = function isEnabled() {
    for (var key in formValues) {
      if (formValues["account_type"] !== "i") {
        formValues["investidor_qualificado"] = null;
      }

      if (formValues["account_type"] !== "c") {
        formValues["title"] = null;
      }

      if (formValues[key] != "") {} else {
        return true;
      }
    }
  };

  var handleSubmit = function handleSubmit(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      console.log(response);
      handleClose();
      setFeedbackEnviado(true);
    })["catch"](function (error) {
      console.log(error);
      handleClose();
      setFeedbackErro(true);
    });
  };

  var handleSubmitParceiro = function handleSubmitParceiro(reqURL, reqBody) {
    axios.post(reqURL, reqBody).then(function (response) {
      console.log(response);
      handleClose();
    })["catch"](function (error) {
      console.log(error);
      handleClose();
    });
  };

  function ProcessoFormat(props) {
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["inputRef", "onChange"]);

    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
      getInputRef: inputRef,
      format: "#######-##.####.#.##.########",
      allowEmptyFormatting: true,
      isNumericString: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }
    }));
  }

  ProcessoFormat.propTypes = {
    inputRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  };
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setOriginPath(window.location.origin);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, "JusCredit")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
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
      lineNumber: 222,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
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
      lineNumber: 232,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
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
      lineNumber: 241,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 27
    }
  }, "Receba diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
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
      lineNumber: 270,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 19
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
      lineNumber: 281,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o e inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 27
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
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
      lineNumber: 292,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 21
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
      lineNumber: 321,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
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
      lineNumber: 335,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 21
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
      lineNumber: 351,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 21
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
      lineNumber: 365,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 9
    }
  }, "Seja parceiro!"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    autoFocus: true,
    id: "name",
    label: "Email @",
    type: "mail",
    variant: "outlined",
    onChange: function onChange(e) {
      getParceiroValue(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick(e) {
      handleSubmitParceiro("https://api-dot-juscredit-hml.ue.r.appspot.com/api/v1/sendmailpartner", parceiroValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-0",
    label: "Nome completo",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-1",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e.target.value, 'person_type');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    InputProps: {
      inputComponent: ProcessoFormat
    },
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'title');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-3",
    label: "Email",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'phone');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "modalFieldAntecipar-5",
    checked: state.checkedModalAntecipe,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'concordo_termos');
    },
    name: "checkedModalAntecipe",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Antecipe'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 15
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
      lineNumber: 469,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_19__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 9
    }
  }, "Invista em cr\xE9ditos trabalhistas"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-0",
    label: "Nome completo",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'full_name');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-1",
    label: "Email",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'email');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined",
    onChange: function onChange(e) {
      atualizaFormValues(e.target.value, 'phone');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "modalFieldInvestir-3",
    select: true,
    label: "Tipo de Pessoa",
    variant: "outlined",
    value: selectProfile,
    onChange: function onChange(e) {
      handleChangeSelect(e);
      atualizaFormValues(e.target.value, 'person_type');
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "modalFieldInvestir-4",
    checked: state.checkedModalInvestirQualificado,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'investidor_qualificado');
    },
    name: "checkedModalInvestirQualificado",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado,")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "modalFieldInvestir-5",
    checked: state.checkedModalInvestirConcordo,
    onChange: function onChange(e) {
      handleChangeCheckbox(e);
      atualizaFormValues(e.target.checked, 'concordo_termos');
    },
    name: "checkedModalInvestirConcordo",
    color: "primary",
    inputProps: {
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 15
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
      lineNumber: 551,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: isEnabled(),
    onClick: function onClick(e) {
      handleSubmit("".concat(_api__WEBPACK_IMPORTED_MODULE_19__["default"], "user"), formValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalEnviado,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_14__["default"], {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 11
    }
  }, "Seu cadastro foi iniciado, ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 40
    }
  }, "verifique seu email"), " para conclui-lo e iniciar seus investimentos em nossa plataforma!"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: modalErro,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_14__["default"], {
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 11
    }
  }, "Houve um problema, tente novamente mais tarde."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f3d90fdbe679770a7563.hot-update.js.map