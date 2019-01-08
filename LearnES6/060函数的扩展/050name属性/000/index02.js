let fn1 = function () {};
// ES6中匿名函数返回变量名
console.log(fn1.name);

//////////////////////////////////////
let fn2 = function f() {};
// 非匿名函数仍然返回原来的名字
console.log(fn2.name); // f
// 报错
// console.log(f.name);

///////////////////////////////////////////////
// 没有名字的函数返回空字符串
console.log('...', (() => {}).name);
// Function构造函数name属性为anonymous
console.log((new Function()).name); // anonymous

///////////////////////////////////////
// bind返回的函数前面有bound前缀
function fn3() {}

console.log((fn3.bind()).name); // bound fn3

