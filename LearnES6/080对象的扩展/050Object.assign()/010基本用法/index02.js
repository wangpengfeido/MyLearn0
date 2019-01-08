
////////////////////////////////////////////////
// 第一个参数
// 非对象值转换为包装对象（数值、字符串和布尔值），跳过无法转换为对象的非源对象值
console.log(Object.assign(3, {a: 1}));
console.log(Object.assign("hello", {a: 1}));

// 如果第一个参数是null或undefined，会报错
// console.log(Object.assign(null,{a:1}));

/////////////////////////////////////////////////////////////////////
// 其他参数
// 非对象值转换为包装对象，跳过数值和布尔值，跳过null、undefined
console.log(Object.assign({a: 1}, 2, null));
// 字符串被转换为数组
console.log(Object.assign({a: 1}, "hello"));


////////////////////////////////////////////////////////////////////
// 属性名为Symbol值得属性也会被拷贝


