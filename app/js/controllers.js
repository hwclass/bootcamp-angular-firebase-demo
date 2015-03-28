'use strict';

/**
 * A module for initializing the application-based modules to represent them into angular
 * @module controllers
 */
define(function (require) {
  require('angular').module('app.controllers', ['app.configs', 'app.services', 'firebase']).
    controller('PollController', require('controller/PollController'));
});
