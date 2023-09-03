const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const db = require('./db.js');

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM Contact', (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json({ data: results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
