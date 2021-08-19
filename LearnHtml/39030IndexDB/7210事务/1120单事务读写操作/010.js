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
  // 可以在一个事务中进行读写操作
  // 此处的打印顺序为：1a success...1b success...trans1 complete

  const trans1 = db.transaction(['one'], 'readwrite');

  trans1.oncomplete = (event) => {
    console.log('trans1 complete');
  };

  const objectStore1 = trans1.objectStore('one');

  request1a = objectStore1.get('1');
  request1a.onsuccess = (event) => {
    console.log('1a success', event);
    const data = request1a.result;
    data.b += 'z';
    request1b = objectStore1.put(data);
    request1b.onsuccess = (event) => {
      console.log('1b success', event);
    };
    request1b.onerror = (event) => {
      console.log('1b error', event);
    };
  };
  request1a.onerror = (event) => {
    console.log('1a error', event);
  };
}

document.querySelector('.btn-add').addEventListener('click', function () {
  add();
});
document.querySelector('.btn-do-sth').addEventListener('click', function () {
  doSth();
});
