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

function read() {
  var request = db
    .transaction(['one'], 'readwrite')
    .objectStore('one')
    // 通过get()方法，读取数据。
    // 这里查找的是主键的值
    .get('2222');
  request.onsuccess = function(event) {
    console.log('read success');
    // 获取到读取结果
    if (request.result) {
      console.log('result:', request.result);
    } else {
      // 可能会查找不到
      console.log('read nothing');
    }
  };
  request.onerror = function(event) {
    console.log('read error');
  };
}

document.querySelector('.btn').addEventListener('click', function() {
  read();
});
