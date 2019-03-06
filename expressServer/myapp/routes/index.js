var express = require('express');
var router = express.Router();
// Get Instance from database Connection
// const passport = require('passport');
var User = require('../database/data');

/* GET home page. */


// router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
//   res.json({ 
//     message : 'Signup successful',
//     user : req.user 
//   });
// });


module.exports = router;
