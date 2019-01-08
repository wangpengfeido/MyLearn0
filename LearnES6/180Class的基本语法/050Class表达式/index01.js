// 类也有表达式形式
const MyClass1 = class Me {
    constructor() {
        Me.a = 1;
    }
};
// Me只在类内部起效，外部类名还是MyClass1
console.log(new MyClass1());

////////////////////////////////////////////////
// 如果类内部没用到类名，类名可省略
const MyClass2 = class {
    constructor() {
        this.a = 2;
    }
};
console.log(new MyClass2());

///////////////////////////////////
// 可以使用立即执行的Class
console.log(new class {
    constructor() {
        this.a = 3;
    }
}());

