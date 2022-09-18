this.addEventListener('install', function (event) {
  console.log('install');
});

this.addEventListener('fetch', function (event) {
  // 无跨域问题【保持原请求】
  // if (event.request.url === 'https://localhost:3111/img_100k.bmp') {
  console.log('aaaaaaaaaaaaaaaaa', event.request);
  event.respondWith(
    (async () => {
      const clientId = event.clientId;
      if (clientId) {
        if ('get' in clients) {
          const client = await clients.get(clientId);
          const clientUrl = client.url;
          console.log('----------1', clientUrl);
        } else {
          const allClients = await clients.matchAll({ type: 'window' });
          const filtered = allClients.filter((client) => client.id === clientId);
          if (filtered.length > 0) {
            console.log('----------2', clientUrl);
          }
        }
      }
      return await fetch(event.request).then((res) => {
        console.log('1111111111', event.request);
        return res;
      });
    })()
  );
  // }
  // ------------------------------
  // 有跨域问题【提取原请求的url】
  // if (event.request.url === 'https://localhost:3111/img_100k.bmp') {
  //   event.respondWith(
  //     fetch(event.request.url).then(
  //       (res) => {
  //         console.log('1111111111', event.request.url);
  //         return res;
  //       },
  //       (error) => {
  //         console.log('2222222222222');
  //         return Promise.reject(error);
  //       }
  //     )
  //   );
  // }
  // -------------------------------------
  // if (event.request.url === 'https://localhost:3111/img_100k.bmp') {
  //   const init = {
  //     method: event.request.method,
  //     keepalive: event.request.keepalive,
  //     mode: 'no-cors',
  //     redirect: event.request.redirect,
  //     referrer: event.request.referrer,
  //     referrerPolicy: event.request.referrerPolicy,
  //     signal: event.request.signal,
  //     headers: event.request.headers,
  //     body: event.request.body,
  //     bodyUsed: event.request.bodyUsed,
  //     cache: event.request.cache,
  //     credentials: event.request.credentials,
  //     destination: event.request.destination,
  //     integrity: event.request.integrity,
  //   };
  //   const newRequest = new Request('https://localhost:3111/img_3m.bmp', init);
  //   console.log('000000000', newRequest);
  //   event.respondWith(
  //     fetch(newRequest).then(
  //       (res) => {
  //         console.log('1111111111', event.request.url, res);
  //         return res;
  //       },
  //       (error) => {
  //         console.log('2222222222222');
  //         return Promise.reject(error);
  //       }
  //     )
  //   );
  // }
  // ------------------------------------
  // Request对象url不可修改
  // if (event.request.url === 'https://localhost:3111/img_100k.bmp') {
  //   let newRequest = event.request.clone();
  //   newRequest.url = 'https://localhost:3111/img_3m.bmp';
  //   console.log('aaaaaaa', event.request, newRequest);
  //   event.respondWith(
  //     fetch(newRequest).then((res) => {
  //       console.log('1111111111', event.request.url);
  //       return res;
  //     })
  //   );
  // }
});

// if (event.request.url === 'https://localhost:3111/img_100k.bmp') {
//   event.respondWith(async () => {
//     // const clientId = event.clientId;
//     // if (clientId) {
//     //   if ('get' in clients) {
//     //     const client = await clients.get(clientId);
//     //     const clientUrl = client.url;
//     //     console.log('----------1', clientUrl);
//     //   } else {
//     //     const allClients = await clients.matchAll({ type: 'window' });
//     //     const filtered = allClients.filter((client) => client.id === clientId);
//     //     if (filtered.length > 0) {
//     //       console.log('----------2', clientUrl);
//     //     }
//     //   }
//     // }
//     return await fetch(event.request).then((res) => {
//       console.log('1111111111', event.request);
//       return res;
//     });
//   });
// }
