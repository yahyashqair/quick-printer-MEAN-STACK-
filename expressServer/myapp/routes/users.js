

var express = require('express');
var router = express.Router();
var User = require('../database/data');
const jwt = require('jsonwebtoken')


   function verifyToken(req, res, next) {
   console.log(req.headers);
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'key')
  console.log(payload);
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  User.findOne({email : payload['subject']},function(err ,user){
   if(err){
      return res.status(401).send('Unauthorized request')    
   }
  })
  next()
}



/* GET users listing. */
//,passport.authenticate('jwt', {session: false}) 
router.get('/',verifyToken,function(req, res){
  User.find({}, 
     function(err, response){
        res.send({response});
     });
   });


module.exports = router;
