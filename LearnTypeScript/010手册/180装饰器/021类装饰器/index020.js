var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var N010180050020;
(function (N010180050020) {
    function classDecorator(constructor) {
        //当有返回值时，原来的构造方法被替换
        //新构造方法必须在形式上继承原来的构造方法，即需要包含构造方法所有属性（并不一定是真实的继承）
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.newProperty = "new property";
                _this.hello = "override";
                return _this;
            }
            return class_1;
        }(constructor));
    }
    var Greeter = (function () {
        function Greeter(m) {
            this.property = "property";
            //这里设置的hello将不再有效，因为被新的构造方法中的hello属性覆盖掉（相当于重写）。请详细考虑类的继承关系。
            this.hello = m;
        }
        Greeter = __decorate([
            classDecorator
        ], Greeter);
        return Greeter;
    }());
    console.log(new Greeter('world'));
})(N010180050020 || (N010180050020 = {}));
