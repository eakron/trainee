angular.module('trainee', ['controllers', 'services']);

angular.module('services', [])
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        // $http.get('http://example.com').success(function (data) {
        //   callback(data);
        // });
        callback(questions);
      }
    };
  }]);

angular.module('controllers', [])
  .controller('TraineeCtrl', ['$scope', 'Questions', function ($scope, Questions) {
    Questions.get(function (questions) {
      $scope.questions = questions;
    });
  }]);

var questions = [
  {
    "question": "Are cows blue?",
    "a": "Yes",
    "b": "No",
    "c": "Maybe",
    "d": "Ok"
  }
];
