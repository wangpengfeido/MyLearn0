this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

// this.addEventListener('fetch', function (event) {
//   console.log('aaaaaaaaaa');
//   event.respondWith(
//     (async () => {
//       return await fetch(event.request);
//     })()
//   );
// });

(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  // 均不能生效
  console.log('111111111', this);
  this.addEventListener('fetch', function (event) {
    console.log('bbbbbbbbbb');
    event.respondWith(
      (async () => {
        return await fetch(event.request);
      })()
    );
  });
  // this.onfetch = function (event) {
  //   console.log('bbbbbbbbbb');
  //   event.respondWith(
  //     (async () => {
  //       return await fetch(event.request);
  //     })()
  //   );
  // };
})();
