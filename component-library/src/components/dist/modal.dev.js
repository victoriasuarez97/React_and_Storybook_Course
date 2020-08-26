"use strict";

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("styled"));

var _typography = require("../utils/typography");

var _illustrations = require("../assets/illustrations");

var _buttons = require("./buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    max-width: 70%;\n    text-align: center;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 912px;\n    height: 512px;\n    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n    background-color: ", ";\n    color: ", ";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    border-radius: 2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalWrapper = _styled["default"].div(_templateObject(), DefaultTheme.formElementBackgroundColor, DefaultTheme.textOnFormElementBackground);

var ModalHeader = _styled["default"].h3(_templateObject2(), _typography.TypeScale.header3);

var SignUpText = _styled["default"].p(_templateObject3(), _typography.TypeScale.paragraph);