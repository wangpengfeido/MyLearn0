// includes判断数组内是否包含某元素
let arr = ['a', 'b', NaN];
console.log(arr.includes('a'));

// 与indexOf不同，它可识别NaN，并且更加语义化
console.log(arr.includes(NaN));

// 第二个参数表示搜索的起始位置
console.log(arr.includes('a', 1));