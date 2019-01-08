class O {
    // 构造方法相当于原构造函数。构造方法也可以视作在原型链上，因为O.prototype.constructor===O
    constructor(a) {
        this.a = a;
    }

    //方法被写到原型链(O.prototype)上
    f() {
        console.log(this.a);
    }
}

let o = new O('1');
o.f();

// 与ES5相同，prototype对象的constructor属性指向类本身，即O.prototype.constructor===O
console.log(O.prototype.constructor === O);

//////////////////////////////////////////////////
// 它相当于
function O2(a) {
    this.a = a;
}

O2.prototype.f = function () {
    console.log(this.a);
};
let o2 = new O2(2);
o2.f();

