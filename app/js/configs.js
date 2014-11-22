'use strict';

define(function(require) {
  require('angular').module('app.configs', []).
    service("Config1Service", require('config/mycontroller1config')).
    service('Config2Service', require('config/mycontroller2config'));
});