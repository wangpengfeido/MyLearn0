// self代表子线程自身，它是全局对象（可省略），未指定时this指向self

// 使用message事件接收信息
self.addEventListener('message', function(event) {
  console.log('=====received message in worker:', event.data);
  // 使用postMessage发送消息
  self.postMessage(`${event.data}=>bbb`)
});
