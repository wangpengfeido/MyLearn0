// 首次调用必为false。它是在active之前调用的
fetch(`/outer/hasdb/${JSON.stringify(!!self.__db)}`);

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
      self.__db = await doDb();
      const spendTime = Date.now() - startTime;
      await fetch(`/called-activate/${JSON.stringify(spendTime)}`);
      return;
    })()
  );
});

this.addEventListener('fetch', function (event) {
  if (event.request.url.includes('/910test/1310with-db/130/console-has-db')) {
    event.respondWith(fetch(`/fetch/console-has-db/${JSON.stringify(!!self.__db)}`));
  } else if (event.request.url.includes('/910test/1310with-db/130/open-db')) {
    event.respondWith(
      (async () => {
        const startTime = Date.now();
        self.__db = await doDb();
        const spendTime = Date.now() - startTime;
        return await fetch(`/fetch/opendb/${JSON.stringify(spendTime)}`);
      })()
    );
  }
});
