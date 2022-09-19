const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.all('**', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin'));
  res.header('Access-Control-Allow-Credentials', 'true');

  // 条件添加 Service-Worker-Allowed 头
  if (req.query.worker_allowed) {
    res.header('Service-Worker-Allowed', '/');
  }

  // 条件设置 cookie
  if (req.query.set_cookie) {
    res.cookie('my-cookie', Math.random());
  }

  // 条件 302
  if (req.query.redirect_to) {
    res.statusCode = 302;
    res.header('Location', req.query.redirect_to);
  }

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
  console.log(`listening ${port}.https://localhost:${port}`);
});
