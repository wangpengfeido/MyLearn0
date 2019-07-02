let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// open方法有两个参数，数据库名和版本号
// open方法返回IDBRequest地偶像
let idbRequest = indexDB.open('test');

// 失败事件处理
idbRequest.addEventListener('error', function (event) {
  console.log('error');
});

// 成功事件处理
let db;
idbRequest.addEventListener('success', function (event) {
  console.log('success');
  // idbRequest.result就是IDBDatabase实例
  db = event.target.result;
  // 错误事件遵循冒泡机制，可以在db上来处理所有错误
  db.addEventListener('error',function () {

  });
});

// 当指定的版本号大于实际版本号，将会触发升级事件
idbRequest.addEventListener('upgradeneeded', function () {
  console.log('upgrade');
  db = event.target.result;
});
