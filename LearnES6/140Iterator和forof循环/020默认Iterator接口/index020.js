// 下列数据结构默认部署了遍历器接口
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象

let arr = [1, 2, 3, 4];
let iterOfArr = arr[Symbol.iterator]();
console.log(iterOfArr.next());
console.log(iterOfArr.next());
console.log(iterOfArr.next());

// 不为对象默认部署遍历器接口的原因是：遍历器是线性遍历，而对象是非线性的，需要手动指定遍历顺序


