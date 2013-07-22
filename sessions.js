var dburl = 'localhost/mongoapp';
var collections = ['users', 'sessions'];

db = require('mongojs').connect(dburl, collections);

//ensures unique sessions
//db.sessions.ensureIndex({lat: 1, lng: 1}, {unique: true});
/*
Sessions = function(host, port){
    this.db = db;
    this.db.open(function(){});
};

Sessions.prototype.getCollection = function(callback){
    this.db.collection('sessions', function(error, sessions_collection){
        if( error ) callback(error);
        else callback(null, sessions_collection);
    });
};

Sessions.prototype.findAll = function(callback){
    this.getCollection(function(error, sessions_collection){
        if( error ) callback(error);
        else {
            sessions_collection.find().toArray(function(error, results){
                if( error ) callback(error);
                else callback(null, results);
            });
        }
    })
};

Sessions.prototype.save = function(sessions, callback){
    this.getCollection(function(error, sessions_collection){
        if( error ) callback(error);
        else {
            if( typeof(sessions.length) == "undefined"){
                sessions = [sessions];
                
                for(i in sessions){
                    session = sessions[i];
                    session.created_at = new Date();
                }
                
                sessions_collection.insert(sessions, function(){
                    callback(null, sessions);
                });
            }
        }
    });
};
*/