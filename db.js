const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Create tables if they don't exist
db.serialize(function() {
    // Create users table
    db.run("CREATE TABLE IF NOT EXISTS users (steamID TEXT PRIMARY KEY)");
    // Create favorited videos table that stores each user's favorited videos
    db.run(`CREATE TABLE IF NOT EXISTS favorites (
      steamID TEXT, 
      videoID INT,
      FOREIGN KEY (steamID) REFERENCES users(steamID), 
      FOREIGN KEY (videoID) REFERENCES videos(videoID), 
      PRIMARY KEY (steamID, videoID)
    )`);
    // Create the nade table surely this is how you're supposed to do it and I'm not doing some dumbass shit
    db.run(`CREATE TABLE IF NOT EXISTS videos (
        videoID INTEGER PRIMARY KEY,
        type TEXT,
        start TEXT,
        end TEXT,
        zone TEXT,
        map TEXT,
        team TEXT,
        pro BOOLEAN,
        technique TEXT,
        movement TEXT,
        precision TEXT,
        collection TEXT,
        alt TEXT,
        lineup TEXT,
        thumbnail TEXT,
        video TEXT
      )`);
});

module.exports = { db };