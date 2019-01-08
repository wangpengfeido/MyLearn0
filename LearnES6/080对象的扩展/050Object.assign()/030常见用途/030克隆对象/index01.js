let obj = {a: 1};
let obj2 = Object.assign({}, obj);
console.log(obj2, obj === obj2);
// 注意。只能浅克隆。只能克隆自身的可枚举值，不能克隆继承的值和不可枚举值