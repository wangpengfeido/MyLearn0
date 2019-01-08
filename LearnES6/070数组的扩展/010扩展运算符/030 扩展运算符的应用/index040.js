// 任何实现Iterator接口的对象，都可使用扩展运算符
let s = new Set([1, 2, 3]);
console.log(...s);

// Map\Set\Generator函数都可以这样使用