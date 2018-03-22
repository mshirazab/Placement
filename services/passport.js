const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleId,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      done(null, existingUser);
    } else {
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  },
));