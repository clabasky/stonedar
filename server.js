//require('./mongo.js');
//var db = require('./mongo.js');

users = require('./routes/users');
sessions = require('./routes/sessions');

var http = require('http');
var fs = require('fs');

var express = require('express');

var app = express();

app.configure(function(){
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/public'));
        app.use(express.bodyParser());
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


app.post('/users/newuser', users.newUser);
app.post('/users/login', users.login);
app.get('/users/:id', users.findById);

//app.get('/sessions/getlocal/:latlng', sessions.getLocal);
app.post('/sessions/createnew', sessions.createNew);
server = http.createServer(app);
server.listen(8080);


 

//*********************
// Socket.io Functions
//*********************

var clients = {};

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    
    clients[socket.id] = socket;
    
    
    // console.log("Connection " + socket.id + " accepted.");
    
    // socket.emit('pushalert', {message: 'welcome to the chat'});
   console.log(socket.id);
    socket.on('sesh', function(session){
        console.log(session);
        
        //any logic to change data
        
        //response
        socket.emit('sesh', db.sessions.find());
    });
    
    
    socket.on('disconnect', function(){
        console.log("Connection " + socket.id + " terminated.");
    });

});


