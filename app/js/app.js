'use strict';

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
