var express = require('express');
var router = express.Router();
// Get Instance from database Connection
var User = require('../database/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("yahyaget");
});




// Basic Function to find users with special username
// Just For Learn until now .
router.get('/users/:id', function(req, res){
User.find({username: req.params.id}, 
   function(err, response){
      console.log(response);
      console.log(response.length);
});
});



module.exports = router;
