'use strict';

require.config({
	paths: {
    async: "../libs/requirejs-plugins/src/async",
    angular: '../libs/angular/angular',
    angularRoute: '../libs/angular-route/angular-route',
    angularMocks: '../libs/angular-mocks/angular-mocks',
    jquery: '../libs/jquery/dist/jquery',
    bootstrap: '../libs/bootstrap/dist/js/bootstrap',
    text: '../libs/requirejs-text/text',
    json: '../libs/requirejs-plugins/src/json',
    firebase : '../libs/firebase/firebase',
    angularfire : '../libs/angularfire/dist/angularfire.min'
  },
	shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
    'json' : {
      deps:['text'],
      'exports':'json'
    },
    'firebase': {
      exports : 'firebase',
      deps: ['angular']
    },
    'angularfire': {
      deps: ['angular']
    }
	},
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'angular',
  'angularRoute',
  'jquery',
  'bootstrap',
  'configs',
  'app',
  'controllers',
  'services',
  'directives',
  'filters',
  'routes',
  'json',
  'firebase',
  'angularfire'
], function () {
  angular.bootstrap(document, ['app']);
});