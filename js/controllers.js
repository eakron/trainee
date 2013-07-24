angular.module('trainee.controllers', [])
  .controller('RandomQuestionCtrl', ['$scope', 'Questions', function ($scope, Questions) {

    // Grab the random question
    Questions.get(function (questions) {
      var randomnum = Math.floor(Math.random()*questions.length);
      $scope.question = questions[randomnum];
    });

    // Setup some defaults for answer checking
    $scope.correct = false;
    $scope.attempted = false;
    $scope.red = function () {
      return $scope.attempted && !$scope.correct;
    };

    // Determine whether to use radio or checkbox
    $scope.isMultiple = $scope.question.answer.length > 1;

    // Check if answer is correct on changes to the form
    $scope.checkAnswer = function () {
      console.log("Given: " + $scope.answer + ". Real: " + $scope.question.answer[0]);
      if ($scope.question.answer[0] === $scope.answer)
        $scope.correct = true;
      else
        $scope.correct = false;
      $scope.attempted = true;
      console.log("Attempted: " + $scope.attempted + ". Correct: " + $scope.correct);
    };

    // Specialized check for checkboxes
    $scope.checkAnswerBox = function () {
      var answers = [$scope.answer_a, $scope.answer_b, $scope.answer_c, $scope.answer_d]
        .filter(function (a) { return a; });

      console.log(answers);
      console.log($scope.question.answer);

      // Use _.isEqual() to compare arrays
      if (_.isEqual($scope.question.answer, answers))
        $scope.correct = true;
      else
        $scope.correct = false;
      $scope.attempted = true;
    };

  }]);