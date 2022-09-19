this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('old fetch', event.request);
  let newRequest = new Request(event.request.url, {
    mode: event.request.mode,
    // credentials: 'omit',
    // credentials: 'same-origin',
    credentials: 'include',
  });

  event.respondWith(fetch(newRequest));
});
