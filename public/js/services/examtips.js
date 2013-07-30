angular.module('trainee.services')
  .factory('ExamTips', ['$http', function ($http) {
    return {
      name: 'ExamTips Service',
      get: function (callback) {
        // $http.get('data.json').success(function (data) {
        //   callback(data);
        // });

        callback([{"examtip": "STUDY"}]);
      }
    };
  }]);
