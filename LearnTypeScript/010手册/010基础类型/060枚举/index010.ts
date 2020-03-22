// 枚举可以为一组数值赋予友好的名字
enum A { A, B, C }

// 可以指定开始编号
enum B { A = 1, B, C }

// 也可以全部手动赋值
enum C { A = 2, B = 4, C = 'hello' }

// 枚举值和枚举名可以互相查找
console.log(C['A'], C[4], C['C']);
