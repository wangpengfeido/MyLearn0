// 与Set不同的是
// WeakSet只能放对象
// WeakSet对对象的引用是弱引用

// 由于WeakSet对象内部存在的对象不确定，所以WeakSet不可遍历

let ws = new WeakSet();

let obj = {a: {a: 1}};
ws.add(obj.a);
console.log(ws.has(obj.a));

delete obj.a;
// 对象被释放后，存储在WeakSet中的也相应删除
console.log(ws.has(obj.a));