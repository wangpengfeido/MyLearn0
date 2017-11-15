var N010040050010;
(function (N010040050010) {
    //这种情况下，this未被绑定到a对象上（非严格：window，严格：undefined）
    var a = {
        arr: ['x', 'y', 'z'],
        createPicker: function () {
            return function () {
                return this.arr[1]; //报错
            };
        }
    };
    var picker = a.createPicker();
    console.log(picker());
})(N010040050010 || (N010040050010 = {}));
