const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.all('**', function (req, res, next) {
  if (req.query.worker_allowed) {
    res.header('Service-Worker-Allowed', '/');
  }
  next();
});

app.use(express.static('public'));

app.get('/**', (req, res) => {
  console.log('sw test service be called.', req.path);
  res.send('sw teat service response');
});

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

const server = https.createServer(options, app);
const port = 3011;
server.listen(port, function () {
  console.log(`listening ${port}.https://localhost:${port}`);
});
