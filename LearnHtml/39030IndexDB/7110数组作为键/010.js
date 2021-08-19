let indexDB =
  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

let idbRequest = indexDB.open('test');

idbRequest.addEventListener('error', function (event) {
  console.log('error');
});

let db;
idbRequest.addEventListener('success', function (event) {
  console.log('success');
  db = event.target.result;

  db.addEventListener('error', function () {});
});

idbRequest.addEventListener('upgradeneeded', function () {
  console.log('upgrade');
  db = event.target.result;

  let objectStore;
  if (!db.objectStoreNames.contains('one')) {
    objectStore = db.createObjectStore('one', { keyPath: ['a', 'b'] });
    objectStore.createIndex('b', 'b', { unique: false });
    objectStore.createIndex('c', 'c', { unique: false });
  }
});

function add() {
  db.transaction(['one'], 'readwrite').objectStore('one').add({ a: '2222', aa: '122222', b: 'a' });
  db.transaction(['one'], 'readwrite').objectStore('one').add({ a: '2222', aa: '122222', b: 'b' });
}

function read() {
  var request = db.transaction(['one'], 'readwrite').objectStore('one').get(['2222', 'a']);
  // 读不到数据
  // var request = db.transaction(['one'], 'readwrite').objectStore('one').get('a');
  request.onsuccess = function (event) {
    console.log('read success');
    if (request.result) {
      console.log('result:', request.result);
    } else {
      console.log('read nothing');
    }
  };
  request.onerror = function (event) {
    console.log('read error', event);
  };
}

document.querySelector('.btn-add').addEventListener('click', function () {
  add();
});
document.querySelector('.btn-read').addEventListener('click', function () {
  read();
});
