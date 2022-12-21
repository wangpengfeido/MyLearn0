this.addEventListener('install', function (event) {
  console.log('------------install1');
  this.skipWaiting();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('------------installed1');
        resolve();
      }, 5000);
    })
  );
});

this.addEventListener('activate', function (event) {
  console.log('------------activate1');
  this.clients.claim();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('-------------activated1');
        resolve();
      }, 10000);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch1a', event.request);
});
