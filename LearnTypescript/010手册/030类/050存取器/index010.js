var N030050010;
(function (N030050010) {
    var Animal = (function () {
        function Animal(lastName, firstName) {
            if (firstName === void 0) { firstName = 'lee'; }
            this._firstName = firstName;
            this._lastName = lastName;
        }
        Object.defineProperty(Animal.prototype, "name", {
            //只包含get的存取器会被自动推断为readonly
            get: function () {
                return this._firstName + " " + this._lastName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (newName) {
                console.log('first name is setted', newName);
                this._firstName = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "lastName", {
            //只包含get的存取器可以指定private或protected
            get: function () {
                return this._lastName;
            },
            enumerable: true,
            configurable: true
        });
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        Object.defineProperty(Animal.prototype, "age", {
            set: function (newAge) {
                //存取器是特殊的方法，不能为其本身赋值
                // this.age = newAge + 10;
                this._age = newAge + 10;
            },
            enumerable: true,
            configurable: true
        });
        //如果不写取值方法，取值时将是undefined
        // get age(){
        //     return this._age;
        // }
        Animal.prototype.consoleAge = function () {
            console.log(this.age);
        };
        return Animal;
    }());
    var tom = new Animal('tom');
    tom.firstName = 'wang';
    //不允许(readonly)
    // tom.name='wang sam';
    //不允许(private)
    // console.log(tom.lastName);
    tom.move();
    tom.age = 20;
    tom.consoleAge();
})(N030050010 || (N030050010 = {}));
