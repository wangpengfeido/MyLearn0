let worker = new Worker('./worker.js');

// 使用postMessage发送信息
worker.postMessage('aaa');

// 使用message事件接收信息
worker.addEventListener('message', function(event) {
  console.log('=====received message in main:', event.data);
});
