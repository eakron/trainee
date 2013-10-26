angular.module('trainee.services')
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        $http.get('/example/questions-minecraft.json').success(function (data) {
          callback(data);
        });
      }
    };
  }]);
