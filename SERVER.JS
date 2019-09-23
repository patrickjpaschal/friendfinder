

var bodyParser = require('body-parser');
var express = require('express');

// Create express server
var app = express();

// PORT will work on local host 8080
var PORT = process.env.PORT || 8080;

// Serve static files images, CSS and JavaScript in directory called public
app.use(express.static('public'))

// Standard bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Add apiRoutes file to server
require('./routing/apiRoutes.js')(app);
// Add htmlRoutes file to server
require('./routing/htmlRoutes.js')(app);

// Check if server is listening
app.listen(PORT, function () {
    console.log("FriendFinderApp listening on PORT: " + PORT);
});
