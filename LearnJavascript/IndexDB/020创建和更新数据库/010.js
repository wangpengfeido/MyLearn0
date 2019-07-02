let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// 在打开数据库时，如果数据库不存在，会创建新的数据库，并触发upgradeneeded事件
let idbRequest = indexDB.open('test');

idbRequest.addEventListener('error', function (event) {
  console.log('error');
});

let db;
idbRequest.addEventListener('success', function (event) {
  console.log('success');
  db = event.target.result;
  db.addEventListener('error', function () {

  });
});

idbRequest.addEventListener('upgradeneeded', function () {
  console.log('upgrade');
  db = event.target.result;

  // 在upgradeneeded事件中对更新的数据库进行操作

  // 创建新的数据仓库
  let objectStore;
  if (!db.objectStoreNames.contains('name')) {
    // 如果要修改旧的数据仓库，需要先删掉原来的数据仓库，再创建新的（数据在别处保存）
    // 如果数据仓库已存在会抛出错误，所以我们判断了一下
    objectStore = db.createObjectStore('name', {keyPath: 'myKey'});
  }
});
