this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch', event.request.url, event.request);
  if (event.request.mode === 'navigate') {
    return;
  }

  event.respondWith(
    (async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 10000);
      });

      return await fetch(event.request);
    })()
  );
});
