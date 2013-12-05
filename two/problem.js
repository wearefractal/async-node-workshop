var async = require('async');
var fs = require('fs');

// gets a user from the db
// and calls back with (err, user) signature
var saveUser = function(name, cb) {
  var fileName = name + ".txt";
  var content = name + " is cool!";
  fs.writeFile(name, content, cb);
};


var people = ["Mary", "Todd", "Mike"];

// For each person in the people array
// Call saveUser
// Use async.each