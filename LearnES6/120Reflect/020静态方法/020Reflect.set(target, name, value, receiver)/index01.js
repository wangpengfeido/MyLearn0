// Reflect.set方法设置target对象的name属性等于value。
let obj = {
    a: 1,
    get g() {
        return this.a;
    },
    set g(value) {
        this.a = value;
    }
};

Reflect.set(obj, 'a', 10);
console.log(obj);
Reflect.set(obj, 'b', 100);
console.log(obj);

// 取值器中绑定的this是receiver||本身
Reflect.set(obj, 'g', 20);
console.log(obj);
let receiver = {a: 0};
Reflect.set(obj, 'g', 30, receiver);
console.log(obj, receiver); // 设置了receiver的属性值

// TODO与Proxy联合使用
