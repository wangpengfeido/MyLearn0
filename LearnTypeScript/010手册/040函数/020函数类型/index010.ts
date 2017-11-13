namespace N010040020010 {
    //函数类型由参数类型和返回值类型组成

    //可以为函数书写类型
    function a(x: number): number {
        return x;
    }

    const b = function (x: number): number {
        return x;
    };

    //书写完整的参数类型
    //参数名不一定相同
    const c: (num: number) => number = function (x: number): number {
        return x;
    };

    //如果再赋值语句的一端指定类型而另一端未指定，会进行类型推断。
    //如上例d，及下例
    const d: (num: number) => number = function (x) {
        return x;
    }
}