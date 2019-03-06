
// Connection With User Collection 
// DataBase Import and Connection

var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/printerbase',err =>{
if(err){
  console.log("error Connect");
}else{
  console.log("Connected");
}
});

var Userschema = mongoose.Schema({
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

Userschema.pre('save', async function(next){
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

Userschema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};


var User = mongoose.model("Users", Userschema);
module.exports = User;
