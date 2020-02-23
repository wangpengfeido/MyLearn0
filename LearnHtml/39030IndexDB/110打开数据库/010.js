let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// open方法有两个参数，数据库名和版本号
// open方法返回IDBRequest对象
let idbRequest = indexDB.open('test');

// error事件，打开数据库失败
idbRequest.addEventListener('error', function(event) {
  console.log('error');
});

// success事件，打开数据库成功
let db;
idbRequest.addEventListener('success', function(event) {
  console.log('success');
  // idbRequest.result就是IDBDatabase实例
  db = event.target.result;
  // 错误事件遵循冒泡机制，可以在db上来处理所有错误
  db.addEventListener('error', function() {
    console.log('error in db');
  });
});

// upgradeneeded事件，当打开数据库时指定的版本号大于实际版本号，将会触发升级事件
idbRequest.addEventListener('upgradeneeded', function() {
  console.log('upgrade');
  db = event.target.result;
});
