var N010110010010;
(function (N010110010010) {
    //当一个对象实现了Symbol.iterator时，它是可迭代的
    //内置的有Array/Set/Map/String等
    var someArray = ['a', 'b', 'c'];
    //for...of循环，调用对象上的Symbol.iterator方法
    for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
        var i = someArray_1[_i];
        console.log(i);
    }
    //for...in循环的是键，for...of循环的是值
    for (var i in someArray) {
        console.log(i);
    }
})(N010110010010 || (N010110010010 = {}));
