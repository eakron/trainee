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

    $scope.index = parseInt($routeParams["index"], 10);

    ExamTips.get(function (data) {
      $scope.index = $scope.index || Math.floor(Math.random()*data.length);
      $scope.examtip = data[$scope.index];

      // Update browser adress to reflect page
      $location.path("/questions/ordered/" + $scope.index);
      $location.replace();

      // Used for next/prev buttons
      $scope.hasNext     = size > $scope.index;
      $scope.hasPrevious = size < $scope.index;

    });
  }]);