var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');
const jwt = require('jsonwebtoken');


// Add users to the database 
// Just For Learn until now .
      
// Insert User
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
             let payload = { subject : Person.username} ; 
             let token = jwt.sign(payload,'key');
          res.send({"msg":"yes",token});
         console.log("yes");
         }
       });
  });
  module.exports = router;
