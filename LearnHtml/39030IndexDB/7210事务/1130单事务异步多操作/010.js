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
  // 事务中的操作不能异步执行
  // 推测：是通过事件循环的结束来判断事务开始执行的

  const trans1 = db.transaction(['one'], 'readwrite');

  trans1.oncomplete = (event) => {
    console.log('trans1 complete');
  };

  const objectStore1 = trans1.objectStore('one');
  objectStore1.put({ a: '1', b: '11' });
  setTimeout(() => {
    // 报错：事务已结束
    objectStore1.put({ a: '2', b: '22' });
  }, 1000);
}

document.querySelector('.btn-add').addEventListener('click', function () {
  add();
});
document.querySelector('.btn-do-sth').addEventListener('click', function () {
  doSth();
});
