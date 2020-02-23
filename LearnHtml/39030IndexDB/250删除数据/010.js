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

function _delete() {
  var request = db
    .transaction(['one'], 'readwrite')
    .objectStore('one')
    // 使用delete()方法删除记录
    .delete('2222');
  request.onsuccess = function(event) {
    console.log('delete success');
  };
  request.onerror = function(event) {
    console.log('delete error');
  };
}

document.querySelector('.btn').addEventListener('click', function() {
  _delete();
});
