"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodedToken = exports.encodeJWT = exports.tokenExtractor = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-underscore-dangle */
// Acquire token from request headers Authorization field
var tokenExtractor = function tokenExtractor(request, response, next) {
  var authorization = request.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
  } else {
    request.token = null;
  }

  next();
};

exports.tokenExtractor = tokenExtractor;

var encodeJWT = function encodeJWT(user) {
  return _jsonwebtoken["default"].sign({
    sub: user._id,
    expiresIn: 1000 * 60 * 60 * 2 // Expires in two hours

  }, _config.SECRET);
};

exports.encodeJWT = encodeJWT;

var decodedToken = function decodedToken(token) {
  return _jsonwebtoken["default"].verify(token, _config.SECRET);
};

exports.decodedToken = decodedToken;