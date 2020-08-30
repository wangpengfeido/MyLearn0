const obj = {};
// 自有可枚举属性
Object.defineProperty(obj, 'e', {value: 1, writable: true, enumerable: true, configurable: true});
// 自有不可枚举属性
Object.defineProperty(obj, 'ne', {value: 1, writable: true, enumerable: false, configurable: true});

const proto = Object.getPrototypeOf(obj);
// 继承可枚举属性
Object.defineProperty(proto, 'pe', {value: 1,writable: true, enumerable: true, configurable: true});
// 继承不可枚举属性
Object.defineProperty(proto, 'pne', {value: 1, writable: true, enumerable: false, configurable: true});

module.exports = obj;
















