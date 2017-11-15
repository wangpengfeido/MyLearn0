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
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        return Animal;
    }());
    //继承
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            //必须调用父类的构造方法
            return _super.call(this, name) || this;
        }
        //重写父类的move方法
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log('snake is moving');
            //调用父类的move方法
            _super.prototype.move.call(this, distance);
        };
        return Snake;
    }(Animal));
    var tom = new Snake('tome');
    tom.move();
    //子类对象可以赋给父类对象
    var sam = new Snake('sam');
    //此时调用的仍然是子类的重写后的方法
    sam.move();
})(N010030020010 || (N010030020010 = {}));
