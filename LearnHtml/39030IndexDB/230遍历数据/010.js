let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

let idbRequest = indexDB.open('test');

idbRequest.addEventListener('error', function(event) {
  console.log('error');
});

let db;
idbRequest.addEventListener('success', function(event) {
  console.log('success');
  db = event.target.result;

  db.addEventListener('error', function() {});
});

idbRequest.addEventListener('upgradeneeded', function() {
  console.log('upgrade');
  db = event.target.result;

  let objectStore;
  if (!db.objectStoreNames.contains('one')) {
    objectStore = db.createObjectStore('one', { keyPath: 'a' });
    objectStore.createIndex('b', 'b', { unique: false });
    objectStore.createIndex('c', 'c', { unique: false });
  }
});

function readAll() {
  let objectStore = db.transaction(['one'], 'readwrite').objectStore('one');
  // 通过openCursor()方法，遍历数据
  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key, cursor.value);
      // 继续遍历
      cursor.continue();
    } else {
      // 遍历结束
      console.log('cursor over');
    }
  };
}

document.querySelector('.btn').addEventListener('click', function() {
  readAll();
});
