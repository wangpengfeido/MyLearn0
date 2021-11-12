this.addEventListener('install', function (event) {
  console.log('install');
});
this.addEventListener('activate', function (event) {
  console.log('activate');
  self.clients.claim();
});

this.addEventListener('fetch', async function (event) {
  console.log('---sw fetch----', event.request.url);
  if (event.request.url.includes('/index.js')) {
    event.respondWith(fetch(event.request.url));
    // event.respondWith(
    //   (async () => {
    //     return fetch(event.request.url);
    //   })()
    // );
  }
});
