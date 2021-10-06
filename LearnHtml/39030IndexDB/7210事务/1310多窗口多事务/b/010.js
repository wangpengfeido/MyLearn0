let indexDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

let idbRequest = indexDB.open("test");

idbRequest.addEventListener("error", function (event) {
  console.log("error");
});

let db;
idbRequest.addEventListener("success", function (event) {
  console.log("success");
  db = event.target.result;

  db.addEventListener("error", function () {});
});

idbRequest.addEventListener("upgradeneeded", function (event) {
  db = event.target.result;

  let objectStore;
  if (!db.objectStoreNames.contains("one")) {
    objectStore = db.createObjectStore("one", { keyPath: "a" });
  }
});

function add() {
  db.transaction(["one"], "readwrite")
    .objectStore("one")
    .add({ a: "1", b: ["1"] });
  db.transaction(["one"], "readwrite")
    .objectStore("one")
    .add({ a: "2", b: "2" });
}

function doSth() {
  // 测试结果：多窗口同时执行事务也不会冲突。
  // 但是后执行的事务会被阻塞。

  console.time("time");
  const trans1 = db.transaction(["one"], "readwrite");

  trans1.oncomplete = (event) => {
    console.log("trans1 complete");
    console.timeEnd("time");
  };

  console.log("事务");
  const objectStore1 = trans1.objectStore("one");
  request1a = objectStore1.get("1");
  request1a.onsuccess = (event) => {
    console.log("1a success", event);
    sleep(5000);
    const data = request1a.result;
    data.b.push("y");
    request1b = objectStore1.put(data);
    request1b.onsuccess = (event) => {
      console.log("1b success", event);
    };
    request1b.onerror = (event) => {
      console.log("1b error", event);
    };
  };
  request1a.onerror = (event) => {
    console.log("1a error", event);
  };
}

document.querySelector(".btn-add").addEventListener("click", function () {
  add();
});
document.querySelector(".btn-do-sth").addEventListener("click", function () {
  doSth();
});

function sleep(time) {
  const start = Date.now();
  while (true) {
    const current = Date.now();
    if (current - start >= time) {
      break;
    }
  }
}
