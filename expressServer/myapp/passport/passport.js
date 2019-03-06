const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require('../database/data');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'key'
},
function (jwtPayload, cb) {
    user = UserModel.findOne({'email':'yahya@yahya'})
    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return cb(null,user)}
    
//     UserModel.findOne({'email':'yahya@yahya'})
//         .then(user => {
//             console.log("found");
//             return cb(null, user);
//         })
//         .catch(err => {
//             console.log("found");
//             return cb(null, user);

//            // return cb(err);
//         });
// }
));