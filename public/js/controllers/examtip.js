angular.module('trainee.controllers')
  .controller('ExamTipCtrl',
              ['$scope',
               '$routeParams',
               '$location',
               'ExamTips',
               function ($scope,
                         $routeParams,
                         $location,
                         ExamTips) {

    rainbow.changeColor();

    window.addEventListener('shake', function (event) {
      $location.path("/examtips/random");
      $scope.$apply();
    }, false);

    $scope.index = parseInt($routeParams["index"], 10);

    ExamTips.get(function (data) {
      var size = data.length;
      $scope.index = $scope.index || Math.floor(Math.random()*size);
      $scope.examtip = data[$scope.index];

      // Update browser adress to reflect page
      $location.path("/examtips/ordered/" + $scope.index);
      $location.replace();

      // Used for next/prev buttons
      $scope.hasNext     = size > $scope.index;
      $scope.hasPrevious = size < $scope.index;

    });
  }]);