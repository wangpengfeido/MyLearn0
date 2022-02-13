this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  if (event.request.url.includes('/test-fetch')) {
    console.log('old fetch', event.request);

    // let newRequest = new Request('https://localhost:3011/test-fetch', {
    //   // mode: 'no-cors',
    //   mode: 'cors',
    // });

    let newRequest = new Request('https://localhost:3111/test-fetch', {
      // mode: 'no-cors',
      mode: 'cors',
    });

    console.log('new fetch', newRequest);
    event.respondWith(fetch(newRequest));
  }
});
