// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
let obj = {
    a: 1,
    get g() {
        return this.a;
    },
};

console.log(Reflect.get(obj, 'a'), Reflect.get(obj, 'z'));

// 取值器函数返回取出的值，其中的this是receiver||本身
console.log(Reflect.get(obj, 'g'), Reflect.get(obj, 'g', {a: 10}));

// 如果第一个参数不是对象，Reflect.get方法会报错。

