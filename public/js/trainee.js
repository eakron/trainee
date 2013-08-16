angular.module('trainee', ['trainee.controllers', 'trainee.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions/random', {templateUrl: 'partials/question.html', controller: 'QuestionCtrl'});
    $routeProvider.when('/questions/ordered/:index', {templateUrl: 'partials/question.html', controller: 'QuestionCtrl'});
    $routeProvider.when('/examtips/random', {templateUrl: 'partials/examtip.html', controller: 'ExamTipCtrl'});
    $routeProvider.when('/examtips/ordered/:index', {templateUrl: 'partials/examtip.html', controller: 'ExamTipCtrl'});
    $routeProvider.otherwise({redirectTo: '/questions/random'});
  }]);
