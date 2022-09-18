this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('------------1', event.request);
  let newRequest = event.request;
  // let newRequest = new Request(event.request.url, { mode: 'navigate' });
  // let newRequest = new Request(event.request.url, { mode: 'cors' });
  // let newRequest = new Request('https://localhost:3111/', { mode: 'cors' });
  console.log('------------2', newRequest);
  // event.respondWith(fetch(newRequest));
  event.respondWith(
    (async () => {
      const res = await fetch(newRequest);
      console.log('----------3', res);
      return res;
    })()
  );
});
