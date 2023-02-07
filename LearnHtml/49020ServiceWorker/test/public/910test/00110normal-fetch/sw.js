this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('----------old fetch', event, event.request, event.request.priority);

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

// https://github.com/whatwg/fetch/issues/436
// https://github.com/w3c/ServiceWorker/issues/1137
// https://medium.baqend.com/chromes-service-workers-break-http-2-priorities-649c4e0fa930