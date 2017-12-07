var N010100010020;
(function (N010100010020) {
    var sym1 = Symbol();
    var sym2 = Symbol('key');
    var obj = (_a = {},
        _a[sym1] = 'value',
        _a);
    console.log(obj[sym1]);
    var C = (function () {
        function C() {
        }
        C.prototype[sym2] = function () {
            return "this is Symbol attr in C";
        };
        return C;
    }());
    console.log(new C()[sym2]());
    var _a;
})(N010100010020 || (N010100010020 = {}));
