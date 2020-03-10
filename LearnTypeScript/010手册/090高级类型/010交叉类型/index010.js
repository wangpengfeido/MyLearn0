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
