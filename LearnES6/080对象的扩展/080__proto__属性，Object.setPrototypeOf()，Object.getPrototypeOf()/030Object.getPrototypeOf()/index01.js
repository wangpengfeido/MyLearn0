// Object.getPrototypeOf()用于读取一个对象的原型对象
let obj = {a: 1};
Object.setPrototypeOf(obj, {x: 10});
console.log(Object.getPrototypeOf(obj));

// 如果参数不是对象，会被自动转为对象。
console.log(Object.getPrototypeOf(1));
