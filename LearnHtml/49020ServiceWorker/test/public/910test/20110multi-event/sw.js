console.log('00000000000');

this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', (event) => {
  console.log('----------fetch', event);
  if (event.request.url.includes('send-message-in-sw')) {
    console.log('-------this', this, this.navigator);
    this.postMessage({ b: 'bbb' });
    return;
  }

  event.respondWith(
    (async () => {
      const res = await fetch(event.request);
      return res;
    })()
  );
});

this.addEventListener('message', async (event) => {
  console.log('--------message1', event, event.data);
});

this.addEventListener('message', async (event) => {
  console.log('--------message2', event, event.data);
});
