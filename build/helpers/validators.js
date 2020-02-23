"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordSchema = exports.signupSchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signupSchema = _joi["default"].object({
  email: _joi["default"].string().email().required(),
  username: _joi["default"].string().min(3).max(15).required(),
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{6,20}$/).rule({
    message: 'Password should contain letters and numbers with minimum of 6 characters'
  }).required(),
  firstname: _joi["default"].string().required(),
  lastname: _joi["default"].string(),
  address: _joi["default"].string().required(),
  lga: _joi["default"].string().required(),
  state: _joi["default"].string().required(),
  occupation: _joi["default"].string().required(),
  phone: _joi["default"].string().required()
});

exports.signupSchema = signupSchema;

var resetPasswordSchema = _joi["default"].object({
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{6,20}$/).required(),
  confirmPassword: _joi["default"].ref('password')
});

exports.resetPasswordSchema = resetPasswordSchema;