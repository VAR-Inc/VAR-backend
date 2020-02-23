"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownEndpoint = void 0;

var unknownEndpoint = function unknownEndpoint(req, res) {
  res.status(404).json({
    error: 'unknown endpoint'
  });
};

exports.unknownEndpoint = unknownEndpoint;