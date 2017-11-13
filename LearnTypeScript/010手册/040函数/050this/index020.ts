namespace N010040050020 {
    //使用箭头函数，this绑定的是其上级的this值.
    let a = {
        arr: ['x', 'y', 'z'],
        createPicker: function () {
            return ()=>this.arr[1];
        }
    };

    let picker = a.createPicker();
    console.log(picker());
}