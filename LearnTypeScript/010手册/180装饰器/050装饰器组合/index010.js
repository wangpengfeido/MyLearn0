var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var N010180050010;
(function (N010180050010) {
    function f() {
        console.log("f():evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("f():called");
        };
    }
    function g() {
        console.log("g():evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("g():called");
        };
    }
    /*
    当多个装饰器应用于一个声明上，它们求值方式与复合函数相似。
    1.由上至下依次对装饰器表达式求值。
    2.求值的结果会被当作函数，由下至上依次调用。
    */
    var C = (function () {
        function C() {
        }
        C.prototype.method = function () {
        };
        __decorate([
            f(),
            g()
        ], C.prototype, "method", null);
        return C;
    }());
    /*
     结果：
     f():evaluated
     g():evaluated
     g():called
     f():called
     */
})(N010180050010 || (N010180050010 = {}));
