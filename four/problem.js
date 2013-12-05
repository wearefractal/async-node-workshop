var async = require('async');
var redis = require('redis');

var client = redis.createClient();

// gets a user from the db
var getUser = function(name, cb) {
  // simulate async
  setTimeout(function(){
    var val = name + " is cool!";
    cb(null, {name: name, val: val});
  }, 100);
};

// write user into redis
// and calls back with (err, user) signature
var writeUser = function(user, cb) {
  console.log("Writing", user.name);
  client.set(user.name, user.val, cb);
};

var people = ["Mary", "Todd", "Mike"];

// Map the people array to getUser
// Using async.map and async.each