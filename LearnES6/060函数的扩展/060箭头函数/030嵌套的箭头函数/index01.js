// 函数箭头内部可以再使用箭头函数

// 例如管道部署机制
const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
console.log(addThenMult(5));

