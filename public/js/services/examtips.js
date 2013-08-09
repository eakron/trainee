angular.module('trainee.services')
  .factory('ExamTips', ['$http', function ($http) {
    return {
      name: 'ExamTips Service',
      get: function (callback) {
        $http.get('/example/questions-minecraft.json').success(function (data) {
          callback(data);
        });

        /*callback(test_examtips);*/
      }
    };
  }]);
