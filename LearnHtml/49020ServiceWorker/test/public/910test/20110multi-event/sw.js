console.log('00000000000');

this.addEventListener('install', function (event) {
  console.log('------------install-1');
  this.skipWaiting();
});
this.addEventListener('install', function (event) {
  console.log('------------install-2');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate-1');
  this.clients.claim();
});
this.addEventListener('activate', function (event) {
  console.log('------------activate-2');
  this.clients.claim();
});

this.addEventListener('fetch', (event) => {
  console.log('=======================fetch-1');
  if (event.request.url.includes('test-fetch')) {
    console.log('----------test-fetch-1', event);

    event.respondWith(
      (async () => {
        const res = await fetch(event.request);
        console.log('------------test-fetch-1 over');
        return res;
      })()
    );
  }
  if (event.request.url.includes('my-fetch')) {
    console.log('----------my-fetch-1', event);

    // event.respondWith(
    //   (async () => {
    //     const res = await fetch(event.request);
    //     console.log('------------my-fetch-1 over');
    //     return res;
    //   })()
    // );
  }
});
this.addEventListener('fetch', (event) => {
  console.log('=======================fetch-2');
  if (event.request.url.includes('test-fetch')) {
    console.log('----------test-fetch-2', event);

    // event.respondWith(
    //   (async () => {
    //     const res = await fetch(event.request);
    //     console.log('------------test-fetch-2 over');
    //     return res;
    //   })()
    // );
  }
  if (event.request.url.includes('my-fetch')) {
    console.log('----------my-fetch-2', event);

    event.respondWith(
      (async () => {
        const res = await fetch(event.request);
        console.log('------------my-fetch-2 over');
        return res;
      })()
    );
  }
});

this.addEventListener('message', async (event) => {
  console.log('--------message-1', event, event.data);
});

this.addEventListener('message', async (event) => {
  console.log('--------message-2', event, event.data);
});
