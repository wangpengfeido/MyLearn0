namespace N010180050010 {
    function f() {
        console.log("f():evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("f():called");
        }
    }

    function g() {
        console.log("g():evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log("g():called");
        }
    }

    /*
    当多个装饰器应用于一个声明上，它们求值方式与复合函数相似。
    1.由上至下依次对装饰器表达式求值。
    2.求值的结果会被当作函数，由下至上依次调用。
    */
    class C {
        @f()
        @g()
        method() {

        }
    }

    /*
     结果：
     f():evaluated
     g():evaluated
     g():called
     f():called
     */
}