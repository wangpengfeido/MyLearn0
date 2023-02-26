this.addEventListener('install', function (event) {
  console.log('------------install');
  this.skipWaiting();
});

this.addEventListener('activate', function (event) {
  console.log('------------activate');
  this.clients.claim();
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      console.log('aaaaaaaaaaa', event, this);

      const clientId = event.clientId;

      const timeStart = Date.now();
      const client = await this.clients.get(clientId);
      console.log('bbbbbbbb', client);
      console.log('--------时间消耗1', Date.now() - timeStart);

      const timeStart2 = Date.now();
      await this.clients.matchAll();
      console.log('--------时间消耗2', Date.now() - timeStart2);

      return await fetch(event.request);
    })()
  );
});
