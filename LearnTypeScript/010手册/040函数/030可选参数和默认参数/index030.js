var N010040030030;
(function (N010040030030) {
    //指定默认参数
    //它与index020中的函数的类型都是：(x:number,y?:number)=>number
    function a(x, y) {
        if (y === void 0) { y = 0; }
        return x + y;
    }
    a(1, 2);
    a(1);
    //不允许
    // a(1,2,3);
})(N010040030030 || (N010040030030 = {}));
