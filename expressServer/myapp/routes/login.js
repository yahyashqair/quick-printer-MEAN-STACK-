var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');


// Add users to the database 
// Just For Learn until now .
  router.post('/', function(req, res){
    User.find({email: req.body.email}, 
       function(err, response){
           if(err){
            res.send({"error": "no"});
           }else{
            //  console.log(req.body.password);
            //  console.log(response[0].password);
             if(!response[0]){
               res.status(401).send('invalid Email');
             }else if (response[0].password!=req.body.password){
              res.status(401).send('invalid Password');
             }else{
              res.status(200).send(response);
             }
           }
          console.log(response);
          console.log(response.length);
    });
    });
    module.exports = router;
