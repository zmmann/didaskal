const express = require('express');
const path = require('path');

const app = express();

// default and only GET request serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// static assets are found in PUBLIC directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
