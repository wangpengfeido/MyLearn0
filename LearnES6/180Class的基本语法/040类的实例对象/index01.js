class C {
    constructor() {
        this.a = 'aaa';
    }

    // 前面说过，除了定义在this上的，都定义在原形上
    m() {
        console.log('mmm');
    }
}

let o1 = new C();
console.log(o1.hasOwnProperty('m')); // false

////////////////////////////////////////////////////////
let o2 = new C();
// 与ES5一样，原型是共享的。所以最好不要修改类的原型，否则将影响到所有对象实例。
console.log(o1.constructor.prototype === o2.constructor.prototype);
// 此处即__proto__，但__proto__不是标准实现，故不用

