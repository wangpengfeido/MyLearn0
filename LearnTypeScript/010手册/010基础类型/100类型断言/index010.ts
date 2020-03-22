// 类型断言假设你知道一个变量的具体类型
// 它没有运行时影响，只影响编译时的类型检查

let someValue: any = 'this is something';
let len: number = (someValue as string).length;
// 或
// let len: number = (<string>someValue).length;
console.log(len);

// 注意：在jsx中，只有as语法是可用的
