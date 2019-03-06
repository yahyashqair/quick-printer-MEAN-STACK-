var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');
const jwt = require('jsonwebtoken');


// Add users to the database 
// Just For Learn until now .
  router.post('/', function(req, res){
    User.findOne({email: req.body.email}, 
       function(err, response){
           if(err){
            res.send({"error": "no"});
           }else{
            //  console.log(req.body.password);
            //  console.log(response[0].password);
            console.log(req.body.password);
             if(!response){
               res.status(401).send('invalid Email Or Password');
             }else{
             
              response.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if(!isMatch){
                  res.status(401).send('invalid Email Or Password');
                }
              });



              let payload = { subject : response.email } ; 
              let token = jwt.sign(payload,'key'); 
              res.status(200).send({token});
             }
           }
    });
    });
    module.exports = router;
