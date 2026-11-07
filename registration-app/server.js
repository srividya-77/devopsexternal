const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let users = [];

app.post('/api/register', (req, res) => {
  users.push(req.body);
  res.json({ message: 'Registered!', user: req.body });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
