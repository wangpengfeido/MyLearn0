window.URL = window.URL || window.webkitURL;
var response = `
self.addEventListener('message', function(event) {
  console.log('=====received message in worker:', event.data);
  self.postMessage(event.data+"bbb")
});
`;
var blob;
try {
  blob = new Blob([response], { type: 'application/javascript' });
} catch (e) {
  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
  blob = new BlobBuilder();
  blob.append(response);
  blob = blob.getBlob();
}

let worker = new Worker(URL.createObjectURL(blob));

// 使用postMessage发送信息
worker.postMessage('aaa');

// 使用message事件接收信息
worker.addEventListener('message', function (event) {
  console.log('=====received message in main:', event.data);
});
