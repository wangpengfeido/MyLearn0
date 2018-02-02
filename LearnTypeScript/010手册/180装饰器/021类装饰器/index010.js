/*
类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function scaled(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter = (function () {
    function Greeter(a) {
        if (a === void 0) { a = 'aaa'; }
        this.a = a;
    }
    Greeter.prototype.m = function () { };
    Greeter = __decorate([
        scaled
    ], Greeter);
    return Greeter;
}());
//由于Greeter.prototype被锁定，所以m方法无法被删除，后面打印m方法仍然是一个Function
//如果不使用上面的装饰器，打印m方法将是undefined
delete Greeter.prototype.m;
var g = new Greeter('a');
console.log(g.m);
