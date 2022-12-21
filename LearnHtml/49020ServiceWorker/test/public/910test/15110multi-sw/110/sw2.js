this.addEventListener('install', function (event) {
  console.log('------------install2');
  this.skipWaiting();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('------------installed2');
        resolve();
      }, 5000);
    })
  );
});

this.addEventListener('activate', function (event) {
  console.log('------------activate2');
  this.clients.claim();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('-------------activated2');
        resolve();
      }, 10000);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch2', event.request);
});
