// Reflect.defineProperty方法基本等同于Object.defineProperty
let obj = {};
Reflect.defineProperty(obj, 'a', {value: 1, enumerable: true});
console.log(obj);

// 如果Reflect.defineProperty的第一个参数不是对象，就会抛出错误

// TODO:与Proxy.defineProperty配合使用。


