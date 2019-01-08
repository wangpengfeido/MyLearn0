// Object.values() 返回所有对象自身的可遍历属性键名
let obj = {
    a: 1,
    b: 2,
    // 不会返回Symbol值
    [Symbol()]: 3
};

console.log(Object.values(obj));

// 字符串会先转换为类似数组对象
console.log(Object.values('abc'));

// 非对象会转换为对象。但转换后没有自身可遍历属性，所以返回空数组
console.log(Object.values(1));

