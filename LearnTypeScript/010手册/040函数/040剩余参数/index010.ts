namespace N010040040010 {
    //使用...定义剩余参数
    //...也会用到函数类型的定义上
    const a: (x: string, ...other: string[]) => string = function (x: string, ...other: string[]) {
        return x + other.join('');
    };

    console.log(a('x'));
    console.log(a('x','y','z'));
}