var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');


// Add users to the database 
// Just For Learn until now .

router.get('/', function(req, res){
   User.find({}, 
      function(err, response){
         res.send({"data": response});
      });
   });
      

router.post('/', function(req, res){
    var personInfo = req.body; //Get the parsed information
       var newPerson = new User({
          email: personInfo.email,
          password: personInfo.password,
          idbzu: personInfo.idnumber,
          username:personInfo.username
       });
       newPerson.save(function(err, Person){
          if(err){
          res.send({"msg":'no'});         console.log("NO");
         }
          else{
          res.send({"msg":"yes","details": personInfo});
         console.log("yes");
         }
       });
    console.log("yahyapost");
  });
  module.exports = router;
