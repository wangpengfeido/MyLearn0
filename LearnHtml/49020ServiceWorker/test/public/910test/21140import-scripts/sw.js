self.importScripts('./sw-export.js');

self.addEventListener('install', function (event) {
  console.log('------------install', self.a);
  this.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('------------activate', self.a);
  this.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('test-fetch')) {
    console.log('----------test-fetch', event);
  }
});
