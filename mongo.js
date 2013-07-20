var dburl = 'localhost/mongoapp';
var collections = ['users'];

 db = require('mongojs').connect(dburl, collections);

function user(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
};

//ensures unique users
db.users.ensureIndex({email: 1}, {unique: true});

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
/*
db.users.find({}, function(err, users){
    if(err || !users.length) console.log('fukkkk theres an error');
    
    else users.forEach(function(user){
	console.log('user found! -' + user.email);
    });
});
*/