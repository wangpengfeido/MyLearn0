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

function add() {
  var request = db
    // 写入数据通过事务完成（transaction）
    .transaction(['one'], 'readwrite')
    // 通过IDBTransaction.objectStore(name)方法，拿到 IDBObjectStore 对象
    .objectStore('one')
    // 通过add()方法，写入一条记录。
    .add({ a: '2222', aa: '122222', b: 'aaaaaaa' });
  request.onsuccess = function(event) {
    console.log('write success');
  };
  request.onerror = function(event) {
    console.log('write error');
  };
}

document.querySelector('.btn').addEventListener('click', function() {
  add();
});
