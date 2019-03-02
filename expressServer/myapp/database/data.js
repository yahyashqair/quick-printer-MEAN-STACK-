
// Connection With User Collection 
// DataBase Import and Connection




var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/printerbase',err =>{
if(err){
  console.log("error Connect");
}else{
  console.log("Connected");
}
});

var userschema = mongoose.Schema({
  username: {type:String,    unique: true,
    required: true
       },
       email: {type:String,    unique: true,
        required: true
           },
           idbzu: {type:Number,    unique: true,
            required: true
               },
               password: {type:String,
                required: true
                   }
});
var User = mongoose.model("Users", userschema);
//
module.exports = User;
