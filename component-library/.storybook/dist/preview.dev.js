"use strict";

var _react = require("@storybook/react");

var _react2 = require("@storybook/addon-contexts/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonA11y = require("@storybook/addon-a11y");

var _contexts = require("./contexts");

(0, _react.addParameters)({
  backgrounds: [{
    name: "Default Theme",
    value: "#ffffff",
    "default": true
  }, {
    name: "Dark Theme",
    value: "#050449"
  }]
});
(0, _react.addDecorator)((0, _react2.withContexts)(_contexts.contexts));
(0, _react.addDecorator)(_addonKnobs.withKnobs);
(0, _react.addDecorator)(_addonA11y.withA11y);