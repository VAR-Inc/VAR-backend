"use strict";

var _config = require("./config");

var _app = _interopRequireDefault(require("./app"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var server = _http["default"].createServer(_app["default"]);

server.listen(_config.PORT, function () {
  console.log("Server running on port ".concat(_config.PORT));
});