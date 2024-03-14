const user = require("../models/user");
const JwtStratergy = require("passport-jwt").Strategy,
  extractJwt = require("passport-jwt").ExtractJwt;
const config = require("../config/config");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

module.exports = new JwtStratergy(opts, (jwt_payload, done) => {
  user.findById(jwt_payload.id, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});
