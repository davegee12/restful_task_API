var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));

// Mongoose stuff
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});