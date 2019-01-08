// get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身
let obj = {a: 10};

let proxy = new Proxy(obj, {
    get: function (target, property, self) {
        return target[property] * 10;
    }
});

console.log(proxy.a);


