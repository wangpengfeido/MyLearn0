let worker = new Worker('./worker.js');

worker.addEventListener('message', function(event) {
  console.log('=====received message in main:', event.data);
});
