// gets a user from the db
// and calls back with (err, user) signature
var getUser = function(name, cb) {
  // simulate async
  setTimeout(function(){
    cb(null, {name: name});
  }, 100);
};

var person = "Mary";

// Get marys user object and console.log it
getUser(person, function(err, user){
  console.log(user);
});