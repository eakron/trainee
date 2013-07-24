angular.module('trainee.controllers', [])
  .controller('RandomQuestionCtrl', ['$scope', 'Questions', function ($scope, Questions) {

    $scope.correct = false;
    $scope.attempted = false;
    $scope.red = function () {
      return $scope.attempted && !$scope.correct;
    };

    Questions.get(function (questions) {
      var randomnum = Math.floor(Math.random()*questions.length);
      $scope.question = questions[randomnum];
    });

    $scope.checkAnswer = function () {
      console.log("Given: " + $scope.answer.slice(0,1) + ". Real: " + $scope.question.answer[0]);
      if ($scope.question.answer[0] === $scope.answer.slice(0,1))
        $scope.correct = true;
      else
        $scope.correct = false;
      $scope.attempted = true;
      console.log("Attempted: " + $scope.attempted + ". Correct: " + $scope.correct);
    };

  }]);