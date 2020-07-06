webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function defer(fn) {
  return requestAnimationFrame(fn);
}
function cancelDefer(deferId) {
  cancelAnimationFrame(deferId);
}

function setInputSelection(input, start, end) {
  if (end === undefined) {
    end = start;
  }

  input.setSelectionRange(start, end);
}
function getInputSelection(input) {
  var start = input.selectionStart;
  var end = input.selectionEnd;
  return {
    start: start,
    end: end,
    length: end - start
  };
}
function isInputFocused(input) {
  var inputDocument = input.ownerDocument;
  return inputDocument.hasFocus() && inputDocument.activeElement === input;
}

// Element's window may differ from the one within React instance
// if element rendered within iframe.
// See https://github.com/sanniassin/react-input-mask/issues/182
function getElementDocument(element) {
  return element == null ? void 0 : element.ownerDocument;
}
function getElementWindow(element) {
  var _getElementDocument;

  return (_getElementDocument = getElementDocument(element)) == null ? void 0 : _getElementDocument.defaultView;
}
function isDOMElement(element) {
  var elementWindow = getElementWindow(element);
  return !!elementWindow && element instanceof elementWindow.HTMLElement;
}
function isFunction(value) {
  return typeof value === "function";
}
function findLastIndex(array, predicate) {
  for (var i = array.length - 1; i >= 0; i--) {
    var x = array[i];

    if (predicate(x, i)) {
      return i;
    }
  }

  return -1;
}
function repeat(string, n) {
  if (n === void 0) {
    n = 1;
  }

  var result = "";

  for (var i = 0; i < n; i++) {
    result += string;
  }

  return result;
}
function toString(value) {
  return "" + value;
}

function useInputElement(inputRef) {
  return React.useCallback(function () {
    var input = inputRef.current;
    var isDOMNode = typeof window !== "undefined" && isDOMElement(input); // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!input || !isDOMNode) {
      return null;
    }

    if (input.nodeName !== "INPUT") {
      input = input.querySelector("input");
    }

    if (!input) {
      throw new Error("react-input-mask: inputComponent doesn't contain input node");
    }

    return input;
  }, [inputRef]);
}

function useDeferLoop(callback) {
  var deferIdRef = React.useRef(null);
  var runLoop = React.useCallback(function () {
    // If there are simulated focus events, runLoop could be
    // called multiple times without blur or re-render
    if (deferIdRef.current !== null) {
      return;
    }

    function loop() {
      callback();
      deferIdRef.current = defer(loop);
    }

    loop();
  }, [callback]);
  var stopLoop = React.useCallback(function () {
    cancelDefer(deferIdRef.current);
    deferIdRef.current = null;
  }, []);
  React.useEffect(function () {
    if (deferIdRef.current) {
      stopLoop();
      runLoop();
    }
  }, [runLoop, stopLoop]);
  React.useEffect(cancelDefer, []);
  return [runLoop, stopLoop];
}

function useSelection(inputRef, isMasked) {
  var selectionRef = React.useRef({
    start: null,
    end: null
  });
  var getInputElement = useInputElement(inputRef);
  var getSelection = React.useCallback(function () {
    var input = getInputElement();
    return getInputSelection(input);
  }, [getInputElement]);
  var getLastSelection = React.useCallback(function () {
    return selectionRef.current;
  }, []);
  var setSelection = React.useCallback(function (selection) {
    var input = getInputElement(); // Don't change selection on unfocused input
    // because Safari sets focus on selection change (#154)

    if (!input || !isInputFocused(input)) {
      return;
    }

    setInputSelection(input, selection.start, selection.end); // Use actual selection in case the requested one was out of range

    selectionRef.current = getSelection();
  }, [getInputElement, getSelection]);
  var selectionLoop = React.useCallback(function () {
    selectionRef.current = getSelection();
  }, [getSelection]);

  var _useDeferLoop = useDeferLoop(selectionLoop),
      runSelectionLoop = _useDeferLoop[0],
      stopSelectionLoop = _useDeferLoop[1];

  React.useLayoutEffect(function () {
    if (!isMasked) {
      return;
    }

    var input = getInputElement();
    input.addEventListener("focus", runSelectionLoop);
    input.addEventListener("blur", stopSelectionLoop);

    if (isInputFocused(input)) {
      runSelectionLoop();
    }

    return function () {
      input.removeEventListener("focus", runSelectionLoop);
      input.removeEventListener("blur", stopSelectionLoop);
      stopSelectionLoop();
    };
  });
  return {
    getSelection: getSelection,
    getLastSelection: getLastSelection,
    setSelection: setSelection
  };
}

