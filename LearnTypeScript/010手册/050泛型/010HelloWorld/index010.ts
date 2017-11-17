namespace N010050010010 {
    //定义泛型函数
    function identity<T>(arg: T): T {
        return arg;
    }

    //使用泛型函数
    console.log(identity<string>('hello'));
    //类型推论
    console.log(identity(123));
}