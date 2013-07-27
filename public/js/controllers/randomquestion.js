angular.module('trainee.controllers')
  .controller('RandomQuestionCtrl', ['$scope', 'Questions', 'Persistence', function ($scope, Questions, Persistence) {

    rainbow.changeColor();

    var correct_answers = Persistence.get('correct_answers') || 0,
        incorrect_answers = Persistence.get('incorrect_answers') || 0;

    $scope.percentage = Math.floor(correct_answers / (correct_answers + incorrect_answers) * 100) || 0;

    // Grab the random question
    Questions.get(function (questions) {
      var randomnum = Math.floor(Math.random()*questions.length);
      $scope.question = questions[randomnum];
    });

    // Setup some defaults for answer checking
    $scope.correct = false;

    // Determine whether to use radio or checkbox
    $scope.isMultiple = $scope.question.answer.length > 1;

    // Check if answer is correct on changes to the form
    $scope.checkAnswer = function () {
      console.log("Given: " + $scope.answer + ". Real: " + $scope.question.answer[0]);
      if ($scope.question.answer[0] === $scope.answer) {
        $scope.correct = true;
        correct_answers++;
        Persistence.set('correct_answers', correct_answers);
      }
      else {
        $scope.correct = false;
        incorrect_answers++;
        Persistence.set('incorrect_answers', incorrect_answers);
      }
    };

    // Specialized check for checkboxes
    $scope.checkAnswerBox = function () {
      var answerList = [$scope.answer_a, $scope.answer_b, $scope.answer_c, $scope.answer_d];
      // Remove empty entries
      var answers = _.filter(answerList, function (a) { return a; });

      console.log(answers);
      console.log($scope.question.answer);

      // Only count incorrect answers after number of valid choices
      var tries = 0;

      // Use angular.equals() to compare arrays
      if (angular.equals($scope.question.answer, answers)) {
        $scope.correct = true;
        correct_answers++;
        Persistence.set('correct_answers', correct_answers);
      }
      else {
        $scope.correct = false;
        if (tries++ >= answers.length) {
          incorrect_answers++;
          Persistence.set('incorrect_answers', incorrect_answers);
        }
      }
    };
  }]);