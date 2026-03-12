const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./journal.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS journals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT,
      ambience TEXT,
      text TEXT,
      emotion TEXT,
      keywords TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;