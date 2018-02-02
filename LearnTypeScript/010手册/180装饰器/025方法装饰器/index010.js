/*
它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
*/
/*
方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2.成员的名字。
3.成员的属性描述符。
*/
/*
如果方法装饰器返回一个值，它会被用作方法的属性描述符。
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var N010180025010;
(function (N010180025010) {
    //装饰器工厂
    function enumerable(value) {
        return function (target, propertyKey, descriptor) {
            console.log('装饰器执行：', target, propertyKey, descriptor);
            descriptor.enumerable = value;
        };
    }
    var Greeter = (function () {
        function Greeter() {
        }
        Greeter.prototype.greet = function () {
            return 'hello';
        };
        __decorate([
            enumerable(false)
        ], Greeter.prototype, "greet", null);
        return Greeter;
    }());
    console.log(Greeter.prototype.propertyIsEnumerable('greet'));
})(N010180025010 || (N010180025010 = {}));
