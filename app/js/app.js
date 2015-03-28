'use strict';

/**
 * A module for initializing the application-based modules to represent them into angular
 * @module app
 */
define(['angular'], function() {
  return angular.module('app', [
    'ngRoute',
    'app.configs',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers'
  ]);
});
