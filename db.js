const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql101.infinityfree.com',
  user: 'if0_39724776',       // your MySQL username
  password: 'innamalmahdi',       // your MySQL password
  database: 'if0_39724776_curd_data', // your database name
});

db.connect(err => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

module.exports = db;
