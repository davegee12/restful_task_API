var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// Mongoose stuff
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});