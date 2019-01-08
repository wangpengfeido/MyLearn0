// 如果没有构造方法，会默认添加一个空构造方法

// 构造方法默认返回类的实例对象。当然，也可以返回其他对象
// 这种表现和构造函数是一样的
class C {
    constructor() {
        this.a = 'aaa';
        return {
            z: 1,
        };
    }
}

console.log(new C());