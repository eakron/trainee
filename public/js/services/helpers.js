angular.module('trainee.services')
  .factory('Helpers', [function () {
    return {
      filterEmpty: function (list) {
        return _.filter(list, function (element) { return element; });
      }
    };
  }]);