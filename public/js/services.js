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
  }])
  .factory('Score', ['Persistence', 'Helpers', function (Persistence, Helpers) {
    return {
      name: "Score Service",
      kind: "",
      bind: function (k) { this.kind = k; },
      generateKey: function (key) {
        var filtered = Helpers.filterEmpty(["Score", this.kind, key]);
        return filtered.join(":");
      },
      correct: function () {
        var pk      = this.generateKey(":correct"),
            current = Persistence.get(pk) || 0;
        Persistence.set(pk, current + 1);
      },
      incorrect: function () {
        var pk      = this.generateKey(":incorrect"),
            current = Persistence.get(pk) || 0;
        Persistence.set(pk, current + 1);
      },
      percentage: function () {
        var pkc       = this.generateKey(":correct"),
            pki       = this.generateKey(":incorrect"),
            correct   = Persistence.get(pkc) || 0,
            incorrect = Persistence.get(pki) || 0,
            mean      = correct / (incorrect + correct) || 0;
        console.log("Correct: " + correct + "\nIncorrect: " + incorrect + "\nMEAN: " + mean);
        return Math.floor(mean * 100);
      }
    };
  }])
  .factory('Helpers', [function () {
    return {
      filterEmpty: function (list) {
        return _.filter(list, function (element) { return element; });
      }
    };
  }]);