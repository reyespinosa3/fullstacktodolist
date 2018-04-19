//require express in our app
var express = require('express'),
var bodyParser = require('body-parser');
var app = express();
//Get the default connection
var db = mongoose.connection;

// connect to mongoose to access database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo');

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//initialize variable to use for our environment port
var port = 3000;

// create routes here

/app.get('/', function(req, res) {
  res.render('/views/index.html');
})


// set up port to listen
app.listen(port, ()=> {
  console.log(`App is locked and loaded on ${port}`);
});
