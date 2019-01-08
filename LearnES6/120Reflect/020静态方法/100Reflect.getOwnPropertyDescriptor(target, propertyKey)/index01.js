// Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor
let obj = {a: 1};
console.log(Reflect.getOwnPropertyDescriptor(obj, 'a'));

// 区别：第一个参数不是对象，Object.getOwnPropertyDescriptor(1, 'foo')不报错，返回undefined，而Reflect.getOwnPropertyDescriptor(1, 'foo')会抛出错误

