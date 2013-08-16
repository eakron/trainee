angular.module('trainee.controllers')
  .controller('QuestionCtrl',
              ['$scope',
               '$routeParams',
               '$location',
               'Questions',
               'Score',
               'Helpers',
               function ($scope,
                         $routeParams,
                         $location,
                         Questions,
                         Score,
                         Helpers) {

    rainbow.changeColor();
    Score.bind("Question");

    // Only count incorrect answers after number of valid choices
    var tries = 0;

    // Put the percentage on scope
    $scope.percentage = Score.percentage();

    // Grab the random question
    Questions.get(function (questions) {
      var size = questions.length;
      $scope.index = parseInt($routeParams["index"], 10) || Math.floor(Math.random()*size);

      if (size <= $scope.index || $scope.index < 0) {
        $scope.index = 0;
      }

      // Update browser adress to reflect page
      $location.path("/questions/ordered/" + $scope.index);
      $location.replace();

      $scope.question = questions[$scope.index];

      console.log($scope.question);
      console.log($scope.index);

      // Used for next/prev buttons
      $scope.hasNext     = size > $scope.index;
      $scope.hasPrevious = size < $scope.index;
    });

    // Setup some defaults for answer checking
    $scope.correct = false;

    // Determine whether to use radio or checkbox
    $scope.isMultiple = function () {
      return $scope.question.answer.length > 1;
    };

    // Check if answer is correct on changes to the form
    $scope.checkAnswer = function () {
      console.log("Given: " + $scope.answer + ". Real: " + $scope.question.answer[0]);
      if ($scope.question.answer[0] === $scope.answer) {
        $scope.correct = true;
        Score.correct();
      }
      else {
        $scope.correct = false;
        Score.incorrect();
      }
      console.log(Score.percentage());
      $scope.percentage = Score.percentage();
    };

    // Specialized check for checkboxes
    $scope.checkAnswerBox = function () {
      var answerList = [$scope.answer_a,
                        $scope.answer_b,
                        $scope.answer_c,
                        $scope.answer_d];
      // Remove empty entries
      var answers = Helpers.filterEmpty(answerList);

      console.log(answers);
      console.log($scope.question.answer);

      // Use angular.equals() to compare arrays
      if (angular.equals($scope.question.answer, answers)) {
        $scope.correct = true;
        Score.correct();
      }
      else {
        $scope.correct = false;
        if (tries++ >= answers.length) {
          Score.incorrect();
        }
      }
      console.log(Score.percentage());
      $scope.percentage = Score.percentage();
    };
  }]);