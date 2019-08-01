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

function put() {
  var request = db
    .transaction(['one'], 'readwrite')
    .objectStore('one')
    // 通过put()方法，更新数据。新值会整个取代旧值
    .put({a:'2222',c:'cccccc'});
  request.onsuccess = function(event) {
    console.log('put success');
  };
  request.onerror = function(event) {
    console.log('put error');
  };
}

document.querySelector('.btn').addEventListener('click', function() {
  put();
});