function useValue(inputRef, initialValue) {
  var getInputElement = useInputElement(inputRef);
  var valueRef = React.useRef(initialValue);
  var getValue = React.useCallback(function () {
    var input = getInputElement();
    return input.value;
  }, [getInputElement]);
  var getLastValue = React.useCallback(function () {
    return valueRef.current;
  }, []);
  var setValue = React.useCallback(function (newValue) {
    valueRef.current = newValue;
    var input = getInputElement();

    if (input) {
      input.value = newValue;
    }
  }, [getInputElement]);
  return {
    getValue: getValue,
    getLastValue: getLastValue,
    setValue: setValue
  };
}

function useInputState(initialValue, isMasked) {
  var inputRef = React.useRef();

  var _useSelection = useSelection(inputRef, isMasked),
      getSelection = _useSelection.getSelection,
      getLastSelection = _useSelection.getLastSelection,
      setSelection = _useSelection.setSelection;

  var _useValue = useValue(inputRef, initialValue),
      getValue = _useValue.getValue,
      getLastValue = _useValue.getLastValue,
      setValue = _useValue.setValue;

  function getLastInputState() {
    return {
      value: getLastValue(),
      selection: getLastSelection()
    };
  }

  function getInputState() {
    return {
      value: getValue(),
      selection: getSelection()
    };
  }

  function setInputState(_ref) {
    var value = _ref.value,
        selection = _ref.selection;
    setValue(value);
    setSelection(selection);
  }

  return {
    inputRef: inputRef,
    getInputState: getInputState,
    getLastInputState: getLastInputState,
    setInputState: setInputState
  };
}
function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var CONTROLLED_PROPS = ["disabled", "onBlur", "onChange", "onFocus", "onMouseDown", "readOnly", "value"];
var defaultFormatChars = {
  "9": /[0-9]/,
  a: /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};

function validateMaxLength(props) {
   true ? warning(!props.maxLength || !props.mask, "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.") : undefined;
}
function validateMaskPlaceholder(props) {
  var mask = props.mask,
      maskPlaceholder = props.maskPlaceholder;
  !(!mask || !maskPlaceholder || maskPlaceholder.length === 1 || maskPlaceholder.length === mask.length) ?  true ? invariant(false, "react-input-mask: maskPlaceholder should either be a single character or have the same length as the mask:\n" + ("mask: " + mask + "\n") + ("maskPlaceholder: " + maskPlaceholder)) : undefined : void 0;
}
function validateChildren(props, inputElement) {
  var conflictProps = CONTROLLED_PROPS.filter(function (propId) {
    return inputElement.props[propId] != null && inputElement.props[propId] !== props[propId];
  });
  !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the InputMask component, not to children: " + conflictProps.join(",")) : undefined : void 0;
}

