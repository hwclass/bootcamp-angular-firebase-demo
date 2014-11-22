'use strict';

define(function (require) {
  require('angular').module('app.controllers', ['app.configs', 'app.services', 'firebase']).
    controller('MyController1', require('controller/my_controller1')).
    controller('MyController2', require('controller/my_controller2'));
});
