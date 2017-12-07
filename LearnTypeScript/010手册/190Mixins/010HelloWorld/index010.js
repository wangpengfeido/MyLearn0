var N010190010010;
(function (N010190010010) {
    //混入：区别于传统继承，将多个类合并到一个类，使一个类具有多个类的功能
    var One = (function () {
        function One() {
        }
        One.prototype.doOne = function () {
            this.valueOne = 1;
        };
        return One;
    }());
    var Two = (function () {
        function Two() {
        }
        Two.prototype.doTwo = function () {
            this.valueTwo = 2;
        };
        return Two;
    }());
    //使用的是implements而非extends，说明将类作为接口使用，只使用其类型而不使用其实现，所以在这里创建了一些实现占位
    var Smart = (function () {
        function Smart() {
        }
        return Smart;
    }());
    //帮助函数，帮助进行混入操作
    //其实就是将混入类的属性一个一个赋给被混入类
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    //执行混入
    applyMixins(Smart, [One, Two]);
    var obj = new Smart();
    obj.doOne();
    obj.doTwo();
    console.log(obj.valueOne, obj.valueTwo);
})(N010190010010 || (N010190010010 = {}));
