"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authRouter = (0, _express["default"])();
authRouter.route('/signup').post(_controllers.signup);
authRouter.route('/login').post(_controllers.login);
var _default = authRouter;
exports["default"] = _default;