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
var N030030010;
(function (N030030010) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        //默认为public
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log('snake is moving');
            _super.prototype.move.call(this, distance);
        };
        return Snake;
    }(Animal));
    var tom = new Snake('tome');
    //private成员是不允许直接被对象访问的
    // console.log(tom.name);
})(N030030010 || (N030030010 = {}));
