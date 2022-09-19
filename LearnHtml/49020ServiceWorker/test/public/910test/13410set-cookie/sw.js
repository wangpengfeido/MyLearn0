this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('------------old fetch', event.request);

  if (event.request.url.includes('no-sw') || event.request.url.split('?')[0].includes('html')) {
    return;
  }

  let newUrl = event.request.url;
  if (newUrl.startsWith('https://localhost:3011')) {
    newUrl = newUrl.replace('3011', '3111');
  }
  let newParams = {
    method: event.request.method,
    keepalive: event.request.keepalive,
    mode: event.request.mode,
    redirect: event.request.redirect,
    referrer: event.request.referrer,
    referrerPolicy: event.request.referrerPolicy,
    signal: event.request.signal,
    headers: event.request.headers,
    cache: event.request.cache,
    credentials: event.request.credentials,
    integrity: event.request.integrity,
  };

  if (event.request.mode === 'navigate') {
    newParams = {
      ...newParams,
      mode: 'cors',
      // credentials: 'same-origin',
    };
    console.log('=================navigate请求', newUrl, newParams);
    event.respondWith(fetch(newUrl, newParams));
    return;
  }

  console.log('=================普通请求');
  event.respondWith(fetch(newUrl, newParams));
});
