function doDb() {
  let idbRequest = indexedDB.open('test');
  let db;
  idbRequest.addEventListener('success', function (event) {
    console.log('=========db success');
    db = event.target.result;
  });
  idbRequest.addEventListener('upgradeneeded', function (event) {
    console.log('=========db upgrade');
    db = event.target.result;
    if (!db.objectStoreNames.contains('one')) {
      db.createObjectStore('one', { keyPath: 'a' });
    }
  });
}
console.log('000000000000000');
doDb();

this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
});

this.addEventListener('fetch', function (event) {
  console.log('fetch');
  event.respondWith(
    fetch(event.request).then((res) => {
      console.log('request', event.request);
      return res;
    })
  );
});
