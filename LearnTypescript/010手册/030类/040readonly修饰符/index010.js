var N030040010;
(function (N030040010) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        // changeName(name:string){
        //     this.name=name;
        // }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log(this.name + " moved " + distance + " meter");
        };
        return Animal;
    }());
})(N030040010 || (N030040010 = {}));
