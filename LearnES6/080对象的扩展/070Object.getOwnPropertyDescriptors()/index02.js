// 它可以用来处理Object.assign()不能正确处理取赋值函数的问题
// 配合Object.defineProperties()
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

let obj2 = {};
Object.defineProperties(obj2, Object.getOwnPropertyDescriptors(obj));
console.log(obj2);


// 也可以配合Object.create()进行浅拷贝
let obj3 = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
console.log(obj3);


// 也可以实现一个对象继承另一个对象
let obj4 = Object.create({m: 1000}, Object.getOwnPropertyDescriptors(obj));
// 原来的继承对象被替换掉
console.log(obj4, obj4.m);


// 实现Mixin
let mix = (object) => ({
    with: (...mixins) => mixins.reduce(
        (c, mixin) => Object.create(
            c, Object.getOwnPropertyDescriptors(mixin)
        ), object),
});
console.log(mix({a: 1}).with({b: 2, c: 3}));









