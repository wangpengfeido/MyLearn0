const obj = require('./0100util-obj.js.js');

// hasOwnProperty可以判断=属性是否是自有属性，包括（可枚举的与不可枚举的）

console.log(obj.hasOwnProperty('e'));
console.log(obj.hasOwnProperty('ne'));
console.log(obj.hasOwnProperty('pe'));
console.log(obj.hasOwnProperty('pne'));

console.log(obj.hasOwnProperty('a'));











