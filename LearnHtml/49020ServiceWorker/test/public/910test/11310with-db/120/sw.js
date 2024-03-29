let db;
let temp;
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
      let _db = event.target.result;
      if (!_db.objectStoreNames.contains('one')) {
        _db.createObjectStore('one', { keyPath: 'a' });
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
  event.waitUntil(
    (async () => {
      const startTime = Date.now();
      db = await doDb();
      temp = 1;
      const spendTime = Date.now() - startTime;
      await fetch(`/called-activate/${JSON.stringify(spendTime)}`);
      return;
    })()
  );
});

this.addEventListener('fetch', function (event) {
  if (event.request.url.includes('/910test/11310with-db/120/console-has-db')) {
    event.respondWith(
      fetch(`/fetch/console-has-db/${JSON.stringify(!!db)}/temp/${JSON.stringify(!!temp)}`)
    );
  } else if (event.request.url.includes('/910test/11310with-db/120/open-db')) {
    event.respondWith(
      (async () => {
        const startTime = Date.now();
        console.time('aaa');
        db = await doDb();
        console.timeEnd('aaa');
        temp = 1;
        const spendTime = Date.now() - startTime;
        return await fetch(`/fetch/opendb/${JSON.stringify(spendTime)}`);
      })()
    );
  }
});
