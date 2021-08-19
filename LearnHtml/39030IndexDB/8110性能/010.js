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
    objectStore = db.createObjectStore('one', { keyPath: 'id' });
  }
});

let data = [];
for (let i = 0; i < 100000; i++) {
  data.push({ id: i, a: Math.random(), b: 'bbbbb' });
}

function add() {
  // 实验每条事务耗时约0.04ms
  console.time('add');
  data.map((item) => {
    db.transaction(['one'], 'readwrite').objectStore('one').add(item);
  });
  console.timeEnd('add');
}

function get() {
  // 实验每条事务耗时约0.03ms
  console.time('get');
  data.map((item) => {
    db.transaction(['one'], 'readwrite').objectStore('one').get(item.id);
  });
  console.timeEnd('get');
}

function put() {
  const newData = data.map((item) => ({ ...item, b: item.b + 'z' }));
  // 实验每条事务耗时约0.04ms
  console.time('put');
  newData.map((item) => {
    db.transaction(['one'], 'readwrite').objectStore('one').put(item);
  });
  console.timeEnd('put');
}

document.querySelector('.add').addEventListener('click', function () {
  add();
});
document.querySelector('.get').addEventListener('click', function () {
  get();
});
document.querySelector('.put').addEventListener('click', function () {
  put();
});