function parseMask (_ref) {
  var mask = _ref.mask,
      maskPlaceholder = _ref.maskPlaceholder;
  var permanents = [];

  if (!mask) {
    return {
      maskPlaceholder: null,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  if (typeof mask === "string") {
    var isPermanent = false;
    var parsedMaskString = "";
    mask.split("").forEach(function (character) {
      if (!isPermanent && character === "\\") {
        isPermanent = true;
      } else {
        if (isPermanent || !defaultFormatChars[character]) {
          permanents.push(parsedMaskString.length);
        }

        parsedMaskString += character;
        isPermanent = false;
      }
    });
    mask = parsedMaskString.split("").map(function (character, index) {
      if (permanents.indexOf(index) === -1) {
        return defaultFormatChars[character];
      }

      return character;
    });
  } else {
    mask.forEach(function (character, index) {
      if (typeof character === "string") {
        permanents.push(index);
      }
    });
  }

  if (maskPlaceholder) {
    if (maskPlaceholder.length === 1) {
      maskPlaceholder = mask.map(function (character, index) {
        if (permanents.indexOf(index) !== -1) {
          return character;
        }

        return maskPlaceholder;
      });
    } else {
      maskPlaceholder = maskPlaceholder.split("");
    }

    permanents.forEach(function (position) {
      maskPlaceholder[position] = mask[position];
    });
    maskPlaceholder = maskPlaceholder.join("");
  }

  var prefix = permanents.filter(function (position, index) {
    return position === index;
  }).map(function (position) {
    return mask[position];
  }).join("");
  var lastEditablePosition = mask.length - 1;

  while (permanents.indexOf(lastEditablePosition) !== -1) {
    lastEditablePosition--;
  }

  return {
    maskPlaceholder: maskPlaceholder,
    prefix: prefix,
    mask: mask,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */

var MaskUtils = function MaskUtils(options) {
  var _this = this;

  this.isCharacterAllowedAtPosition = function (character, position) {
    var maskPlaceholder = _this.maskOptions.maskPlaceholder;

    if (_this.isCharacterFillingPosition(character, position)) {
      return true;
    }

    if (!maskPlaceholder) {
      return false;
    }

    return maskPlaceholder[position] === character;
  };

  this.isCharacterFillingPosition = function (character, position) {
    var mask = _this.maskOptions.mask;

    if (!character || position >= mask.length) {
      return false;
    }

    if (!_this.isPositionEditable(position)) {
      return mask[position] === character;
    }

    var charRule = mask[position];
    return new RegExp(charRule).test(character);
  };

  this.isPositionEditable = function (position) {
    var _this$maskOptions = _this.maskOptions,
        mask = _this$maskOptions.mask,
        permanents = _this$maskOptions.permanents;
    return position < mask.length && permanents.indexOf(position) === -1;
  };

  this.isValueEmpty = function (value) {
    return value.split("").every(function (character, position) {
      return !_this.isPositionEditable(position) || !_this.isCharacterFillingPosition(character, position);
    });
  };

  this.isValueFilled = function (value) {
    return _this.getFilledLength(value) === _this.maskOptions.lastEditablePosition + 1;
  };

  this.getDefaultSelectionForValue = function (value) {
    var filledLength = _this.getFilledLength(value);

    var cursorPosition = _this.getRightEditablePosition(filledLength);

    return {
      start: cursorPosition,
      end: cursorPosition
    };
  };

  this.getFilledLength = function (value) {
    var characters = value.split("");
    var lastFilledIndex = findLastIndex(characters, function (character, position) {
      return _this.isPositionEditable(position) && _this.isCharacterFillingPosition(character, position);
    });
    return lastFilledIndex + 1;
  };

  this.getStringFillingLengthAtPosition = function (string, position) {
    var characters = string.split("");
    var insertedValue = characters.reduce(function (value, character) {
      return _this.insertCharacterAtPosition(value, character, value.length);
    }, repeat(" ", position));
    return insertedValue.length - position;
  };

  this.getLeftEditablePosition = function (position) {
    for (var i = position; i >= 0; i--) {
      if (_this.isPositionEditable(i)) {
        return i;
      }
    }

    return null;
  };

  this.getRightEditablePosition = function (position) {
    var mask = _this.maskOptions.mask;

    for (var i = position; i < mask.length; i++) {
      if (_this.isPositionEditable(i)) {
        return i;
      }
    }

    return null;
  };

  this.formatValue = function (value) {
    var _this$maskOptions2 = _this.maskOptions,
        maskPlaceholder = _this$maskOptions2.maskPlaceholder,
        mask = _this$maskOptions2.mask;

    if (!maskPlaceholder) {
      value = _this.insertStringAtPosition("", value, 0);

      while (value.length < mask.length && !_this.isPositionEditable(value.length)) {
        value += mask[value.length];
      }

      return value;
    }

    return _this.insertStringAtPosition(maskPlaceholder, value, 0);
  };

  this.clearRange = function (value, start, len) {
    if (!len) {
      return value;
    }

    var end = start + len;
    var _this$maskOptions3 = _this.maskOptions,
        maskPlaceholder = _this$maskOptions3.maskPlaceholder,
        mask = _this$maskOptions3.mask;
    var clearedValue = value.split("").map(function (character, i) {
      var isEditable = _this.isPositionEditable(i);

      if (!maskPlaceholder && i >= end && !isEditable) {
        return "";
      }

      if (i < start || i >= end) {
        return character;
      }

      if (!isEditable) {
        return mask[i];
      }

      if (maskPlaceholder) {
        return maskPlaceholder[i];
      }

      return "";
    }).join("");
    return _this.formatValue(clearedValue);
  };

  this.insertCharacterAtPosition = function (value, character, position) {
    var _this$maskOptions4 = _this.maskOptions,
        mask = _this$maskOptions4.mask,
        maskPlaceholder = _this$maskOptions4.maskPlaceholder;

    if (position >= mask.length) {
      return value;
    }

    var isAllowed = _this.isCharacterAllowedAtPosition(character, position);

    var isEditable = _this.isPositionEditable(position);

    var nextEditablePosition = _this.getRightEditablePosition(position);

    var isNextPlaceholder = maskPlaceholder && nextEditablePosition ? character === maskPlaceholder[nextEditablePosition] : null;
    var valueBefore = value.slice(0, position);

    if (isAllowed || !isEditable) {
      var insertedCharacter = isAllowed ? character : mask[position];
      value = valueBefore + insertedCharacter;
    }

    if (!isAllowed && !isEditable && !isNextPlaceholder) {
      value = _this.insertCharacterAtPosition(value, character, position + 1);
    }

    return value;
  };

  this.insertStringAtPosition = function (value, string, position) {
    var _this$maskOptions5 = _this.maskOptions,
        mask = _this$maskOptions5.mask,
        maskPlaceholder = _this$maskOptions5.maskPlaceholder;

    if (!string || position >= mask.length) {
      return value;
    }

    var characters = string.split("");
    var isFixedLength = _this.isValueFilled(value) || !!maskPlaceholder;
    var valueAfter = value.slice(position);
    value = characters.reduce(function (value, character) {
      return _this.insertCharacterAtPosition(value, character, value.length);
    }, value.slice(0, position));

    if (isFixedLength) {
      value += valueAfter.slice(value.length - position);
    } else if (_this.isValueFilled(value)) {
      value += mask.slice(value.length).join("");
    } else {
      var editableCharactersAfter = valueAfter.split("").filter(function (character, i) {
        return _this.isPositionEditable(position + i);
      });
      value = editableCharactersAfter.reduce(function (value, character) {
        var nextEditablePosition = _this.getRightEditablePosition(value.length);

        if (nextEditablePosition === null) {
          return value;
        }

        if (!_this.isPositionEditable(value.length)) {
          value += mask.slice(value.length, nextEditablePosition).join("");
        }

        return _this.insertCharacterAtPosition(value, character, value.length);
      }, value);
    }

    return value;
  };

  this.processChange = function (currentState, previousState) {
    var _this$maskOptions6 = _this.maskOptions,
        mask = _this$maskOptions6.mask,
        prefix = _this$maskOptions6.prefix,
        lastEditablePosition = _this$maskOptions6.lastEditablePosition;
    var value = currentState.value,
        selection = currentState.selection;
    var previousValue = previousState.value;
    var previousSelection = previousState.selection;
    var newValue = value;
    var enteredString = "";
    var formattedEnteredStringLength = 0;
    var removedLength = 0;
    var cursorPosition = Math.min(previousSelection.start, selection.start);

    if (selection.end > previousSelection.start) {
      enteredString = newValue.slice(previousSelection.start, selection.end);
      formattedEnteredStringLength = _this.getStringFillingLengthAtPosition(enteredString, cursorPosition);

      if (!formattedEnteredStringLength) {
        removedLength = 0;
      } else {
        removedLength = previousSelection.length;
      }
    } else if (newValue.length < previousValue.length) {
      removedLength = previousValue.length - newValue.length;
    }

    newValue = previousValue;

    if (removedLength) {
      if (removedLength === 1 && !previousSelection.length) {
        var deleteFromRight = previousSelection.start === selection.start;
        cursorPosition = deleteFromRight ? _this.getRightEditablePosition(selection.start) : _this.getLeftEditablePosition(selection.start);
      }

      newValue = _this.clearRange(newValue, cursorPosition, removedLength);
    }

    newValue = _this.insertStringAtPosition(newValue, enteredString, cursorPosition);
    cursorPosition += formattedEnteredStringLength;

    if (cursorPosition >= mask.length) {
      cursorPosition = mask.length;
    } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
      cursorPosition = prefix.length;
    } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
      cursorPosition = _this.getRightEditablePosition(cursorPosition);
    }

    newValue = _this.formatValue(newValue);
    return {
      value: newValue,
      enteredString: enteredString,
      selection: {
        start: cursorPosition,
        end: cursorPosition
      }
    };
  };

  this.maskOptions = parseMask(options);
};

var InputMaskChildrenWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputMaskChildrenWrapper, _React$Component);

  function InputMaskChildrenWrapper() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputMaskChildrenWrapper.prototype;

  _proto.render = function render() {
    // eslint-disable-next-line react/prop-types
    var _this$props = this.props,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return React__default.cloneElement(children, props);
  };

  return InputMaskChildrenWrapper;
}(React__default.Component);

