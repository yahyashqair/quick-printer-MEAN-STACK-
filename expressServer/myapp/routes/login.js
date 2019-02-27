var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');


// Add users to the database 
// Just For Learn until now .
  router.post('/', function(req, res){
    User.find({username: req.body}, 
       function(err, response){
           if(err){
            res.send({"error": "no"});
           }else{
            res.send({"yes": "welcome","data":response.body.username});
           }
          console.log(response);
          console.log(response.length);
    });
    });
    module.exports = router;
