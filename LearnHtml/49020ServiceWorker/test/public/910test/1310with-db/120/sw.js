let db;
// 首次调用必为false。它是在active之前调用的
fetch(`/outer/hasdb/${JSON.stringify(!!db)}`);

function doDb() {
  return new Promise((resolve) => {
    let idbRequest = indexedDB.open('test');
    idbRequest.addEventListener('success', function (event) {
      console.log('=========db success');
      let _db = event.target.result;
      resolve(_db);
    });
    idbRequest.addEventListener('upgradeneeded', function (event) {
      console.log('=========db upgrade');
      db = event.target.result;
      if (!db.objectStoreNames.contains('one')) {
        db.createObjectStore('one', { keyPath: 'a' });
      }
    });
  });
}

this.addEventListener('install', function (event) {
  console.log('------------install');
});
this.addEventListener('activate', function (event) {
  console.log('------------activate');
  self.clients.claim();
  fetch(`/called-activate`);
  event.waitUntil(
    (async () => {
      console.log('111111111111');
      const startTime = Date.now();
      db = await doDb();
      const spendTime = Date.now() - startTime;
      await fetch(`/called-activate/${JSON.stringify(spendTime)}`);
      return;
    })()
  );
});

this.addEventListener('fetch', function (event) {
  console.log(self.db);
  if (event.request.url.includes('/910test/1310with-db/120/console-has-db')) {
    event.respondWith(fetch(`/fetch/console-has-db/${JSON.stringify(!!db)}`));
  } else if (event.request.url.includes('/910test/1310with-db/120/open-db')) {
    event.respondWith(
      (async () => {
        const startTime = Date.now();
        db = await doDb();
        const spendTime = Date.now() - startTime;
        return await fetch(`/fetch/opendb/${JSON.stringify(spendTime)}`);
      })()
    );
  }
});
