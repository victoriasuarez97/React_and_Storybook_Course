"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkTheme = exports.DefaultTheme = void 0;

var _colors = require("./colors.js");

var _typography = require("./typography");

var DefaultTheme = {
  primaryColor: _colors.primary[100],
  secondaryColor: _colors.primary[200],
  tertiaryColor: _colors.primary[400],
  textColorOnPrimary: _colors.neutral[100],
  textColor: _colors.neutral[600],
  textColorInverted: _colors.neutral[100],
  fontFamily: _typography.PrimaryFont,
  disabledPrimary: _colors.neutral[400],
  disabledSecondary: _colors.neutral[200],
  disabledTertiary: _colors.neutral[100],
  textColorDisabledSecondary: _colors.neutral[400],
  formElementBackground: _colors.neutral[100],
  textOnFormElementBackground: _colors.neutral[600],
  status: {
    warningColor: _colors.yellow[100],
    warningColorHover: _colors.yellow[200],
    errorColor: _colors.red[100],
    errorColorHover: _colors.red[200],
    successColor: _colors.green[100],
    successColorHover: _colors.green[200]
  }
};
exports.DefaultTheme = DefaultTheme;
var DarkTheme = {
  primaryColor: _colors.neutral[100],
  primaryHoverColor: _colors.neutral[200],
  primaryActiveColor: _colors.neutral[300],
  textColorOnPrimary: _colors.primary[500],
  textColor: _colors.primary[500],
  textColorInverted: _colors.neutral[100],
  primaryFont: _typography.PrimaryFont,
  disabled: _colors.neutral[400],
  textOnDisabled: _colors.neutral[300],
  formElementBackground: _colors.neutral[600],
  textOnFormElementBackground: _colors.neutral[100],
  status: {
    warningColor: _colors.yellow[100],
    warningColorHover: _colors.yellow[200],
    warningColorActive: _colors.yellow[300],
    errorColor: _colors.red[100],
    errorColorHover: _colors.red[200],
    errorColorActive: _colors.red[300],
    successColor: _colors.green[100],
    successColorHover: _colors.green[200],
    successColorActive: _colors.green[300]
  }
};
exports.DarkTheme = DarkTheme;