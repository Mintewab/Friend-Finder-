var friendMatch = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendMatch);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
    
        for (var i = 0; i < newFriend.scores.length; i++) {
          if (newFriend.scores[i] == "1 (Yes)") {
            newFriend.scores[i] = 1;
          } else if (newFriend.scores[i] == "3 (No)") {
            newFriend.scores[i] = 3;
          } else {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
          }
        }

        var comparisonArray = [];
};