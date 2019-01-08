// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

class C {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

let obj = Reflect.construct(C, [1, 2]);
console.log(obj);



