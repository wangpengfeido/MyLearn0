// 在属性描述对象中（Object.getOwnPropertyDescriptor），有enumerable
let obj = {a: 1};
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

////////////////////////////////////////////////////////////
// 有四个操作会忽略enumerable为false的属性。
// ES5
// for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// ES6
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

////////////////////////////////////////////////////////////////
// 另外，ES6 规定，所有 Class 的原型的方法都是不可枚举的。注：原型属性是可枚举的
class C {
    f() {}
}
C.prototype.z="zzz";
console.log(Object.getOwnPropertyDescriptor(C.prototype,'f'));