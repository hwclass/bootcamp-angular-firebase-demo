'use strict';

/**
 * A module for initializing the application-based modules to represent them into angular
 * @module routes
 */
define(['app'], function (app) {
  return app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/poll', {templateUrl: 'partials/html/poll.html', controller: 'PollController'});
    $routeProvider.otherwise({redirectTo: '/poll'});
  }]);
});
