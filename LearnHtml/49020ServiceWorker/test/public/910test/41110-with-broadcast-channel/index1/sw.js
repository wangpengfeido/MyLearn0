this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

const channel = new BroadcastChannel('test');
channel.onmessage = function (event) {
  console.log('[in service worker]receive message', event);
};

this.addEventListener('fetch', (event) => {
  if (event.request.url.includes('test-fetch')) {
    channel.postMessage('sw');
    event.respondWith(
      (async () => {
        return fetch(event.request);
      })()
    );
  }
});
