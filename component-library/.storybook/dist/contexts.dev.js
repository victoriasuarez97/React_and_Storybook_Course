"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contexts = void 0;

var _styledComponents = require("styled-components");

var _utils = require("../src/utils");

var contexts = [{
  icon: "box",
  title: "Themes",
  components: [_styledComponents.ThemeProvider],
  params: [{
    name: "Default Theme",
    props: {
      theme: _utils.DefaultTheme,
      "default": true
    }
  }, {
    name: "Dark Theme",
    props: {
      theme: _utils.DarkTheme
    }
  }],
  options: {
    deep: true,
    disable: false,
    cancelable: false
  }
}];
exports.contexts = contexts;