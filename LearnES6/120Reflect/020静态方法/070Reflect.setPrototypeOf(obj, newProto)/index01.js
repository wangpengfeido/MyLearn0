// Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法
let obj = {a: 1};
Reflect.setPrototypeOf(obj, {b: 10});

console.log(Reflect.getPrototypeOf(obj));

// 如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象（除null、undefined不会有任何作用），而Reflect.getPrototypeOf会报错。
// 报错
// Reflect.setPrototypeOf(1,{});
