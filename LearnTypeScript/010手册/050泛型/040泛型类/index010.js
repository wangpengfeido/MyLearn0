var N010050040010;
(function (N010050040010) {
    //与泛型接口类似，定义泛型类
    //泛型只能用在实例部分，不能用在静态部分
    var A = /** @class */ (function () {
        function A(x, y) {
            this.x = x;
            this.y = y;
        }
        return A;
    }());
    var a = new A(1, 2);
    //提示a.add is not a function
    // console.log(a.add());
    a.add = function () {
        return this.x + this.y;
    };
    console.log(a.add());
})(N010050040010 || (N010050040010 = {}));
