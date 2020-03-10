// ReadonlyArray创建后不能被修改，也没有可变方法
let a: ReadonlyArray<number> = [1, 2, 3];
// 不允许：
// a[0] = 3;
// a.push(4);

// 也不允许赋给普通数组
// let b: Array<number> = a;

// 但是可以将其断言重写
let c = a as Array<number>;
c.push(4);

