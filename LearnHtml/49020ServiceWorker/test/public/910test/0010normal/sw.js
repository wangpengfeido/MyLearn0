this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('------------installed');
        resolve();
      }, 5000);
    })
  );
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  // this.clients.claim();
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('-------------activated');
        resolve();
      }, 10000);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch1b', event.request);
});
