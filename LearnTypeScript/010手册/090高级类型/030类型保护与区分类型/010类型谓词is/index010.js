var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.breath = function () {
        console.log("breath...");
    };
    Fish.prototype.swim = function () {
        console.log("swim.....");
    };
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.breath = function () {
        console.log("breath...");
    };
    Bird.prototype.fly = function () {
        console.log("fly.....");
    };
    return Bird;
}());
// 返回一个类型谓词（pet is Fish），它将类型缩减为具体类型
function isFish(pet) {
    return pet.swim !== undefined;
}
var tom;
if (1 + 1 === 2) {
    tom = new Fish();
}
else {
    tom = new Bird();
}
if (isFish(tom)) {
    // 经过类型保护后，编译器得知这里的tom必定是Fish类型
    tom.swim();
}
else {
    // 还知道这里的tom必定是Bird类型
    tom.fly();
}
