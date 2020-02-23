"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersRouter = (0, _express["default"])();
usersRouter.route('/users').get(_controllers.getUsers);
var _default = usersRouter;
exports["default"] = _default;