// ES6不提供私有方法和私有属性。只能通过变通的方式实现

let _m3 = Symbol('_m3');

class C {
    // 一种是在命名上区别。但这样是不完全的。
    _m() {
        console.log('_m');
    }

    m2() {
        _m2.call(this);
    }

    [_m3]() {
        console.log(_m3);f
    }
}

// 另一种是将私有方法移出类内
function _m2() {
    console.log('_m2');
}

// 第三种是使用Symbol值。由于外部无法获取Symbol值，也就无法调用此方法。