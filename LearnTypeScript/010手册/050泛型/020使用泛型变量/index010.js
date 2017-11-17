var N010050020010;
(function (N010050020010) {
    //把泛型当作类型的一部分使用
    function identityArr(arg) {
        return arg;
    }
    console.log(identityArr(['hello', 'world']));
    console.log(identityArr([1, 2, 3]));
    //不允许
    // console.log(identityArr(1));
})(N010050020010 || (N010050020010 = {}));
