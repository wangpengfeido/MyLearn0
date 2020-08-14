var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Loggable = /** @class */ (function () {
    function Loggable() {
    }
    Loggable.prototype.log = function () {
        console.log(this);
    };
    return Loggable;
}());
// 交叉类型表示这个类型的对象同时拥有多种类型的成员
// 适合用于混入或其他不适合典型面向对象模型的地方
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        result[id] = second[id];
    }
    return result;
}
var tom = extend(new Person('tom'), new Loggable());
tom.log();
