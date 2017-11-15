var N030040020;
(function (N030040020) {
    var Animal = (function () {
        //为构造方法参数指定private、publick、readonly修饰符，相当于声明了一个类成员
        function Animal(name) {
            this.name = name;
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        return Animal;
    }());
    var tom = new Animal('tom');
    tom.move();
})(N030040020 || (N030040020 = {}));
