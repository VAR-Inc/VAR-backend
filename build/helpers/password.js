"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */

/* eslint-disable no-console */
var saltRounds = 10;

var hashPassword = function hashPassword(rawPass) {
  var password;
  return regeneratorRuntime.async(function hashPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(rawPass, saltRounds));

        case 3:
          password = _context.sent;
          return _context.abrupt("return", password);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(rawPass, user) {
  var isValid;
  return regeneratorRuntime.async(function comparePassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(rawPass, user.password));

        case 3:
          isValid = _context2.sent;
          return _context2.abrupt("return", isValid);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.comparePassword = comparePassword;