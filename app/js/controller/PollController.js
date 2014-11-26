/*
 * Controller :: PollController.js
 * Info : Controls poll.
 */
define(function () {

  return ['$scope', 'PollConfig', '$firebase', function ($scope, PollConfig, $firebase) {
    
    'use strict';
    
    var ref = new Firebase(PollConfig.firebase.url);
    
    var sync = $firebase(ref);
    
    $scope.answers = sync.$asArray();

    $scope.choice = null;

  	$scope.answers.$loaded().then(function() {
      calculatePersents();
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
          var formattedFloat = new Number($scope.answers[counterForAnswers].vote / totalVotes * 100).toFixed(0);
          angular.element('#votes-' + counterForAnswers).text('% ' + formattedFloat);
        }
      };
    }

    var calculatePersents = function () {
      for (var counterForAnswers = 0, len = $scope.answers.length; counterForAnswers < len; counterForAnswers++) {
        var totalVotes = 0;
        for (var counterForTotalVotes = 0, len = $scope.answers.length; counterForTotalVotes < len; counterForTotalVotes++) {
          totalVotes += $scope.answers[counterForTotalVotes].vote;
        }
        var formattedFloat = new Number($scope.answers[counterForAnswers].vote / totalVotes * 100).toFixed(0);
        angular.element('#votes-' + counterForAnswers).text('% ' + formattedFloat);
      }
    }
    
  }];

});
