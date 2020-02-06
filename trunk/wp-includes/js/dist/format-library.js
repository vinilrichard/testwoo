this["wp"] = this["wp"] || {}; this["wp"]["formatLibrary"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 421);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

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

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(24);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/bold/index.js


/**
 * WordPress dependencies
 */



var bold_name = 'core/bold';

var title = Object(external_this_wp_i18n_["__"])('Bold');

var bold = {
  name: bold_name,
  title: title,
  tagName: 'strong',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
        type: bold_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "b",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
      name: "bold",
      icon: "editor-bold",
      title: title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "b"
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
      inputType: "formatBold",
      onInput: onToggle
    }));
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/code/index.js


/**
 * WordPress dependencies
 */



var code_name = 'core/code';

var code_title = Object(external_this_wp_i18n_["__"])('Inline Code');

var code = {
  name: code_name,
  title: code_title,
  tagName: 'code',
  className: null,
  __unstableInputRule: function __unstableInputRule(value) {
    var BACKTICK = '`';
    var _value = value,
        start = _value.start,
        text = _value.text;
    var characterBefore = text.slice(start - 1, start); // Quick check the text for the necessary character.

    if (characterBefore !== BACKTICK) {
      return value;
    }

    var textBefore = text.slice(0, start - 1);
    var indexBefore = textBefore.lastIndexOf(BACKTICK);

    if (indexBefore === -1) {
      return value;
    }

    var startIndex = indexBefore;
    var endIndex = start - 2;

    if (startIndex === endIndex) {
      return value;
    }

    value = Object(external_this_wp_richText_["remove"])(value, startIndex, startIndex + 1);
    value = Object(external_this_wp_richText_["remove"])(value, endIndex, endIndex + 1);
    value = Object(external_this_wp_richText_["applyFormat"])(value, {
      type: code_name
    }, startIndex, endIndex);
    return value;
  },
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        isActive = _ref.isActive;

    function onClick() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
        type: code_name
      }));
      onFocus();
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
      icon: "editor-code",
      title: code_title,
      onClick: onClick,
      isActive: isActive
    });
  }
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(16);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/image/index.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */






var ALLOWED_MEDIA_TYPES = ['image'];
var image_name = 'core/image';

var image_title = Object(external_this_wp_i18n_["__"])('Inline image');

var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};

function getRange() {
  var selection = window.getSelection();
  return selection.rangeCount ? selection.getRangeAt(0) : null;
}

var image_image = {
  name: image_name,
  title: image_title,
  keywords: [Object(external_this_wp_i18n_["__"])('photo'), Object(external_this_wp_i18n_["__"])('media')],
  object: true,
  tagName: 'img',
  className: null,
  attributes: {
    className: 'class',
    style: 'style',
    url: 'src',
    alt: 'alt'
  },
  edit:
  /*#__PURE__*/
  function (_Component) {
    Object(inherits["a" /* default */])(ImageEdit, _Component);

    function ImageEdit() {
      var _this;

      Object(classCallCheck["a" /* default */])(this, ImageEdit);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ImageEdit).apply(this, arguments));
      _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.openModal = _this.openModal.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.closeModal = _this.closeModal.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.state = {
        modal: false
      };
      return _this;
    }

    Object(createClass["a" /* default */])(ImageEdit, [{
      key: "onChange",
      value: function onChange(width) {
        this.setState({
          width: width
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if ([external_this_wp_keycodes_["LEFT"], external_this_wp_keycodes_["DOWN"], external_this_wp_keycodes_["RIGHT"], external_this_wp_keycodes_["UP"], external_this_wp_keycodes_["BACKSPACE"], external_this_wp_keycodes_["ENTER"]].indexOf(event.keyCode) > -1) {
          // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
          event.stopPropagation();
        }
      }
    }, {
      key: "openModal",
      value: function openModal() {
        this.setState({
          modal: true
        });
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.setState({
          modal: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange,
            onFocus = _this$props.onFocus,
            isObjectActive = _this$props.isObjectActive,
            activeObjectAttributes = _this$props.activeObjectAttributes;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
            d: "M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"
          })),
          title: image_title,
          onClick: this.openModal,
          isActive: isObjectActive
        }), this.state.modal && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUpload"], {
          allowedTypes: ALLOWED_MEDIA_TYPES,
          onSelect: function onSelect(_ref) {
            var id = _ref.id,
                url = _ref.url,
                alt = _ref.alt,
                width = _ref.width;

            _this2.closeModal();

            onChange(Object(external_this_wp_richText_["insertObject"])(value, {
              type: image_name,
              attributes: {
                className: "wp-image-".concat(id),
                style: "width: ".concat(Math.min(width, 150), "px;"),
                url: url,
                alt: alt
              }
            }));
            onFocus();
          },
          onClose: this.closeModal,
          render: function render(_ref2) {
            var open = _ref2.open;
            open();
            return null;
          }
        }), isObjectActive && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
          position: "bottom center",
          focusOnMount: false,
          anchorRef: getRange()
        }, Object(external_this_wp_element_["createElement"])("form", {
          className: "block-editor-format-toolbar__image-container-content",
          onKeyPress: stopKeyPropagation,
          onKeyDown: this.onKeyDown,
          onSubmit: function onSubmit(event) {
            var newReplacements = value.replacements.slice();
            newReplacements[value.start] = {
              type: image_name,
              attributes: _objectSpread({}, activeObjectAttributes, {
                style: "width: ".concat(_this2.state.width, "px;")
              })
            };
            onChange(_objectSpread({}, value, {
              replacements: newReplacements
            }));
            event.preventDefault();
          }
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
          className: "block-editor-format-toolbar__image-container-value",
          type: "number",
          label: Object(external_this_wp_i18n_["__"])('Width'),
          value: this.state.width,
          min: 1,
          onChange: this.onChange
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          icon: "editor-break",
          label: Object(external_this_wp_i18n_["__"])('Apply'),
          type: "submit"
        }))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var style = props.activeObjectAttributes.style;

        if (style === state.previousStyle) {
          return null;
        }

        if (!style) {
          return {
            width: undefined,
            previousStyle: style
          };
        }

        return {
          width: style.replace(/\D/g, ''),
          previousStyle: style
        };
      }
    }]);

    return ImageEdit;
  }(external_this_wp_element_["Component"])
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/italic/index.js


