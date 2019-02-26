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

// Add users to the database 
// Just For Learn until now .
router.post('/', function(req, res){
  var personInfo = req.body; //Get the parsed information
     var newPerson = new User({
        email: personInfo.email,
        password: personInfo.password,
        idbzu: personInfo.idnumber,
        username:personInfo.username
     });
     newPerson.save(function(err, Person){
        if(err)
        res.send({"error": personInfo});
        else
        res.send({"Yeees": personInfo});
     });
  console.log("yahyapost");
});


router.post('/login', function(req, res) {
  console.log(req.body)
  res.send({"message": "Data received"});
});


module.exports = router;
