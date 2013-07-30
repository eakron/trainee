angular.module('trainee.controllers')
  .controller('ExamTipCtrl',
              ['$scope',
               '$routeParams',
               'ExamTips',
               function ($scope,
                         $routeParams,
                         ExamTips) {

    $scope.index = parseInt($routeParams["index"], 10);

    ExamTips.get(function (data) {
      $scope.index = $scope.index || Math.floor(Math.random()*data.length);
      $scope.examtip = data[$scope.index];
    });
  }]);