var InputMask = React.forwardRef(function InputMask(props, forwardedRef) {
  var alwaysShowMask = props.alwaysShowMask,
      children = props.children,
      mask = props.mask,
      maskPlaceholder = props.maskPlaceholder,
      beforeMaskedStateChange = props.beforeMaskedStateChange,
      restProps = _objectWithoutPropertiesLoose(props, ["alwaysShowMask", "children", "mask", "maskPlaceholder", "beforeMaskedStateChange"]);

  validateMaxLength(props);
  validateMaskPlaceholder(props);
  var maskUtils = new MaskUtils({
    mask: mask,
    maskPlaceholder: maskPlaceholder
  });
  var isMasked = !!mask;
  var isEditable = !restProps.disabled && !restProps.readOnly;
  var isControlled = props.value !== null && props.value !== undefined;
  var previousIsMasked = usePrevious(isMasked);
  var initialValue = toString((isControlled ? props.value : props.defaultValue) || "");

  var _useInputState = useInputState(initialValue, isMasked),
      inputRef = _useInputState.inputRef,
      getInputState = _useInputState.getInputState,
      setInputState = _useInputState.setInputState,
      getLastInputState = _useInputState.getLastInputState;

  var getInputElement = useInputElement(inputRef);

  function onChange(event) {
    var currentState = getInputState();
    var previousState = getLastInputState();
    var newInputState = maskUtils.processChange(currentState, previousState);

    if (beforeMaskedStateChange) {
      newInputState = beforeMaskedStateChange({
        currentState: currentState,
        previousState: previousState,
        nextState: newInputState
      });
    }

    setInputState(newInputState);

    if (props.onChange) {
      props.onChange(event);
    }
  }

  function onFocus(event) {
    // If autoFocus property is set, focus event fires before the ref handler gets called
    inputRef.current = event.target;
    var currentValue = getInputState().value;

    if (isMasked && !maskUtils.isValueFilled(currentValue)) {
      var newValue = maskUtils.formatValue(currentValue);
      var newSelection = maskUtils.getDefaultSelectionForValue(newValue);
      var newInputState = {
        value: newValue,
        selection: newSelection
      };

      if (beforeMaskedStateChange) {
        newInputState = beforeMaskedStateChange({
          currentState: getInputState(),
          nextState: newInputState
        });
        newValue = newInputState.value;
        newSelection = newInputState.selection;
      }

      setInputState(newInputState);

      if (newValue !== currentValue && props.onChange) {
        props.onChange(event);
      } // Chrome resets selection after focus event,
      // so we want to restore it later


      defer(function () {
        setInputState(getLastInputState());
      });
    }

    if (props.onFocus) {
      props.onFocus(event);
    }
  }

  function onBlur(event) {
    var currentValue = getInputState().value;
    var lastValue = getLastInputState().value;

    if (isMasked && !alwaysShowMask && maskUtils.isValueEmpty(lastValue)) {
      var newValue = "";
      var newInputState = {
        value: newValue,
        selection: {
          start: null,
          end: null
        }
      };

      if (beforeMaskedStateChange) {
        newInputState = beforeMaskedStateChange({
          currentState: getInputState(),
          nextState: newInputState
        });
        newValue = newInputState.value;
      }

      setInputState(newInputState);

      if (newValue !== currentValue && props.onChange) {
        props.onChange(event);
      }
    }

    if (props.onBlur) {
      props.onBlur(event);
    }
  } // Tiny unintentional mouse movements can break cursor
  // position on focus, so we have to restore it in that case
  //
  // https://github.com/sanniassin/react-input-mask/issues/108


  function onMouseDown(event) {
    var input = getInputElement();

    var _getInputState = getInputState(),
        value = _getInputState.value;

    var inputDocument = getElementDocument(input);

    if (!isInputFocused(input) && !maskUtils.isValueFilled(value)) {
      var mouseDownX = event.clientX;
      var mouseDownY = event.clientY;
      var mouseDownTime = new Date().getTime();

      var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
        inputDocument.removeEventListener("mouseup", mouseUpHandler);

        if (!isInputFocused(input)) {
          return;
        }

        var deltaX = Math.abs(mouseUpEvent.clientX - mouseDownX);
        var deltaY = Math.abs(mouseUpEvent.clientY - mouseDownY);
        var axisDelta = Math.max(deltaX, deltaY);
        var timeDelta = new Date().getTime() - mouseDownTime;

        if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
          var _lastState = getLastInputState();

          var newSelection = maskUtils.getDefaultSelectionForValue(_lastState.value);

          var newState = _extends({}, _lastState, {
            selection: newSelection
          });

          setInputState(newState);
        }
      };

      inputDocument.addEventListener("mouseup", mouseUpHandler);
    }

    if (props.onMouseDown) {
      props.onMouseDown(event);
    }
  } // For controlled inputs we want to provide properly formatted
  // value prop


  if (isMasked && isControlled) {
    var input = getInputElement();
    var isFocused = input && isInputFocused(input);
    var newValue = isFocused || alwaysShowMask || props.value ? maskUtils.formatValue(props.value) : props.value;

    if (beforeMaskedStateChange) {
      newValue = beforeMaskedStateChange({
        nextState: {
          value: newValue,
          selection: {
            start: null,
            end: null
          }
        }
      }).value;
    }

    setInputState(_extends({}, getLastInputState(), {
      value: newValue
    }));
  }

  var lastState = getLastInputState();
  var lastSelection = lastState.selection;
  var lastValue = lastState.value;
  React.useLayoutEffect(function () {
    if (!isMasked) {
      return;
    }

    var input = getInputElement();
    var isFocused = isInputFocused(input);
    var previousSelection = lastSelection;
    var currentState = getInputState();

    var newInputState = _extends({}, currentState); // Update value for uncontrolled inputs to make sure
    // it's always in sync with mask props


    if (!isControlled) {
      var currentValue = currentState.value;
      var formattedValue = maskUtils.formatValue(currentValue);
      var isValueEmpty = maskUtils.isValueEmpty(formattedValue);
      var shouldFormatValue = !isValueEmpty || isFocused || alwaysShowMask;

      if (shouldFormatValue) {
        newInputState.value = formattedValue;
      } else if (isValueEmpty && !isFocused) {
        newInputState.value = "";
      }
    }

    if (isFocused && !previousIsMasked) {
      // Adjust selection if input got masked while being focused
      newInputState.selection = maskUtils.getDefaultSelectionForValue(newInputState.value);
    } else if (isControlled && isFocused && previousSelection) {
      // Restore cursor position if value has changed outside change event
      if (previousSelection.start !== null && previousSelection.end !== null) {
        newInputState.selection = previousSelection;
      }
    }

    if (beforeMaskedStateChange) {
      newInputState = beforeMaskedStateChange({
        currentState: currentState,
        nextState: newInputState
      });
    }

    setInputState(newInputState);
  });

  var inputProps = _extends({}, restProps, {
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: isMasked && isEditable ? onChange : props.onChange,
    onMouseDown: isMasked && isEditable ? onMouseDown : props.onMouseDown,
    ref: function ref(_ref) {
      inputRef.current = reactDom.findDOMNode(_ref);

      if (isFunction(forwardedRef)) {
        forwardedRef(_ref);
      } else if (forwardedRef !== null && typeof forwardedRef === "object") {
        forwardedRef.current = _ref;
      }
    },
    value: isMasked && isControlled ? lastValue : props.value
  });

  if (children) {
    validateChildren(props, children); // We wrap children into a class component to be able to find
    // their input element using findDOMNode

    return React__default.createElement(InputMaskChildrenWrapper, inputProps, children);
  }

  return React__default.createElement("input", inputProps);
});
InputMask.displayName = "InputMask";
InputMask.defaultProps = {
  alwaysShowMask: false,
  maskPlaceholder: "_"
};
InputMask.propTypes = {
  alwaysShowMask: PropTypes.bool,
  beforeMaskedStateChange: PropTypes.func,
  children: PropTypes.element,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]))]),
  maskPlaceholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onMouseDown: PropTypes.func
};

