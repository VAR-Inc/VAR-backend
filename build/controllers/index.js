"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "signup", {
  enumerable: true,
  get: function get() {
    return _authController.signup;
  }
});
Object.defineProperty(exports, "login", {
  enumerable: true,
  get: function get() {
    return _authController.login;
  }
});
Object.defineProperty(exports, "getUsers", {
  enumerable: true,
  get: function get() {
    return _usersController.getUsers;
  }
});

var _authController = require("./authController");

var _usersController = require("./usersController");