const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

// default and only GET request serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// static assets are found in PUBLIC directory

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
