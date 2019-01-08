// Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。
let obj = {a: 1};
Reflect.setPrototypeOf(obj, {b: 10});

console.log(Reflect.getPrototypeOf(obj));

// 如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，而Reflect.getPrototypeOf会报错。
// 报错
// Reflect.getPrototypeOf(1);

