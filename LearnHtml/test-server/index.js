const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.all('**', function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'https://localhost:3011');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.static('public'));

app.get('/**', (req, res) => {
  console.log('learn html service be called.', req.path);
  res.send('learn html service response');
});

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

const server = https.createServer(options, app);
const port = 3111;
server.listen(port, function () {
  console.log(`listening ${port}`);
});
