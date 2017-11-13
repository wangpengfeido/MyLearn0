var N010040040010;
(function (N010040040010) {
    //使用...定义剩余参数
    //...也会用到函数类型的定义上
    var a = function (x) {
        var other = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            other[_i - 1] = arguments[_i];
        }
        return x + other.join('');
    };
    console.log(a('x'));
    console.log(a('x', 'y', 'z'));
})(N010040040010 || (N010040040010 = {}));
