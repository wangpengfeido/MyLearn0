// 应用：访问不存在的属性时抛出错误
let obj = {a: 1};
let proxy = new Proxy(obj, {
    get(target, property, self) {
        if (Reflect.has(target, property)) {
            return target[property];
        } else {
            throw new Error('属性不存在');
        }
    }
});

console.log(proxy.b);

