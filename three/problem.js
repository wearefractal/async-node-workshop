var async = require('async');

// gets a user from the db
// and calls back with (err, user) signature
var getUser = function(name, cb) {
  // simulate async
  setTimeout(function(){
    cb(null, {name: name});
  }, 100);
};


var people = ["Mary", "Todd", "Mike"];

// Map the people array to getUser
// Using async.map
// Log the new array when you are done