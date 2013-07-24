var dburl = 'localhost/mongoapp';
var collections = ['users', 'sessions'];

db = require('mongojs').connect(dburl, collections);

//ensures unique sessions
db.sessions.ensureIndex({lat: 1, lng: 1}, {unique: true});

exports.db = db;

function session(obj){
    this.time = obj.time;
    this.lat = obj.lat;
    this.lng = obj.lng;
    this.rsvpNumb = obj.rsvpNumb;
    this.rsvpd = [];
};


function addSession(sesh){
    db.sessions.save(sesh, function(err, savedSesh){
        if(err || !savedSesh) console.log('failed to save sesh');
        else console.log('saved a sesh');
    });
};


var session1 = new session({
                time: '12:00',
                rsvpNumb: 5,
                lat: '48',
                lng: '50'
            });

var session2 = new session({
                time: '11:00',
                rsvpNumb: 8,
                lat: '47',
                lng: '50'
            });

addSession(session1);
addSession(session2);

function getSessions(){
    var results = db.sessions.find({}, function(err, sesh){
    if(err || !sesh.length) console.log('fukkkk theres an error');
    
    return sesh;
});
    return results;
};

/*
 
 function user(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
};
function addUser(u) {
    db.users.save(u, function(err, savedUser){
	if(err || !savedUser) console.log('saved user');
	else console.log('user '+ savedUser.email +" saved");
    });
};

var user1 = new user("phillip", "fry", "fluuioiuo");
var user2 = new user("goat", "mat", "fukkkkk");
var user3 = new user("phillip", "fry", "fluuioiuo");

addUser(user1);
addUser(user2);
addUser(user3);
*/
/*
db.users.find({}, function(err, users){
    if(err || !users.length) console.log('fukkkk theres an error');
    
    else users.forEach(function(user){
	console.log('user found! -' + user.email);
    });
});
*/

