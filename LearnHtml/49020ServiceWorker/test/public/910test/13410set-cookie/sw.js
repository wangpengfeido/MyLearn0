this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('old fetch', event.request);

  if (event.request.url.includes('no-sw')) {
    return;
  }

  event.respondWith(fetch(event.request));
});
