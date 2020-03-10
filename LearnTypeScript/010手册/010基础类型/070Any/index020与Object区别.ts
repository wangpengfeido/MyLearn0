// Object与any的区别是，变量可以赋予任何值，但不能访问任意成员
let notSure: Object;
notSure = 4;
// 不能访问：
// notSure.someMethod();
