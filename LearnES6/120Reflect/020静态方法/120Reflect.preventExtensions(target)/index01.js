// Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。
let obj = {};
Reflect.preventExtensions(obj);
console.log(Reflect.isExtensible(obj));

// 区别：如果参数不是对象，Object.preventExtensions在 ES5 环境报错，在 ES6 环境返回传入的参数，而Reflect.preventExtensions会报错。

