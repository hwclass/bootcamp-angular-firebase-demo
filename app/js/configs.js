'use strict';

define(function(require) {
  require('angular').module('app.configs', []).
    service('PollConfig', require('config/PollConfig'));
});