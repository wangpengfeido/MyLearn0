// 与Object.getOwnPropertyDescriptor相似
// Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。

let obj = {
    a: 1,
    get b() {return 'b';},
    [Symbol('x')]: 10,
};
Object.defineProperty(obj, 'c', {
    value: 100,
    enumerable: false,
});
obj.__proto__ = {m: 10};

console.log(Object.getOwnPropertyDescriptors(obj));

