angular.module('trainee.services', [])
  .factory('Questions', ['$http', function ($http) {
    return {
      name: 'Question Service',
      get: function (callback) {
        // $http.get('data.json').success(function (data) {
        //   callback(data);
        // });

        callback(test_questions);
      }
    };
  }])
  .factory('Persistence', [function () {
    return {
      name: 'Persistence Service',
      db: {},
      set: function (key, value) {
        this.db[key] = value;
      },
      get: function (key) {
        return this.db[key];
      }
    };
  }]);