module.exports = InputMask;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


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



var _jsxFileName = "D:\\VS2017\\Juscredit\\juscredit-web\\pages\\index.tsx",
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
    lineNumber: 23,
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_FORM),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      formValues = _React$useState4[0],
      setFormValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),
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
    setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.checked)));
  };

  var atualizaFormValues = function atualizaFormValues(event) {
    setFormValue(_objectSpread({}, formValues, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
    console.log(formValues);
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
  }; // function ProcessoFormat(props) {
  //   const { inputRef, onChange, ...other } = props;
  //   return (
  //     <NumberFormat
  //       {...other}
  //       getInputRef={inputRef}
  //       format="#######-##.####.#.##.########"
  //       onValueChange={(values) => {
  //         onChange({
  //           target: {
  //             name: props.name,
  //             value: values.value,
  //           },
  //         });
  //       }}
  //       // atualizaFormValues("155262615", 'title');
  //       allowEmptyFormatting
  //       isNumericString
  //     />
  //   );
  // }
  // ProcessoFormat.propTypes = {
  //   inputRef: PropTypes.func.isRequired,
  //   name: PropTypes.string.isRequired,
  //   onChange: PropTypes.func.isRequired,
  // };
  // function CelularFormat(props) {
  //   const { inputRef, onChange, ...other } = props;
  //   return (
  //     <NumberFormat
  //       {...other}
  //       getInputRef={inputRef}
  //       format="(##) #-####-####"
  //       onValueChange={(values) => {
  //         onChange({
  //           target: {
  //             name: props.name,
  //             value: values.value,
  //           },
  //         });
  //       }}
  //       allowEmptyFormatting
  //       isNumericString
  //     />
  //   );
  // }
  // CelularFormat.propTypes = {
  //   inputRef: PropTypes.func.isRequired,
  //   name: PropTypes.string.isRequired,
  //   onChange: PropTypes.func.isRequired,
  // };


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOriginPath(window.location.origin);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, "JusCredit")), __jsx("main", {
    className: "main-page-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "map-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "map-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, "Antecipe seu ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 30
    }
  }), "cr\xE9dito trabalhista"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, "T\xEAm um processo ganho? Receba agora"), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, "Quero antecipar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, "Quero investir")), __jsx("div", {
    className: "link cursor-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "#conheca-vantagens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/chevron-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, "Conhe\xE7a as vantagens")))))), __jsx("div", {
    id: "conheca-vantagens",
    className: "antecipar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, profile == "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 19
    }
  }, "Servi\xE7o de antecipa\xE7\xE3o dispon\xEDvel para Trabalhadores e Advogados.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
      lineNumber: 263,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }, "Praticidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 27
    }
  }, "Processo de antecipa\xE7\xE3o 100% digital.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 27
    }
  }, "An\xE1lise r\xE1pida e sem custo."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  }, "Agilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 27
    }
  }, "Liquidez imediata, n\xE3o espere mais para receber o seu direito."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
      lineNumber: 282,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, "Libera\xE7\xE3o"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, __jsx("li", {
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
  }, "Receba diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalAntecipar();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, "Quero antecipar"))), profile != "cliente" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-two-columns align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, "Mais valor para quem investe.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 52
    }
  }), "R\xE1pido para quem antecipa."), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, "Investimentos em cr\xE9ditos judiciais de forma r\xE1pida e descomplicada.")), __jsx("div", {
    className: "buttons-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("cliente");
    },
    color: profile == "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  }, "Cliente"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleProfile("investidor");
    },
    color: profile != "cliente" ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  }, "Investidor"))), __jsx("div", {
    className: "cards-showcase-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 311,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, "Rentabilidade"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 27
    }
  }, "Maior retorno que investimentos tradicionais.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 27
    }
  }, "Baixo valor inicial de investimento.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 27
    }
  }, "Dispon\xEDvel para PF e PJ."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
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
      lineNumber: 322,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }, "Seguran\xE7a"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 27
    }
  }, "Modelo propriet\xE1rio de an\xE1lise.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 27
    }
  }, "Empresas saud\xE1veis, sem negativa\xE7\xE3o e inclusas no banco nacional de devedores trabalhistas.")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 27
    }
  }, "Parceiro de escrit\xF3rio especializado em direito do trabalho."))))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
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
      lineNumber: 333,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }, "Recebimento"), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 27
    }
  }, "Receba os valores dos cr\xE9ditos judiciais adquiridos diretamente em sua conta JusCredit.")))))), __jsx("div", {
    className: "buttons-container flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return handleModalInvestir();
    },
    color: "sixty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }, "Quero investir"))), __jsx("div", {
    id: "como-funciona",
    className: "flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }, "Como funciona a plataforma?"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  }, "Conte com toda a seguran\xE7a, agilidade e ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 57
    }
  }), "praticidade na libera\xE7\xE3o do seu processo ganho"))), __jsx("div", {
    className: "cards-howto-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
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
      lineNumber: 362,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 23
    }
  }, "Cliente solicita")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, "1")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 19
    }
  }, "Cliente solicita antecipa\xE7\xE3o do cr\xE9dito trabalhista na plataforma."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
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
      lineNumber: 376,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }, "An\xE1lise avan\xE7ada")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 21
    }
  }, "2")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 19
    }
  }, "An\xE1lise com modelo propriet\xE1rio de cr\xE9dito, se aprovado \xE9 disponibilizado ao investidores.")))), __jsx("div", {
    className: "cards-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
      lineNumber: 392,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 23
    }
  }, "Investidores")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, "3")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Os investidores escolhem quanto e em quais cr\xE9ditos trabalhistas querem investir."))), __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 406,
      columnNumber: 23
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 23
    }
  }, "Receba")), __jsx("h4", {
    className: "card-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }, "4")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 19
    }
  }, "O trabalhador recebe a antecipa\xE7\xE3o e os investidores seus pagamentos."))))), __jsx("div", {
    id: "parceiros-container",
    className: "indicar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 13
    }
  }, " Seja um parceiro JusCredit"), __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, "Indique cr\xE9ditos trabalhistas eleg\xEDveis e ganhe conosco."), __jsx("div", {
    className: "flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    onClick: handleModalIndicar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 15
    }
  }, "Indicar"))))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalIndicarState,
    onClose: handleClose,
    "aria-labelledby": "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "parceiro-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 9
    }
  }, "Seja parceiro!"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 431,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 11
    }
  }, "Cancelar"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick(e) {
      handleSubmitParceiro("https://api-dot-juscredit-hml.ue.r.appspot.com/api/v1/sendmailpartner", parceiroValues);
    },
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalAnteciparState,
    onClose: handleClose,
    "aria-labelledby": "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "antecipar-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 9
    }
  }, "Antecipe o seu cr\xE9dito"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 11
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
      lineNumber: 455,
      columnNumber: 13
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
      lineNumber: 462,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_13___default.a, {
    mask: "9999999-99.9999.9.99.9999",
    value: props.value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-2",
    label: "N\xFAmero do processo",
    helperText: "Exemplo: 0000020-37.2010.5.15.0118",
    variant: "outlined",
    name: "title" // InputProps={{
    //   inputComponent: ProcessoFormat,
    // }}
    ,
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 15
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
      lineNumber: 491,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldAntecipar-4",
    label: "Celular",
    variant: "outlined",
    name: "phone" // InputProps={{
    //   inputComponent: CelularFormat,
    // }}
    ,
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 13
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
      'aria-label': 'Checkbox Modal Antecipe'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldAntecipar-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Cliente.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
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
      lineNumber: 519,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 11
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
      lineNumber: 531,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalInvestirState,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 9
    }
  }, "Invista em cr\xE9ditos trabalhistas"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "modal-form",
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-0",
    label: "Nome completo",
    variant: "outlined",
    name: "full_nameF",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
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
      lineNumber: 548,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modalFieldInvestir-2",
    label: "Celular",
    variant: "outlined" // InputProps={{
    //   inputComponent: CelularFormat,
    // }}
    ,
    name: "phone",
    onChange: function onChange(e) {
      atualizaFormValues(e);
    },
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 565,
      columnNumber: 13
    }
  }, tipoPessoaArr.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: option.value,
      value: option.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 17
      }
    }, option.label);
  })), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 13
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
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 15
    }
  }, "Sou um investidor qualificado,")), __jsx("div", {
    className: "flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 13
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
      'aria-label': 'Checkbox Modal Investir'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 15
    }
  }), __jsx("label", {
    className: "modal-label",
    htmlFor: "modalFieldInvestir-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 15
    }
  }, "Concordo com os Termos do JusCredit,"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/JusCredit_-_Temos_de_Uso_do_Investidor.pdf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
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
      lineNumber: 608,
      columnNumber: 17
    }
  }, "Clique para ler"))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 9
    }
  }, __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 11
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
      lineNumber: 619,
      columnNumber: 11
    }
  }, "Enviar"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalEnviado,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 11
    }
  }, "Seu cadastro foi iniciado, ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 40
    }
  }, "verifique seu email"), " para conclui-lo e iniciar seus investimentos em nossa plataforma!"))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: modalErro,
    onClose: handleClose,
    "aria-labelledby": "investir-dialog-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "remove-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], {
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 11
    }
  }, "Houve um problema, tente novamente mais tarde."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.19ae9cb1fae4bda92e4e.hot-update.js.map