var dburl = 'localhost/mongoapp';
var collections = ['users', 'sessions'];
db = require('mongojs').connect(dburl, collections);

db.sessions.ensureIndex({lat:1, lng:1}, {unique: true});


exports.getLocal = function(req, res){
    var latlng = req.params.latlng;
    
    var lat = latlng.split(",")[0];
    var lng = latlng.split(",")[1];
    
    var now = new Date();
    
    db.sessions.find({lat: {'$gte': "", '$lt': ""}, lng: {'$gte': "", '$lt': ""}, startTime: {'$gte': now}});
    console.log(lat + " ---- " + lng);
    
    res.send('fukckck you!!!');
};


exports.createNew = function(req, res){
    var data = req.body;
    //console.log(data);
    db.sessions.save({
       lat: data.lat,
       lng: data.lng,
       rsvpNumb: data.rsvpNumb,
       createdTime: new Date()
    });
};


exports.find = function(data, callback){
    if(!data){
        var data = {};
    }
        
    db.sessions.find(data, function(err, sessions){
        if(err) {
            console.log(err);
            callback( "DB error");
        }
        else{
            var seshArr = []
            sessions.forEach(function(session){
            seshArr.push(session);
           
            });
            //console.log(seshArr);
             callback( seshArr);
        }
        
    });
    
};