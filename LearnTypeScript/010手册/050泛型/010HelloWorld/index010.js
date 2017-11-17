var N010050010010;
(function (N010050010010) {
    //定义泛型函数
    function identity(arg) {
        return arg;
    }
    //使用泛型函数
    console.log(identity('hello'));
    //类型推论
    console.log(identity(123));
})(N010050010010 || (N010050010010 = {}));
