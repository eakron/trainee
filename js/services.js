angular.module('trainee.services', [])
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        // $http.get('data.json').success(function (data) {
        //   callback(data);
        // });

        // Filter temporarily incorrect answers
        var filtered_questions = _.filter(test_questions, function (q) { return q.answer[0] !== null; });
        callback(filtered_questions);
      }
    };
  }]);