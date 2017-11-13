namespace N010040050010 {
    //这种情况下，this未被绑定到a对象上（非严格：window，严格：undefined）
    let a = {
        arr: ['x', 'y', 'z'],
        createPicker: function () {
            return function () {
                return this.arr[1];       //报错
            }
        }
    };

    let picker = a.createPicker();
    console.log(picker());
}