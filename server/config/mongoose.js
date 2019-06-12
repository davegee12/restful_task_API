var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfultask');
mongoose.Promise = global.Promise;
var models_path = path.join(__dirname, './../models');

// iterates through the models folder and searches for all model files!!!
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    }
})