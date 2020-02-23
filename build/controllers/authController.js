"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signup = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _helpers = require("../helpers");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Signup A New User
var signup = function signup(req, res, next) {
  var _req$body, username, email, password, firstname, lastname, address, lga, state, occupation, phone, lowerUsername, validateSignupData, validSignup, userExists, newUser, token;

  return regeneratorRuntime.async(function signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, firstname = _req$body.firstname, lastname = _req$body.lastname, address = _req$body.address, lga = _req$body.lga, state = _req$body.state, occupation = _req$body.occupation, phone = _req$body.phone;
          lowerUsername = username.toLowerCase();
          validateSignupData = {
            username: lowerUsername,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            address: address,
            lga: lga,
            state: state,
            occupation: occupation,
            phone: phone
          };
          validSignup = _helpers.signupSchema.validate(validateSignupData);

          if (!validSignup.error) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", next(validSignup.error));

        case 6:
          _context.prev = 6;
          _context.next = 9;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: validSignup.value.email
          }));

        case 9:
          _context.t0 = _context.sent;

          if (_context.t0) {
            _context.next = 14;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            username: validSignup.value.username
          }));

        case 13:
          _context.t0 = _context.sent;

        case 14:
          userExists = _context.t0;

          if (!userExists) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'Email or username already in use. Sign in instead?'
          }));

        case 17:
          _context.t1 = _user["default"];
          _context.t2 = _objectSpread;
          _context.t3 = {};
          _context.t4 = validateSignupData;
          _context.next = 23;
          return regeneratorRuntime.awrap((0, _helpers.hashPassword)(password));

        case 23:
          _context.t5 = _context.sent;
          _context.t6 = {
            password: _context.t5
          };
          _context.t7 = (0, _context.t2)(_context.t3, _context.t4, _context.t6);
          newUser = new _context.t1(_context.t7);
          _context.next = 29;
          return regeneratorRuntime.awrap(newUser.save());

        case 29:
          token = (0, _middlewares.encodeJWT)(newUser);
          return _context.abrupt("return", res.status(201).json({
            message: 'registration successful',
            isLoggedIn: true,
            user: newUser,
            token: token
          }));

        case 33:
          _context.prev = 33;
          _context.t8 = _context["catch"](6);
          next(_context.t8);

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 33]]);
}; // Login


exports.signup = signup;

var login = function login(req, res, next) {
  var _req$body2, usernameOrEmail, password, user, passwordValid, token;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, usernameOrEmail = _req$body2.usernameOrEmail, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: usernameOrEmail
          }));

        case 4:
          _context2.t0 = _context2.sent;

          if (_context2.t0) {
            _context2.next = 9;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            username: usernameOrEmail
          }));

        case 8:
          _context2.t0 = _context2.sent;

        case 9:
          user = _context2.t0;

          if (!(user === null)) {
            _context2.next = 14;
            break;
          }

          _context2.t1 = false;
          _context2.next = 17;
          break;

        case 14:
          _context2.next = 16;
          return regeneratorRuntime.awrap((0, _helpers.comparePassword)(password, user));

        case 16:
          _context2.t1 = _context2.sent;

        case 17:
          passwordValid = _context2.t1;

          if (!(user && passwordValid)) {
            _context2.next = 21;
            break;
          }

          token = (0, _middlewares.encodeJWT)(user);
          return _context2.abrupt("return", res.status(200).json({
            isLoggedIn: true,
            token: token,
            user: user
          }));

        case 21:
          return _context2.abrupt("return", res.status(400).json({
            message: 'login credentials incorrect, please check and try again'
          }));

        case 24:
          _context2.prev = 24;
          _context2.t2 = _context2["catch"](1);
          next(_context2.t2);

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 24]]);
};

exports.login = login;