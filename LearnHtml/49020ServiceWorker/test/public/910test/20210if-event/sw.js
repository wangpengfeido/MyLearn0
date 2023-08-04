console.log('00000000000');

this.addEventListener('install', function (event) {
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  this.clients.claim();
});

if (true) {
  this.addEventListener('message', async (event) => {
    console.log('--------message-1', event, event.data);
  });
}

if (false) {
  this.addEventListener('message', async (event) => {
    console.log('--------message-2', event, event.data);
  });
}

(async () => {
  this.addEventListener('message', async (event) => {
    await new Promise((resolve) => {
      setTimeout(resolve);
    });
    console.log('--------message-3', event, event.data);
  });
})();
