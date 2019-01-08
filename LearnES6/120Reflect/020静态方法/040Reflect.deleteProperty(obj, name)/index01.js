// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。
let obj = {
    a: 1,
};

Reflect.deleteProperty(obj, 'a');

console.log(obj);



