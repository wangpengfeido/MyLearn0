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
var N030030030;
(function (N030030030) {
    var Animal = (function () {
        function Animal(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.firstName + " " + this.lastName + " moved " + distance + " meter");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(firstName, lastName) {
            return _super.call(this, firstName, lastName) || this;
        }
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log('snake is moving');
            var saying = "name of the snake is";
            //受保护成员可以在派生类中访问
            saying += this.firstName;
            //私有成员不能在派生类中访问
            // saying+=this.lastName;
            console.log();
            _super.prototype.move.call(this, distance);
        };
        return Snake;
    }(Animal));
    var tom = new Snake('tee', 'tom');
    //private和protected成员均不能通过对象访问
    // console.log(tom.firstName);
    // console.log(tom.lastName);
})(N030030030 || (N030030030 = {}));
