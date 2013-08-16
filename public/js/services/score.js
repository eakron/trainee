angular.module('trainee.services')
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
  }]);