/**
 * WordPress dependencies
 */



var italic_name = 'core/italic';

var italic_title = Object(external_this_wp_i18n_["__"])('Italic');

var italic = {
  name: italic_name,
  title: italic_title,
  tagName: 'em',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
        type: italic_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "i",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
      name: "italic",
      icon: "editor-italic",
      title: italic_title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "i"
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
      inputType: "formatItalic",
      onInput: onToggle
    }));
  }
};

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(26);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(56);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Check for issues with the provided href.
 *
 * @param {string} href The href.
 *
 * @return {boolean} Is the href invalid?
 */

function isValidHref(href) {
  if (!href) {
    return false;
  }

  var trimmedHref = href.trim();

  if (!trimmedHref) {
    return false;
  } // Does the href start with something that looks like a URL protocol?


  if (/^\S+:/.test(trimmedHref)) {
    var protocol = Object(external_this_wp_url_["getProtocol"])(trimmedHref);

    if (!Object(external_this_wp_url_["isValidProtocol"])(protocol)) {
      return false;
    } // Add some extra checks for http(s) URIs, since these are the most common use-case.
    // This ensures URIs with an http protocol have exactly two forward slashes following the protocol.


    if (Object(external_this_lodash_["startsWith"])(protocol, 'http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    var authority = Object(external_this_wp_url_["getAuthority"])(trimmedHref);

    if (!Object(external_this_wp_url_["isValidAuthority"])(authority)) {
      return false;
    }

    var path = Object(external_this_wp_url_["getPath"])(trimmedHref);

    if (path && !Object(external_this_wp_url_["isValidPath"])(path)) {
      return false;
    }

    var queryString = Object(external_this_wp_url_["getQueryString"])(trimmedHref);

    if (queryString && !Object(external_this_wp_url_["isValidQueryString"])(queryString)) {
      return false;
    }

    var fragment = Object(external_this_wp_url_["getFragment"])(trimmedHref);

    if (fragment && !Object(external_this_wp_url_["isValidFragment"])(fragment)) {
      return false;
    }
  } // Validate anchor links.


  if (Object(external_this_lodash_["startsWith"])(trimmedHref, '#') && !Object(external_this_wp_url_["isValidFragment"])(trimmedHref)) {
    return false;
  }

  return true;
}
/**
 * Generates the format object that will be applied to the link text.
 *
 * @param {Object}  options
 * @param {string}  options.url              The href of the link.
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
 * @param {Object}  options.text             The text that is being hyperlinked.
 *
 * @return {Object} The final format object.
 */

function createLinkFormat(_ref) {
  var url = _ref.url,
      opensInNewWindow = _ref.opensInNewWindow,
      text = _ref.text;
  var format = {
    type: 'core/link',
    attributes: {
      url: url
    }
  };

  if (opensInNewWindow) {
    // translators: accessibility label for external links, where the argument is the link text
    var label = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s (opens in a new tab)'), text);
    format.attributes.target = '_blank';
    format.attributes.rel = 'noreferrer noopener';
    format.attributes['aria-label'] = label;
  }

  return format;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/inline.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function InlineLinkUI(_ref) {
  var isActive = _ref.isActive,
      activeAttributes = _ref.activeAttributes,
      addingLink = _ref.addingLink,
      value = _ref.value,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      speak = _ref.speak,
      stopAddingLink = _ref.stopAddingLink;

  /**
   * A unique key is generated when switching between editing and not editing
   * a link, based on:
   *
   * - This component may be rendered _either_ when a link is active _or_
   *   when adding or editing a link.
   * - It's only desirable to shift focus into the Popover when explicitly
   *   adding or editing a link, not when in the inline boundary of a link.
   * - Focus behavior can only be controlled on a Popover at the time it
   *   mounts, so a new instance of the component must be mounted to
   *   programmatically enact the focusOnMount behavior.
   *
   * @type {string}
   */
  var mountingKey = Object(external_this_wp_element_["useMemo"])(external_this_lodash_["uniqueId"], [addingLink]);
  var anchorRef = Object(external_this_wp_element_["useMemo"])(function () {
    var selection = window.getSelection();

    if (!selection.rangeCount) {
      return;
    }

    var range = selection.getRangeAt(0);

    if (addingLink && !isActive) {
      return range;
    }

    var element = range.startContainer; // If the caret is right before the element, select the next element.

    element = element.nextElementSibling || element;

    while (element.nodeType !== window.Node.ELEMENT_NODE) {
      element = element.parentNode;
    }

    return element.closest('a');
  }, [addingLink, value.start, value.end]);
  var linkValue = {
    url: activeAttributes.url,
    opensInNewTab: activeAttributes.target === '_blank'
  };

  function onChangeLink(nextValue) {
    var newUrl = Object(external_this_wp_url_["prependHTTP"])(nextValue.url);
    var selectedText = Object(external_this_wp_richText_["getTextContent"])(Object(external_this_wp_richText_["slice"])(value));
    var format = createLinkFormat({
      url: newUrl,
      opensInNewWindow: nextValue.opensInNewTab,
      text: selectedText
    });

    if (Object(external_this_wp_richText_["isCollapsed"])(value) && !isActive) {
      var toInsert = Object(external_this_wp_richText_["applyFormat"])(Object(external_this_wp_richText_["create"])({
        text: newUrl
      }), format, 0, newUrl.length);
      onChange(Object(external_this_wp_richText_["insert"])(value, toInsert));
    } else {
      onChange(Object(external_this_wp_richText_["applyFormat"])(value, format));
    }

    onFocus();
    stopAddingLink();

    if (!isValidHref(newUrl)) {
      speak(Object(external_this_wp_i18n_["__"])('Warning: the link has been inserted but may have errors. Please test it.'), 'assertive');
    } else if (isActive) {
      speak(Object(external_this_wp_i18n_["__"])('Link edited.'), 'assertive');
    } else {
      speak(Object(external_this_wp_i18n_["__"])('Link inserted.'), 'assertive');
    }
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
    key: mountingKey,
    anchorRef: anchorRef,
    focusOnMount: addingLink ? 'firstElement' : false,
    onClose: stopAddingLink,
    position: "bottom center"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalLinkControl"], {
    value: linkValue,
    onChange: onChangeLink
  }));
}

/* harmony default export */ var inline = (Object(external_this_wp_components_["withSpokenMessages"])(InlineLinkUI));

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/index.js








/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var link_name = 'core/link';

var link_title = Object(external_this_wp_i18n_["__"])('Link');

var link_link = {
  name: link_name,
  title: link_title,
  tagName: 'a',
  className: null,
  attributes: {
    url: 'href',
    target: 'target'
  },
  __unstablePasteRule: function __unstablePasteRule(value, _ref) {
    var html = _ref.html,
        plainText = _ref.plainText;

    if (Object(external_this_wp_richText_["isCollapsed"])(value)) {
      return value;
    }

    var pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

    if (!Object(external_this_wp_url_["isURL"])(pastedText)) {
      return value;
    } // Allows us to ask for this information when we get a report.


    window.console.log('Created link:\n\n', pastedText);
    return Object(external_this_wp_richText_["applyFormat"])(value, {
      type: link_name,
      attributes: {
        url: Object(external_this_wp_htmlEntities_["decodeEntities"])(pastedText)
      }
    });
  },
  edit: Object(external_this_wp_components_["withSpokenMessages"])(
  /*#__PURE__*/
  function (_Component) {
    Object(inherits["a" /* default */])(LinkEdit, _Component);

    function LinkEdit() {
      var _this;

      Object(classCallCheck["a" /* default */])(this, LinkEdit);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LinkEdit).apply(this, arguments));
      _this.addLink = _this.addLink.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.stopAddingLink = _this.stopAddingLink.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.onRemoveFormat = _this.onRemoveFormat.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.state = {
        addingLink: false
      };
      return _this;
    }

    Object(createClass["a" /* default */])(LinkEdit, [{
      key: "addLink",
      value: function addLink() {
        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange;
        var text = Object(external_this_wp_richText_["getTextContent"])(Object(external_this_wp_richText_["slice"])(value));

        if (text && Object(external_this_wp_url_["isURL"])(text)) {
          onChange(Object(external_this_wp_richText_["applyFormat"])(value, {
            type: link_name,
            attributes: {
              url: text
            }
          }));
        } else if (text && Object(external_this_wp_url_["isEmail"])(text)) {
          onChange(Object(external_this_wp_richText_["applyFormat"])(value, {
            type: link_name,
            attributes: {
              url: "mailto:".concat(text)
            }
          }));
        } else {
          this.setState({
            addingLink: true
          });
        }
      }
    }, {
      key: "stopAddingLink",
      value: function stopAddingLink() {
        this.setState({
          addingLink: false
        });
      }
    }, {
      key: "onRemoveFormat",
      value: function onRemoveFormat() {
        var _this$props2 = this.props,
            value = _this$props2.value,
            onChange = _this$props2.onChange,
            speak = _this$props2.speak;
        onChange(Object(external_this_wp_richText_["removeFormat"])(value, link_name));
        speak(Object(external_this_wp_i18n_["__"])('Link removed.'), 'assertive');
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            isActive = _this$props3.isActive,
            activeAttributes = _this$props3.activeAttributes,
            value = _this$props3.value,
            onChange = _this$props3.onChange,
            onFocus = _this$props3.onFocus;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
          type: "primary",
          character: "k",
          onUse: this.addLink
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
          type: "primaryShift",
          character: "k",
          onUse: this.onRemoveFormat
        }), isActive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          name: "link",
          icon: "editor-unlink",
          title: Object(external_this_wp_i18n_["__"])('Unlink'),
          onClick: this.onRemoveFormat,
          isActive: isActive,
          shortcutType: "primaryShift",
          shortcutCharacter: "k"
        }), !isActive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          name: "link",
          icon: "admin-links",
          title: link_title,
          onClick: this.addLink,
          isActive: isActive,
          shortcutType: "primary",
          shortcutCharacter: "k"
        }), (this.state.addingLink || isActive) && Object(external_this_wp_element_["createElement"])(inline, {
          addingLink: this.state.addingLink,
          stopAddingLink: this.stopAddingLink,
          isActive: isActive,
          activeAttributes: activeAttributes,
          value: value,
          onChange: onChange,
          onFocus: onFocus
        }));
      }
    }]);

    return LinkEdit;
  }(external_this_wp_element_["Component"]))
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/strikethrough/index.js


