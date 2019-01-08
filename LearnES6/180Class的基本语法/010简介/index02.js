class O {
    constructor(a) {
        this.a = a;
    }

    f() {
        console.log(this.a);
    }
}

// 因为类的方法是被添加在原型链(prototype)上的
// 所以也可以直接在原型链上添加方法
O.prototype.g = function () {
    console.log(this.a, 'add by prototype');
};

let o = new O(1);
o.g();

// 注：可以使用Object.assign一次向原型链上添加多个方法