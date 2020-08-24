"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TertiaryButton = exports.SecondaryButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponentsModifiers = require("styled-components-modifiers");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: none;\n    color: ", ";\n\n    &:disabled {\n        background-color: ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        cursor: not-allowed;\n        box-shadow: none;\n    }\n\n    ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: none;\n    color: ", ";\n\n    &:disabled {\n        background-color: ", ";\n        color: ", ";\n        cursor: not-allowed;\n        box-shadow: none;\n    }\n\n    ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: none;\n    color: ", ";\n\n    &:disabled {\n        background-color: ", ";\n        cursor: not-allowed;\n        box-shadow: none;\n    }\n\n    ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 12px 24px;\n    font-size: ", ";\n    border-radius: 30px;\n    min-width: 100px;\n    cursor: pointer;\n    font-family: ", ";\n    transition: background-color 0.2 linear;\n\n    &:hover, &:focus {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BUTTON_MODIFIERS = {
  small: function small() {
    return "\n        font-size: ".concat(_utils.TypeScale.helperText, ";\n        padding: 10px 15px;\n    ");
  },
  large: function large() {
    return "\n        font-size: ".concat(_utils.TypeScale.paragraph, ";\n        padding: 15px 45px;\n    ");
  },
  warning: function warning(_ref) {
    var props = _ref.props;
    return "\n        background-color: ".concat(props.theme.status.warningColor, ";\n        color: ").concat(props.textColorInverted, ";\n\n        &:hover, &:focus {\n            background-color: ").concat(props.theme.status.warningColorHover, ";\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        }\n    ");
  },
  error: function error(_ref2) {
    var props = _ref2.props;
    return "\n        background-color: ".concat(props.theme.status.errorColor, ";\n        color: ").concat(props.theme.textColorInverted, ";\n\n        &:hover, &:focus {\n            background-color: ").concat(props.theme.status.errorColorHover, ";\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        }\n    ");
  },
  success: function success(_ref3) {
    var props = _ref3.props;
    return "\n        background-color: ".concat(props.theme.status.successColor, ";\n        color: ").concat(props.theme.textColorInverted, ";\n\n        &:hover, &:focus {\n            background-color: ").concat(props.theme.status.successColorHover, ";\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        }\n    ");
  }
};

var Button = _styledComponents["default"].button(_templateObject(), _utils.TypeScale.paragraph, props.theme.fontFamily);

var PrimaryButton = (0, _styledComponents["default"])(Button)(_templateObject2(), function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.textColorInverted;
}, function (props) {
  return props.theme.disabled;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
var SecondaryButton = (0, _styledComponents["default"])(Button)(_templateObject3(), function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.textColorInverted;
}, function (props) {
  return props.theme.disabledSecondary;
}, function (props) {
  return props.theme.textColorDisabledSecondary;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
exports.SecondaryButton = SecondaryButton;
var TertiaryButton = (0, _styledComponents["default"])(Button)(_templateObject4(), function (props) {
  return props.theme.tertiaryColor;
}, function (props) {
  return props.theme.textColorInverted;
}, function (props) {
  return props.theme.disabledTertiary;
}, function (props) {
  return props.theme.disabledPrimary;
}, function (props) {
  return props.theme.textColorDisabledSecondary;
}, (0, _styledComponentsModifiers.applyStyleModifiers)(BUTTON_MODIFIERS));
exports.TertiaryButton = TertiaryButton;
var _default = PrimaryButton;
exports["default"] = _default;