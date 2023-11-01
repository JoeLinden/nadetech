require('dotenv').config({ path: 'variables.env' });

const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const { db } = require('./db');
const apiKey = process.env.API_KEY;

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: apiKey
  },
  function(identifier, profile, done) {
    // Attempt to find user in the database
    db.get('SELECT * FROM users WHERE steamID = ?', [profile.id], (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            // User doesn't exist, create them and get their steamID
            db.run('INSERT INTO users (steamID) VALUES (?)', [profile.id], (err) => {
                if (err) { return done(err); }
                // Fetch user from database
                db.get('SELECT * FROM users WHERE steamID = ?', [profile.id], (err, user) => {
                    if (err) { return done(err); }
                    return done(null, user);
                });
            });
        } else {
            // User exists, return them
            return done(null, user);
        }
    });
  }
));

passport.serializeUser(function(user, done) {
    // Serialize user into session
    done(null, user.steamID);
});

passport.deserializeUser(function(id, done) {
    // Fetch user from database using id
    db.get('SELECT * FROM users WHERE steamID = ?', [id], (err, user) => {
        if (err) { return done(err); }
        done(null, user);
    });
});

module.exports = passport;