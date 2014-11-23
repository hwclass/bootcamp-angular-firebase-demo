/*
 * Controller :: PollController.js
 * Info : Controls poll.
 */
define(function () {

  return ['$scope', 'PollConfigService', '$firebase', function ($scope, PollConfigService, $firebase) {
    
    'use strict';
    
    var ref = new Firebase(PollConfigService.firebase.url);
    
    var sync = $firebase(ref);
    
    $scope.data = sync.$asObject();

  	$scope.data.$loaded().then(function() {
    	$scope.answers = (function() {
        return $scope.data.answers.answers;
    	})();
    	$scope.questionaire = (function() {
        return $scope.data.answers.questionaires;
    	})();
  	});

    $scope.submitPollForm = function () {
      var item = null;
      for (var counterForItems = 0, len = $scope.data.answers.answers.length; counterForItems < len; counterForItems++) {
        if ($scope.choice === $scope.data.answers.answers[counterForItems]['_id']) {
          item = $scope.data.answers.answers[counterForItems];
        }
      }
      console.dir(item);
      console.dir(sync._objectSync.getObject().answers.answers);
      console.dir(ref.child("foo/counter"));

      if (sync._objectSync.getObject().answers.answers[item._id] == item._id) {
        console.log('sadasdasd');
      } 
    }
    
  }];

});
