this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', (event) => {
  if (event.request.url.includes('test-fetch')) {
    console.log('----------test-fetch', event);
    event.respondWith(
      (async () => {
        const cache = await caches.open('1');
        await cache.put(
          event.request,
          new Response(new Blob(['my response'], { type: 'text/plain' }))
        );
        const cacheRes = await cache.match(event.request);
        console.log('------------ cache result: ', cacheRes);
        return cacheRes;
      })()
    );
  }
});
