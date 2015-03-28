'use strict';

/*This is the main wrapper for initializing the application-based modules*/
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
