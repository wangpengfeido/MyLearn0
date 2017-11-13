var N010040050020;
(function (N010040050020) {
    //使用箭头函数，this绑定的是其上级的this值.
    var a = {
        arr: ['x', 'y', 'z'],
        createPicker: function () {
            var _this = this;
            return function () { return _this.arr[1]; };
        }
    };
    var picker = a.createPicker();
    console.log(picker());
})(N010040050020 || (N010040050020 = {}));
