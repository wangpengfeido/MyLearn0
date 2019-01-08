// Set与数组类似，但它所有成员值是唯一的

// Set函数可以接收所有具有iterable接口的数据结构来初始化
let s = new Set([1, 2, 3, 3, 3, 4]);
console.log(s);

// Set可以用来去除数组重复成员
console.log(new Set([1, 2, 2, 3]));

// Set执行Same-value-zero equality判断相等。NaN等于NaN。
console.log(new Set([1, NaN, NaN, 2]));

// 对象比较的是引用
console.log(new Set([{a: 1}, {a: 1}]));

