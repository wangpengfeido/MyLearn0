// 属性的取值赋值器也是这种写法
const obj = {
    _value: 10,
    get value() {
        return this._value;
    },
    set value(value) {
        this._value = value;
    }
};