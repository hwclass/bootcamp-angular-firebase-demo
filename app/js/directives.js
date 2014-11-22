'use strict';

define(function (require) {
  require('angular').module('app.directives', []).
    directive('appVersion', require('directive/version_directive'));
});