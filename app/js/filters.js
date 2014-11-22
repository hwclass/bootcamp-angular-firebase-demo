;'use strict';

define(function (require) {
  require('angular').module('app.filters', []).
    filter('interpolate', require('filter/version_filter'));
});
