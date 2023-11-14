const express = require('express');
const next = require('next');
const passport = require('./passport'); // import passport
const bodyParser = require('body-parser');
const session = require('express-session');
const handleFavorites = require('./favorites');
require('dotenv').config({ path: 'variables.env' });

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const sessionSecret = process.env.SESSION_SECRET;

app.prepare().then(() => {
    const server = express();

    // Middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    // Session
    // TODO: Change secret key
    server.use(session({
        secret: sessionSecret,
        saveUninitialized: false,
        resave: true,
        cookie: {
            // TODO: Ensure you're connecting over HTTPS
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        }
    }));

    // Passport
    server.use(passport.initialize());
    server.use(passport.session());

    // Steam auth routes
    server.get('/auth/steam', 
        passport.authenticate('steam'),
        function(req, res) {
            // The request will be redirected to Steam for authentication, so
            // this function will not be called.
        }
    );
    server.get('/auth/steam/return',
        passport.authenticate('steam', { failureRedirect: '/' }),
        function(req, res) {
            // Successful authentication, redirect home
            if (req.user) {
                req.session.user = { steamID: req.user.id} // Store user data in the session.'
            }
            res.redirect('/');
        }
    );

    // Favorites
    server.post("/api/favorites", handleFavorites);
    
    // Next.js request handler
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> NadeTech server started on http://localhost:3000');
    });
});