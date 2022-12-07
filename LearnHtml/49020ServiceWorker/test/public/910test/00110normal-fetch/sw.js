this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch', event.request);

  event.respondWith(
    (async () => {
      // return await fetch(event.request);

      const originRequest = event.request;
      const bodyP = originRequest?.headers?.get('Content-Type')
        ? await originRequest?.clone()?.blob()
        : undefined;
      const requestInit = {
        method: originRequest?.method,
        keepalive: originRequest?.keepalive,
        mode: originRequest?.mode,
        redirect: originRequest?.redirect,
        referrer: originRequest?.referrer,
        referrerPolicy: originRequest?.referrerPolicy,
        signal: originRequest?.signal,
        headers: originRequest?.headers,
        body: bodyP,
        cache: originRequest?.cache,
        credentials: originRequest?.credentials,
        integrity: originRequest?.integrity,
      };
      return await fetch(event.request.url, requestInit);
    })()
  );
});
