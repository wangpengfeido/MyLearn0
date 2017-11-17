namespace N010050020010{
    //把泛型当作类型的一部分使用
    function identityArr<T>(arg: Array<T>): Array<T> {
        return arg;
    }

    console.log(identityArr<string>(['hello','world']));
    console.log(identityArr([1,2,3]));

    //不允许
    // console.log(identityArr(1));
}