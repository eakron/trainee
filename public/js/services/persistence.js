angular.module('trainee.services')
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
