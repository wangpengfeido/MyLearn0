// Object.setPrototypeOf()用于设置一个对象的原型对象。返回参数对象本身。
let obj = {a: 1};
Object.setPrototypeOf(obj, {x: 10});
console.log(Object.getPrototypeOf(obj));

// 如果参数不是对象，将转换为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。
let a = 1;
Object.setPrototypeOf(a, {a: 1});
console.log(a, Object.getPrototypeOf(a));

