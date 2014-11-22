/*
 * Controller :: my_controller2.js
 * Info : Lists all the waves.
 */
define(function () {

  return ['$scope', 'Config2Service', '$firebase', 'VersionService', function ($scope, Config2Service, $firebase, versionService) {
    
    'use strict';
    
    var ref = new Firebase(Config2Service.firebase.url);
    
    var sync = $firebase(ref);
    
    $scope.data = sync.$asObject();
    
  }];
});
