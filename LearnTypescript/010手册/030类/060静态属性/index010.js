var N030060010;
(function (N030060010) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.getIntroduce = function () {
            return this.introduce;
        };
        //只有静态成员能访问静态成员
        Animal.setIntroduce = function (newIntroduce) {
            this.introduce = newIntroduce;
        };
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        //静态成员
        //静态成员也可以指定修饰符
        Animal.introduce = 'this is an animal';
        return Animal;
    }());
    console.log(Animal.getIntroduce());
    Animal.setIntroduce('this is a cute animal');
    console.log(Animal.getIntroduce());
    var tom = new Animal('tom');
    //对象不能访问静态成员
    //tom.getIntroduce();
})(N030060010 || (N030060010 = {}));
