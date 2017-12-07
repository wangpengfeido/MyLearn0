var N010100010010;
(function (N010100010010) {
    var sym1 = Symbol();
    console.log(sym1);
    var sym2 = Symbol('key');
    var sym3 = Symbol('key');
    //结果：false
    console.log(sym2 === sym3);
})(N010100010010 || (N010100010010 = {}));
