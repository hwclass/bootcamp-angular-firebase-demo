'use strict';

define(['app'], function (app) {
  return app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/html/home.html', controller: 'MyController1'});
    $routeProvider.when('/list', {templateUrl: 'partials/html/list.html', controller: 'MyController2'});
    $routeProvider.when('/poll', {templateUrl: 'partials/html/poll.html', controller: 'PollController'});
    $routeProvider.otherwise({redirectTo: '/poll'});
  }]);
});
