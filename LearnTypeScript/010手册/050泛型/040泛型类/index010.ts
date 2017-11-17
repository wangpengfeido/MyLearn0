namespace N010050040010 {
    //与泛型接口类似，定义泛型类
    //泛型只能用在实例部分，不能用在静态部分
    class A<T> {
        constructor(x: T, y: T) {
            this.x = x;
            this.y = y;
        }

        x: T;
        y: T;
        add: () => T;
    }

    let a: A<number> = new A(1, 2);
    //提示a.add is not a function
    // console.log(a.add());
    a.add = function () {
        return this.x + this.y;
    };
    console.log(a.add());
}