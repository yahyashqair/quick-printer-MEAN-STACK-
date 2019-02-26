
// Connection With User Collection 
// DataBase Import and Connection

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/printerbase');

var userschema = mongoose.Schema({
  username: String,
  email: String,
  idbzu: String,
  password: Number
});
var User = mongoose.model("User", userschema);
//
module.exports = User;
