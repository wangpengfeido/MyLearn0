const sharedWorker = new SharedWorker('./worker.js');

document.querySelector('.btn').addEventListener('click', function() {
  sharedWorker.port.postMessage('01');
});

sharedWorker.port.onmessage = function(event) {
  console.log('=========receive message', event.data);
};

