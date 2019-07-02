const obj = require('./obj.js');

// prototypeIsEnumerable可以判断（自有）属性是否是可枚举的

console.log(obj.propertyIsEnumerable('e'));
console.log(obj.propertyIsEnumerable('ne'));
console.log(obj.propertyIsEnumerable('pe'));
console.log(obj.propertyIsEnumerable('pne'));

console.log(obj.propertyIsEnumerable('a'));



