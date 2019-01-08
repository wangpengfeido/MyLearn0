const obj1 = {
    a: 1,
    m() {
        console.log(this.a);
    }
};

const obj2 = {
    a: 100,
    n() {
        console.log(super.a);
    },
    n2() {
        super.m();
    }
};

Object.setPrototypeOf(obj2, obj1);
obj2.n();  //1
// 在obj2调用obj1.m()时，m()的this对象已指向当前obj
obj2.n2(); // 100


