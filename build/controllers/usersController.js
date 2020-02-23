"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */
var getUsers = function getUsers(req, res, next) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_user["default"].find({}));

        case 3:
          users = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            users: users
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // if (!req.token) {
// return res.status(401).json({
// success: false, message: 'You are not authorized'
// });
// }
// return res.status(200).json({
// success: true, message: 'Secret Route Reached'
// });


exports.getUsers = getUsers;