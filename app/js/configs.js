'use strict';

/**
 * A module for initializing the application-based modules to represent them into angular
 * @module configs
 */
define(function(require) {
  require('angular').module('app.configs', []).
    service('PollConfig', require('config/PollConfig'));
});