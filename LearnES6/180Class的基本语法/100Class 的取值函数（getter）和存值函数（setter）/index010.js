// 类中也可以定义get/set函数
class C {
    get p() {
        return this._p;
    }

    set p(value) {
        this._p = value;
    }
}

let o = new C();
o.p = 'ppp';
console.log(o.p);

// get/set函数同样被定义在原型中
let prop = C.prototype;
console.log(prop);
console.log(Reflect.getOwnPropertyDescriptor(prop,'p'));
