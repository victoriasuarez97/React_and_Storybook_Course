"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Illustrations: true
};
exports.Illustrations = void 0;

var _sign_up = _interopRequireDefault(require("./illustrations/sign_up.svg"));

var _close_icon = require("./icons/close_icon");

Object.keys(_close_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _close_icon[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Illustrations = {
  SignUp: _sign_up["default"]
};
exports.Illustrations = Illustrations;