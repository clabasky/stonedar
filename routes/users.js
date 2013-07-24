var dburl = 'localhost/mongoapp';
var collections = ['users', 'sessions'];
db = require('mongojs').connect(dburl, collections);

db.users.ensureIndex({email: 1}, {unique: true});


exports.signUp = function(req, res){
    if(req.body.email && req.body.password){
	db.users.save({
	email: req.body.email,
	password: req.body.password
	}, function(err, savedUser){
	    if(err) res.send("Unable to create new user. ");
	    else{
		res.send(savedUser._id);
	    }
    });
    }
    else{
	res.send("Unable to create new user. Missing email or password");
    }
};

exports.login = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    if(email && password){
	db.users.findOne({email: email, password: password}, function(err, user){
	    res.send(user._id);
	});
    }
    else{
	res.send("Missing username or password");
    }
};

exports.findById = function(req, res){
    res.send({id:req.params.id, email: "emailme", password: "pswd"});

};