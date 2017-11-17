namespace N010050050010 {
    interface lengthwise {
        length: number;
    }

    //使用泛型约束，约束类型必须符合lengthwise接口（具有lenght属性）
    function identityLength<T extends lengthwise>(arg: T): number {
        return arg.length;
    }

    console.log(identityLength([1, 2, 3]));
    //不允许
    // console.log(identityLength(1));
}