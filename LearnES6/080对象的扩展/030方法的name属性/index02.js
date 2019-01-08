// get\set方法的name在该方法的属性描述对象上，并在前面加get\set
let obj = {
    get value() {
        return 1;
    },
    set value(value) {
        this._value = 1;
    },
};

console.log(Object.getOwnPropertyDescriptor(obj, 'value').get.name);