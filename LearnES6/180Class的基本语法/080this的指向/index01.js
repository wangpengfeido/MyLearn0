class C {
    constructor() {
        this.a = 10;
    }

    m() {
        console.log(this.a);
    }
}

let o = new C();
// 此时this指向实例对象
o.m();

let m = o.m;
// 此时this为undefined
m();

