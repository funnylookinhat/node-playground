var express = require('express');
var app = express();

// Define a route:
app.get('/', function(req, res){
  res.send('Hello World');
});

// Listen on port 1337
app.listen(1337);
console.log('Listening on port 1337');
