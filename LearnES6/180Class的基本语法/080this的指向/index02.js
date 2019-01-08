class C {
    constructor() {
        this.a = 10;
        // 使用箭头函数可以使this的指向始终为对象实例
        this.m1 = () => {
            console.log(this.a);
        }
    }

    m() {
        console.log(this.a);
    }

    // TODO:或者使用Proxy
}

let o = new C();

let m1 = o.m1;
m1();


