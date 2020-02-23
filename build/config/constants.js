"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.SALT = exports.MONGODB_URI = exports.PORT = exports.NODE_ENV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    PORT = _process$env.PORT,
    MONGODB_URI = _process$env.MONGODB_URI,
    SALT = _process$env.SALT,
    SECRET = _process$env.SECRET;
exports.SECRET = SECRET;
exports.SALT = SALT;
exports.MONGODB_URI = MONGODB_URI;
exports.PORT = PORT;
exports.NODE_ENV = NODE_ENV;