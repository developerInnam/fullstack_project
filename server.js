// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "sql101.infinityfree.com",
  user: process.env.DB_USER || "if0_39724776",
  password: process.env.DB_PASSWORD || "innamalmahdi",
  database: process.env.DB_NAME || "if0_39724776_curd_data",
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Routes
app.get("/api/services", (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.post("/api/services", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO services (title, description) VALUES (?, ?)",
    [title, description],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, title, description });
    }
  );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