/**
 * WordPress dependencies
 */



var strikethrough_name = 'core/strikethrough';

var strikethrough_title = Object(external_this_wp_i18n_["__"])('Strikethrough');

var strikethrough = {
  name: strikethrough_name,
  title: strikethrough_title,
  tagName: 's',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onClick() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
        type: strikethrough_name
      }));
      onFocus();
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
      icon: "editor-strikethrough",
      title: strikethrough_title,
      onClick: onClick,
      isActive: isActive
    });
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/underline/index.js


/**
 * WordPress dependencies
 */



var underline_name = 'core/underline';
var underline = {
  name: underline_name,
  title: Object(external_this_wp_i18n_["__"])('Underline'),
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
        type: underline_name,
        attributes: {
          style: 'text-decoration: underline;'
        }
      }));
    };

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
      inputType: "formatUnderline",
      onInput: onToggle
    }));
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/default-formats.js
/**
 * Internal dependencies
 */







/* harmony default export */ var default_formats = ([bold, code, image_image, italic, link_link, strikethrough, underline]);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


default_formats.forEach(function (_ref) {
  var name = _ref.name,
      settings = Object(objectWithoutProperties["a" /* default */])(_ref, ["name"]);

  return Object(external_this_wp_richText_["registerFormatType"])(name, settings);
});


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ })

/******/ });