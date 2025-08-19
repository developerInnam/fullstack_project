const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "dpg-d2i75f6mcj7s73e2ima0-a",
  user: "crud_bata_user",
  password: "990bhyf6Nlyau9PsJxv1yUG31cWFc5Gr",
  database: "crud_bata",
});

db.connect((err) => {
  if (err) console.error("DB connection error:", err);
  else console.log("DB connected");
});

// GET services route
app.get("/api/services", (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
