let indexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// 在打开数据库时，如果数据库不存在，会创建新的数据库，并触发upgradeneeded事件
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
  // 在需要upgrade时，先被upgrade，然后success
  console.log('upgrade');
  
  db = event.target.result;

  // 在upgradeneeded事件中对更新的数据库进行操作

  // 创建新的数据仓库
  let objectStore;
  if (!db.objectStoreNames.contains('one')) {
    // 如果数据仓库已存在会抛出错误，所以我们判断了一下
    // 如果要修改旧的数据仓库，需要先删掉原来的数据仓库，再创建新的（数据可以在别处保存）
    // 第二个参数为提供键的方式
    objectStore = db.createObjectStore('one', { keyPath: 'a' });
    // 创建索引，三个参数分别为索引名称、索引所在的属性、配置对象
    objectStore.createIndex('b', 'b', { unique: false });
    objectStore.createIndex('c', 'c', { unique: false });
    // wpf注：所谓索引，因为indexdb的数据是对象，索引就是对象的key
  }
});
