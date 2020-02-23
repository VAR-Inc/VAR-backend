"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
_mongoose["default"].connect(_.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var dbSetup = function dbSetup() {
  var db = _mongoose["default"].connection;
  db.on('connected', function () {
    console.log('Connection to DB successful');
  });
  db.on('error', function (error) {
    console.log('error connecting to db', error.message);
  });
  db.on('disconnected', function (reason) {
    console.log(console.log('disconnected from DB', reason));
  });
  process.on('SIGINT', function () {
    db.close(function () {
      console.log('Disconnected fro DB due to application shut down');
      process.exit(0);
    });
  });
};

dbSetup();