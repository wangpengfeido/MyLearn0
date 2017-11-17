var N010050050010;
(function (N010050050010) {
    //使用泛型约束，约束类型必须符合lengthwise接口（具有lenght属性）
    function identityLength(arg) {
        return arg.length;
    }
    console.log(identityLength([1, 2, 3]));
    //不允许
    // console.log(identityLength(1));
})(N010050050010 || (N010050050010 = {}));
