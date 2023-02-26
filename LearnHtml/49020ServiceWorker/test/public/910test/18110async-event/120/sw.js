this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

// 可以正常执行
let a = 1;
(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      a = 2;
      resolve();
    }, 10000);
  });
})();

this.addEventListener('fetch', function (event) {
  console.log('bbbbbbbbbb', a);
  event.respondWith(
    (async () => {
      return await fetch(event.request);
    })()
  );
});
