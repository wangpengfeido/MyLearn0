const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
/** 是否使用 http */
const argvHttp = argv['http'];
/** http 端口 */
const argvHttpPort = argv['http-port'] || 3112;
/** https 域名 */
const argvHttpsHost = argv['http-host'] || 'localhost';

const app = express();

app.all('**', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin'));

  // res.header('Access-Control-Allow-Credentials', 'true');
  // res.header('Access-Control-Allow-Headers', 'a,accept,upgrade-insecure-requests');

  // 添加响应头
  for (const queryKey in req.query) {
    const headerKey = queryKey.match(/^add-header_(.*)$/)?.[1];
    if (headerKey) {
      res.header(headerKey, req.query[queryKey]);
    }
  }

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

// 静态目录
app.use(express.static('public'));

// 静态目录
app.use(express.static('../'));

// 自定义
app.all('/**', (req, res) => {
  console.log('learn html service be called.', req.path);
  res.send('learn html service response');
});

const options = {
  key: fs.readFileSync(`./${argvHttpsHost}-key.pem`),
  cert: fs.readFileSync(`./${argvHttpsHost}.pem`),
};

const httpsServer = https.createServer(options, app);
const httpsPort = 3111;
httpsServer.listen(httpsPort, function () {
  console.log(`https listening ${httpsPort}.https://${argvHttpsHost}:${httpsPort}`);
});

if (argvHttp) {
  const httpServer = http.createServer(app);
  httpServer.listen(argvHttpPort, function () {
    console.log(`http listening ${argvHttpPort}.`);
  });
}
