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

idbRequest.addEventListener('upgradeneeded', function (event) {
  db = event.target.result;

  let objectStore;
  if (!db.objectStoreNames.contains('one')) {
    objectStore = db.createObjectStore('one', { keyPath: 'a' });
  }
});

function add() {
  db.transaction(['one'], 'readwrite').objectStore('one').add({ a: '1', b: '1' });
  db.transaction(['one'], 'readwrite').objectStore('one').add({ a: '2', b: '2' });
}

function doSth() {
  // 在一个事务中修改两条数据
  
  const trans1 = db.transaction(['one'], 'readwrite');

  trans1.oncomplete = (event) => {
    console.log('trans1 complete');
  };

  const objectStore1 = trans1.objectStore('one');
  objectStore1.put({ a: '1', b: '11' });
  objectStore1.put({ a: '2', b: '22' });
}

document.querySelector('.btn-add').addEventListener('click', function () {
  add();
});
document.querySelector('.btn-do-sth').addEventListener('click', function () {
  doSth();
});
