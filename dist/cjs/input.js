'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-45739695.js');
require('./helpers.js');
require('./chunk-437dd7a0.js');
require('./chunk-d18d1cec.js');
require('./chunk-16474536.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_6 = require('./chunk-d1bd10cc.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_6.Input);
  }
};
__chunk_5.use(Plugin);

exports.BInput = __chunk_6.Input;
exports.default = Plugin;
