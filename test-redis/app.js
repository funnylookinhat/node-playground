// Test REDIS w/ Express w/ Socket.IO
var express = require('express');
var redis = require('redis');
var db = redis.createClient();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

db.select(13);

db.dbsize(function(err,value) {
  console.log('DBSIZE: '+value);
});

db.flushdb();

db.dbsize(function(err,value) {
  console.log('DBSIZE: '+value);
});

db.llen('mylist',function(err,value) {
  console.log(value);
});


db.lpush('mylist','val1','val2','val3');
db.lpush('mylist','val4');
db.llen('mylist',function(err,value) {
  console.log(value);
});

db.dbsize(function(err,value) {
  console.log('DBSIZE: '+value);
});

/*
db.lindex('mylist',0,function(err,value) {
  console.log(value);
});
db.lindex('mylist',1,function(err,value) {
  console.log(value);
});
db.lindex('mylist',2,function(err,value) {
  console.log(value);
});
db.lindex('mylist',3,function(err,value) {
  console.log(value);
});
db.lindex('mylist',4,function(err,value) {
  console.log(value);
});

/*

server.listen(1337);

// Send Index Page
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  db.set(socket.id,"Please update me...");
  socket.on('get', function(data) {
  	db.get(socket.id,function(err,value) {
  		if( err ) {
  			socket.emit('getResponse', {status:"ERROR: "+err.toString()});
  		} else {
  			socket.emit('getResponse', {status:value});
  		}
  	});
  });
  socket.on('set', function(data) {
  	db.set(socket.id,socket.id+':'+data.status);
  	socket.emit('getResponse', {status:socket.id+':'+data.status});
  });
});

 */

/*
CODE TO COPY
var express = require('express');
var redis = require('redis');
var db = redis.createClient();
var app = express();

app.use(function(req, res, next){
  var ua = req.headers['user-agent'];
  db.zadd('online', Date.now(), ua, next);
});

app.use(function(req, res, next){
  var min = 60 * 1000;
  var ago = Date.now() - min;
  db.zrevrangebyscore('online', '+inf', ago, function(err, users){
    if (err) return next(err);
    req.online = users;
    next();
  });
});

app.get('/', function(req, res){
  res.send(req.online.length + ' users online');
});

app.listen(1337);
 */