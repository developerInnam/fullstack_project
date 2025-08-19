const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Your routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Use process.env.PORT for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
