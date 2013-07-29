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
  .factory('Score', ['Persistence', function (Persistence) {
    return {
      name: "Score Service",
      kind: "",
      bind: function (k) { this.kind = k; },
      generateKey: function (key) {
        var filtered = _.filter(["Score", this.kind, key],
                                function (e) { return e; });
        return filtered.join(":");
      },
      correct: function () {
        var pk = this.generateKey(":correct"),
            current = Persistence.get(pk) || 0;
        Persistence.set(pk, current + 1);
      },
      incorrect: function () {
        var pk = this.generateKey(":incorrect"),
            current = Persistence.get(pk) || 0;
        Persistence.set(pk, current + 1);
      },
      percentage: function () {
        var pkc = this.generateKey(":correct"),
            pki = this.generateKey(":incorrect"),
            correct = Persistence.get(pkc) || 0,
            incorrect = Persistence.get(pki) || 0,
            mean = correct / (incorrect + correct) || 0;
        console.log("Correct: " + correct + "\nIncorrect: " + incorrect + "\nMEAN: " + mean);
        return Math.floor(mean * 100);
      }
    };
  }]);