// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
let obj = {
    a: 1,
    [Symbol()]: 2,
};
console.log(Reflect.ownKeys(obj));



