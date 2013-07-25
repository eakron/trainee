angular.module('trainee.services', [])
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        // $http.get('data.json').success(function (data) {
        //   callback(data);
        // });

        callback(test);
      }
    };
  }]);