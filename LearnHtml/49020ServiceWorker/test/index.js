const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/**', (req, res) => {
  console.log('be called.hello world.', req.path);
  res.send('hello world');
});

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

const server = https.createServer(options, app);
const port = 3011;
server.listen(port, function () {
  console.log(`listening ${port}`);
});
