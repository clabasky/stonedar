
require('./mongo.js');
var http = require('http');
var fs = require('fs');

var express = require('express');

var app = express();

app.configure(function(){
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/public'));	
});


// register a simple html view engine, instead of using a fancy view rendering system
app.engine('html', function(filename, options, callback){
  fs.readFile(filename, 'utf8', function(err, str){
    if (err) return callback(err);
    callback(null, str);
  });
});


//load the sencha app
app.get('/home', function(req, res){
    res.render('index.html', { title: 'stonedar' });
});



server = http.createServer(app);
var io = require('socket.io').listen(server);
//var io = require('socket.io').listen(app);

server.listen(8080);

//*********************
// Socket.io Functions
//*********************


var votes = new Array();

io.sockets.on('connection', function(socket){

    console.log("Connection " + socket.id + " accepted.");
    
	socket.on('vote', function(vote){
	    // record vote
	    console.log("Client " + socket.id + " voted " + vote);
		votes[socket.id] = vote;
		print_votes();
	});
    
	socket.on('ticker', function(fn){
	    console.log("Sending vote average to client " + socket.id);
		var total = 0, ctr = 0;
		for(var v in votes){
			total += votes[v];
		    ctr++;
		}
		// return vote average to client
		var average = total/ctr;
		console.log("Average: " + total + "/" + ctr + " = " + average);
		fn(average);
	});

    socket.on('disconnect', function(){
        console.log("Connection " + socket.id + " terminated.");
    });
    
});


db.users.find({}, function(err, users){
    if(err || !users.length) console.log('fukkkk theres an error');
    
    else users.forEach(function(user){
	console.log('user found! -' + user.email);
    });
});


