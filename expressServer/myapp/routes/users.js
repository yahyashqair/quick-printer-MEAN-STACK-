

var express = require('express');
var router = express.Router();
var User = require('../database/data');

/* GET users listing. */

router.get('/', function(req, res){
  User.find({}, 
     function(err, response){
        res.send({response});
     });
  });


module.exports = router;
