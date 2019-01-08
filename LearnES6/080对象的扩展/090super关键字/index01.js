// super，指向当前对象的原型对象。
// 它只能用在对象的方法中
const obj = {
    a: 10
};

const obj2 = {
    // 注意，只有方法的简写写法能正确识别super
    m() {
        console.log(super.a);
    },
    // 报错，super不能被正确识别
    // m2: function () {
    //     console.log(super.a);
    // }
};

Object.setPrototypeOf(obj2, obj);
obj2.m();
obj2.m2();


