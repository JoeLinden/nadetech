const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function handler(req, res) {
  console.log("Favorites handler called.");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  const { videoID } = req.body;
 
  // Check if the user is authenticated
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const steamID = req.session.passport ? req.session.passport.user : null;

  try {
    console.log("Session Data before query: ", req.session);
    console.log("Steam ID: ", steamID);
    await db.run(
        "INSERT INTO favorites (steamID, videoID) VALUES (?, ?)",
        steamID,
        videoID
    );
    res.status(200).json({ message: "Favorite added" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding favorite" });
  }
}
module.exports = handler;