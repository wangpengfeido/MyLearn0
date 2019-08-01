const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

const options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem'),
};

const server = https.createServer(options, app);
server.listen(3011, function() {
  console.log('listening 3011');
});
