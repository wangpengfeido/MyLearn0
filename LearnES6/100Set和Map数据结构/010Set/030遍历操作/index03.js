let s = new Set([1, 2, 3]);

// 由于扩展运算符内部使用for...of循环，所以可以用于Set结构
console.log([...s]);

// 所以数组的方法也可以间接地用于Set
let s2 = new Set([...s].filter(item => item >= 2));
console.log(s2);

// Set没有办法在遍历时改变原来结构，可以用Array.from()或数组方法来变通实现
