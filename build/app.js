"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _middlewares = require("./middlewares");

var _config = require("./config");

var _routes = require("./routes");

require("./config/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_middlewares.tokenExtractor);

if (_config.NODE_ENV === 'development') {
  app.use(function (req, res, next) {
    console.log(req.method, '-', req.url);
    next();
  });
}

app.use(_middlewares.errorHandler);
app.use(_express["default"]["static"]('dist'));
app.use(_express["default"].json());
app.use('/api', _routes.usersRouter);
app.use('/api/auth', _routes.authRouter);
app.use(_middlewares.unknownEndpoint);
var _default = app;
exports["default"] = _default;