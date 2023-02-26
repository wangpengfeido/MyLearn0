const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.all('**', function (req, res, next) {
  // 条件添加 Service-Worker-Allowed 头
  if (req.method !== 'OPTIONS' && req.query.worker_allowed) {
    res.header('Service-Worker-Allowed', '/');
  }

  // 条件设置 cookie
  if (req.method !== 'OPTIONS' && req.query.set_cookie) {
    res.cookie('my-cookie', Math.random());
  }

  // 条件 302
  if (req.method !== 'OPTIONS' && req.query.redirect_to) {
    res.statusCode = 302;
    res.header('Location', req.query.redirect_to);
  }

  next();
});

app.use(express.static('public'));

app.get('/**/test-js.js', (req, res) => {
  console.log('sw test service be called.', req.path);

  res.send(`console.log("test js: ","${req.path}")`);
});

app.get('/**', (req, res) => {
  console.log('sw test service be called.', req.path);

  res.send('sw test service response');
});

app.post('/**', (req, res) => {
  console.log('[post]sw test service be called.', req.path);

  res.send('[post]sw test service response');
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
