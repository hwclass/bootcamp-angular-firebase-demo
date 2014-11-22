/*
 * Controller :: my_controller1.js
 * Info : The entry point of the project.
 */
define(function () {
	'use strict';
  
  return ['$scope', 'LocaleService', 'Config1Service', '$firebase', function ($scope, LocaleService, Config1Service, $firebase) {

  	$scope.locale = Config1Service.getLocale(Config1Service.getLang());

  	$scope.lang = Config1Service.getLang();

  	$scope.setStringMessagesIntoCurrentLocale = function () {
  		$scope.MSG_HELLO = $scope.locale['MSG_HELLO'];
  		$scope.MSG_HOW_ARE_YOU = $scope.locale['MSG_HOW_ARE_YOU'];
  		$scope.MSG_THANK_YOU = $scope.locale['MSG_THANK_YOU'];
  		$scope.MSG_CONTENT = $scope.locale['MSG_CONTENT'];
  	}

  	$scope.changeLocale = function (lang) {
  		$scope.setLang(lang);
  		$scope.locale = Config1Service.getLocale(lang);
  		$scope.setStringMessagesIntoCurrentLocale();
  	}

  	$scope.setLang = function(lang) {
  		Config1Service.setLang(lang);
  		$scope.lang = lang;
  	}

  	$scope.setStringMessagesIntoCurrentLocale();

    var ref = new Firebase(Config1Service.firebase.url);
    
    var sync = $firebase(ref);
    
    $scope.data = sync.$asObject();

    console.log($scope.data);

  }];

});
