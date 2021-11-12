let indexedDB =
  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// 实验初次初始化数据库耗时约300ms
// 初始化已存在数据库耗时约20ms
// console.time('initDb');
// let idbRequest = indexedDB.open('test');

// idbRequest.addEventListener('error', function (event) {
//   console.log('error');
// });

// let db;
// idbRequest.addEventListener('success', function (event) {
//   console.log('success');
//   db = event.target.result;

//   db.addEventListener('error', function () {});
//   console.timeEnd('initDb');
// });

// idbRequest.addEventListener('upgradeneeded', function (event) {
//   console.log('upgrade');
//   db = event.target.result;

//   let objectStore;
//   if (!db.objectStoreNames.contains('one')) {
//     objectStore = db.createObjectStore('one', { keyPath: 'id' });
//   }
// });

let data = [];
for (let i = 0; i < 100000; i++) {
  const randomNum = Math.random();
  data.push({ id: randomNum, a: randomNum, b: 'bbbbb' });
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

function addWithOpen() {
  console.time('add with open');
  data.map((item) => {
    let idbRequest = indexedDB.open('test');
    idbRequest.addEventListener('success', function (event) {
      let db = event.target.result;
      db.transaction(['one'], 'readwrite').objectStore('one').add(item);
    });
  });
  console.timeEnd('add with open');
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
document.querySelector('.add-with-open').addEventListener('click', function () {
  addWithOpen();
});

function open(params) {
  // 实验结果
  // 首次建库耗时约30ms
  // 首次open耗时约2~3ms
  // 二次open耗时约0.5~1ms
  // 二次耗时要小于首次open，也就是说数据库被open过一次之后，后面的open会快很多
  console.time('open');
  let idbRequest = indexedDB.open('test');
  idbRequest.addEventListener('success', function (event) {
    let db = event.target.result;
    console.timeEnd('open');
  });
  idbRequest.addEventListener('upgradeneeded', function (event) {
    db = event.target.result;
    let objectStore;
    if (!db.objectStoreNames.contains('one')) {
      objectStore = db.createObjectStore('one', { keyPath: 'id' });
    }
  });
}

document.querySelector('.open').addEventListener('click', function () {
  open();
});
