var friendData = require('../data/friends.js');

module.exports = function (app) {


    // GET route with the url`/api/friends`. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function (req, res) {
        // Display friends data in json format
        res.json(userData);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var newFriendPoints = userInput.scores;
        var sameName = '';
        var samePicture = '';
        var friendGap = 5000;

        // Loop through friends list
        for (var i = 0; i < userData.length; i++) {
            // Check gap in points to compare friends in list
            var gap = 0;
            for (var j = 0; j < newFriendPoints.length; j++) {
                gap += (Math.abs(parseInt(userData[i].scores[j]) - parseInt(userInput.scores[j])));
            }

            // If difference in score is low, then a match is found
            if (gap < friendGap) {
                console.log('We actually found someone = ' + gap);
                console.log("Guy's name = " + userData[i].name);
                console.log('Image = ' + userData[i].photo);

                // Create new friend
                friendGap = gap;
                sameName = userData[i].name;
                samePicture = userData[i].photo;
            }
        }

        // Add new user
        userData.push(userInput);
        // Sending object sameName and samePicture to backend
        // Sending response back to survey.html
        res.json({ sameName: sameName, samePicture: samePicture });
    });

};
