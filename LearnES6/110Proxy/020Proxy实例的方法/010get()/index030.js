// get方法可以继承
let protoProxy = new Proxy({}, {
    get(target, property, self) {
        return `get ${property}`;
    }
});
let obj = Object.create(protoProxy, {b: {value: 2}});

console.log(obj.a);
console.log(obj.b);

// 读取属性时，如果本身找不到，会到原型链上寻找。
// 即读取a时，读取的实际上是原型proxy上的a

