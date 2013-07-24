
 db = require('./mongo.js');

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
app.get('/', function(req, res){
    res.render('index.html', { title: 'stonedar' });
});


app.post('/users/signup', users.signUp);
app.post('/users/login', users.login);
app.get('/users/getbyid/:id', users.findById);

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
    
   sessions.find({}, function(data){
            console.log(data);
            // socket.emit('sesh', data);
        });
   
   /*
    socket.on('pushalert', function(first, second){
        console.log(first);
        console.log(second);
    });
    */
   
    socket.on('sesh', function(session){
        console.log(session);
        
        //any logic to change data
        
        //response
        
    });
    
    
    socket.on('disconnect', function(){
        console.log("Connection " + socket.id + " terminated.");
    });

});




/*
 //scraper code

var request = require('request');
var cheerio = require('cheerio');



    var url = 'http://sf.funcheap.com/today/';
    request(url, function(err, resp, body) {
        if (err) throw err;
        else{
            console.log(body);
            $ = cheerio.load(body);
            $('span').each(function() {
    console.log($(this).text());
});
        //    console.log($);    
        }
        
    });
*/
