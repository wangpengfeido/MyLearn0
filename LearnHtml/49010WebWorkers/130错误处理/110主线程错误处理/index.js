let worker = new Worker('./worker.js');

worker.addEventListener('message', function(event) {
  console.log('=====received message in main:', event.data);
});
// 监听error
worker.addEventListener('error', function(event) {
  console.log('=========catch error in main',event);
});
