var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.breath = function () {
        console.log('breath...');
    };
    Fish.prototype.swim = function () {
        console.log('swim.....');
    };
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.breath = function () {
        console.log('breath...');
    };
    Bird.prototype.fly = function () {
        console.log('fly.....');
    };
    return Bird;
}());
// 返回一个类型谓词（pet is Fish），它将类型缩减为具体类型
function isFish(pet) {
    return pet.swim !== undefined;
}
var tom;
tom = new Fish();
if (isFish(tom)) {
    tom.swim();
}
else {
    tom.fly();
}
