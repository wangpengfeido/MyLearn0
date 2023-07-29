this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch');

  if (!event.request.url.includes('/test-fetch')) {
    return;
  }

  event.respondWith(
    (async () => {
      console.log('=======================');
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 10000);
      });
      return await fetch(event.request);
    })()
  );
});
