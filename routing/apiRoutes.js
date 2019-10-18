var friends = require("../data/friends")

module.exports = function (app) {
    // Route that shows the json of all the possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
        console.log("from apiRoutes file")
    });

    // Route that handles the incoming survey data and the compatibility logic
    // Create New Friend - takes in JSON input
    // app.post("/api/friends", function (req, res) {
    //     var difference = 0;
    //     var bestMatch = {
    //         name: "",
    //         photo: "",
    //         scoreDifference: 1000
    //     };
    //     var userData = req.body;
    //     var userName = userData.name;
    //     var userScores = userData.scores;

    //     var b = userScores.map(function(item) {
    //         return parseInt(item, 10);
    //     });
    //     userData = {
    //         name: req.body.name,
    //         photo: req.body.photo,
    //         scores: b
    //     };

    //     console.log("Name: " + userName);
    //     console.log("User score: " + userScores);

    //     var sum = b.reduce((a, b) => a + b, 0);
    //     console.log("Sum of users score: " + sum);
    //     console.log("Best match difference: " + bestMatch.scoreDifference);

    //     for(i = 0; i < friends.length; i++) {
    //         console.log(friends[i].name);
    //         difference = 0;
    //         console.log("Total difference " + difference);
    //         console.log("Best match difference: " + bestMatch.scoreDifference);

    //         var bestScore = friends[i].scores.reduce((a, b) => a + b, 0);
    //         console.log("Total friend score " + bestScore);
    //         difference += Math.abs(sum - bestScore);
    //         console.log("Score difference: " + difference);

    //         if (difference <= bestMatch.scoreDifference){
    //             bestMatch.name = friends[i].name;
    //             bestMatch.photo = friends[i].photo;
    //             bestMatch.scoreDifference = difference;
    //         }
    //         console.log(difference = " total score difference");

    //     }

    //     console.log(bestMatch);
    //     friends.push(userData);
    //     console.log("New User added");
    //     console.log(userData);
    //     res.json(bestMatch);

        
    // });




};