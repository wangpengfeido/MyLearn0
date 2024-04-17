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
  // 添加响应头
  for (const queryKey in req.query) {
    const headerKey = queryKey.match(/^add-header_(.*)$/i)?.[1];
    if (headerKey) {
      res.header(headerKey, req.query[queryKey]);
    }
  }

  // 只有设置为 false 时不允许跨域
  if (req.query.cors !== 'false') {
    res.header('Access-Control-Allow-Origin', req.query.cors || req.get('Origin') || '*');
  }

  // res.header('Access-Control-Allow-Credentials', 'true');
  // res.header('Access-Control-Allow-Headers', 'a,accept,upgrade-insecure-requests');

  // 条件添加 Service-Worker-Allowed 头
  if (req.method !== 'OPTIONS' && req.query.worker_allowed) {
    res.header('Service-Worker-Allowed', '/');
  }

  // 条件设置 cookie
  if (req.method !== 'OPTIONS' && req.query.set_cookie) {
    const options = {};
    if (req.query.cookie_domain) {
      options.domain = req.query.cookie_domain;
    }
    if (req.query.cookie_same_site) {
      options.sameSite = req.query.cookie_same_site;
    }
    if (req.query.cookie_secure) {
      options.secure = true;
    }
    res.cookie('my-cookie', Math.random(), options);
  }

  // 条件 302
  if (req.method !== 'OPTIONS' && req.query.redirect_to) {
    res.statusCode = 302;
    res.header('Location', req.query.redirect_to);
  }

  // if (req.method === 'OPTIONS') {
  //   res.status(404);
  // }

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

if (argvHttp) {
  const httpServer = http.createServer(app);
  httpServer.listen(argvHttpPort, function () {
    console.log(`http listening ${argvHttpPort}.`);
  });
} else {
  const options = {
    key: fs.readFileSync(`./${argvHttpsHost}-key.pem`),
    cert: fs.readFileSync(`./${argvHttpsHost}.pem`),
  };
  const httpsServer = https.createServer(options, app);
  const httpsPort = 3111;
  httpsServer.listen(httpsPort, function () {
    console.log(`https listening ${httpsPort}.https://${argvHttpsHost}:${httpsPort}`);
  });

  const hostList = [
    { host: 'localhost', httpsPort: 13110 },
    { host: 'test.wpf.com', httpsPort: 13111 },
    { host: 'test2.wpf.com', httpsPort: 13112 },
    { host: 'test3.wpf.com', httpsPort: 13113 },
    { host: 'test.wpf2.com', httpsPort: 13121 },
  ];
  for (const hostItem of hostList) {
    const options = {
      key: fs.readFileSync(`./${hostItem.host}-key.pem`),
      cert: fs.readFileSync(`./${hostItem.host}.pem`),
    };
    const httpsServer = https.createServer(options, app);
    httpsServer.listen(hostItem.httpsPort, function () {});
  }
}
