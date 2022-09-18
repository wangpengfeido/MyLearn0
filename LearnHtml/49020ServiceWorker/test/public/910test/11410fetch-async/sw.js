this.addEventListener('install', function (event) {
  console.log('install');
});
this.addEventListener('activate', function (event) {
  console.log('activate');
  self.clients.claim();
});

// 错误
this.addEventListener('fetch', async function (event) {
  console.log('---sw fetch----', event.request.url);
  if (event.request.url.includes('/a')) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      });
    });
    let myBlob = new Blob(['my response']);
    let init = { status: 200 };
    let myResponse = new Response(myBlob, init);
    event.respondWith(myResponse);
  }
});
