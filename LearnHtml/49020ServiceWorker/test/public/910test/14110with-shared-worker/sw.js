this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('-------------old fetch', event.request);
});

// 取不到 SharedWorker，因此 SharedWorker 不能在 ServiceWorker 中使用
console.log('=========', this.SharedWorker);
console.log('=========', SharedWorker);
