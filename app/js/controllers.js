'use strict';

define(function (require) {
  require('angular').module('app.controllers', ['app.configs', 'app.services', 'firebase']).
    controller('PollController', require('controller/PollController'));
});
