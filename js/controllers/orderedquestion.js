angular.module('trainee.controllers')
  .controller('OrderedQuestionCtrl', ['$scope', '$routeParams', 'Questions', function ($scope, $routeParams, Questions) {
    $scope.index = parseInt($routeParams["index"]);

    Questions.get(function (questions) {
      $scope.question = questions[$scope.index];
    });

  }]);