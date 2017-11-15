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
var N010030020010;
(function (N010030020010) {
    //抽象类
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    //继承抽象类
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        //实现父类的move方法
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log('snake is moving');
        };
        Snake.prototype.yell = function () {
            console.log('snake is yelling');
        };
        return Snake;
    }(Animal));
    //不允许：抽象类不能直接被实例化
    //let tom=new Animal();
    //允许：建立抽象类类型变量
    var sam;
    //允许
    sam = new Snake('sam');
    sam.move();
    //不允许：因为sam被赋给了Animal类型
    //sam.yell();
})(N010030020010 || (N010030020010 = {}));
