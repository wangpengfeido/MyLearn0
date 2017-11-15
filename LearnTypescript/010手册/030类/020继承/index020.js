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
var N010030020020;
(function (N010030020020) {
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
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('person is moving');
            console.log(this.name + " moved " + distance + " meter");
        };
        return Person;
    }());
    //在没有private或protected成员的情况下，允许结构相同的对象赋值
    var tom = new Person('tome');
    tom.move();
    var sam = {
        name: 'sam',
        move: function () {
            console.log('sam is moveing');
        },
    };
})(N010030020020 || (N010030020020 = {}));
