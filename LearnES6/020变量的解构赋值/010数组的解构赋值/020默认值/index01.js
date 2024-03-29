// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
// 默认值可以引用解构赋值的其他变量
let [a1 = -1, a2 = -2, a3 = -3, a4 = -4, a5 = a1, a6] = [1, 2, null, undefined];
console.log(a1, a2, a3, a4, a5, a6);
////////////////////////////////////////////////////////
// 如果默认值是一个表达式，那么这个表达式是惰性求值的
function f() {
    console.log('aaa');
    return 'a';
}

let [b1 = f()] = [1]; //f()不会执行