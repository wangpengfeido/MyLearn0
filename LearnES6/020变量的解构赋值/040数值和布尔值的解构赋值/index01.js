
// 右边是数值和布尔值时，会转换为对象
let {toString: s} = 123;
console.log(s === Number.prototype.toString);