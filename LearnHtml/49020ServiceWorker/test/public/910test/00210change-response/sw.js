this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', function (event) {
  if (!event.request.url.includes('localhost:3011/test-fetch')) {
    return;
  }

  console.log('----------old fetch', event.request);

  event.respondWith(
    (async () => {
      // 直接定义一个 response（成功） --------------------------------------------------
      // return new Response(
      //   new Blob(['custom text'], {
      //     type: 'text/plain',
      //   }),
      //   { status: 200, statusText: 'SuperSmashingGreat!' }
      // );

      // 修改 response --------------------------------------------------
      const res = await fetch(event.request);

      const newResponse = res.clone(res);
      newResponse.headers.set('my-header', 'aaa');

      return newResponse;
    })()
  );
});
