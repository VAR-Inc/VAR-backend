"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */
var userSchema = new _mongoose["default"].Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  address: {
    type: String
  },
  about: {
    type: String
  },
  lga: {
    type: String
  },
  experience: {
    type: String
  },
  state: {
    type: String
  },
  occupation: {
    type: String
  },
  phone: {
    type: String
  },
  rating: {
    type: Number
  },
  photo: {
    type: String
  },
  comments: [{
    type: String
  }]
});
userSchema.set('toJSON', {
  transform: function transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

var _default = _mongoose["default"].model('User', userSchema);

exports["default"] = _default;