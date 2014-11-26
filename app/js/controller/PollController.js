/*
 * Controller :: PollController.js
 * Info : Controls poll.
 */
define(function () {

  return ['$scope', 'PollConfigService', '$firebase', function ($scope, PollConfigService, $firebase) {
    
    'use strict';
    
    var ref = new Firebase(PollConfigService.firebase.url);
    
    var sync = $firebase(ref);
    
    $scope.answers = sync.$asArray();

    $scope.choice = null;

  	$scope.answers.$loaded().then(function() {
      console.log($scope.answers);
  	});

    $scope.submitPollForm = function () {
      for (var counterForAnswers = 0, len = $scope.answers.length; counterForAnswers < len; counterForAnswers++) {
        if ($scope.choice === $scope.answers[counterForAnswers]['$id']) {
          $scope.answers[counterForAnswers].vote = $scope.answers[counterForAnswers].vote + 1;
          $scope.answers.$save(counterForAnswers);
          var totalVotes = 0;
          for (var counterForTotalVotes = 0, len = $scope.answers.length; counterForTotalVotes < len; counterForTotalVotes++) {
            totalVotes += $scope.answers[counterForTotalVotes].vote;
          }
          angular.element('#votes-' + counterForAnswers).text('% ' + $scope.answers[counterForAnswers].vote / totalVotes * 100);
        }
      };
    }
    
  }];

});
