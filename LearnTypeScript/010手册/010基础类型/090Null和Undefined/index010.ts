// null 和 undefined 的类型分别为 null 和 undefined
let n: null = null;
let u: undefined = undefined;

// 默认 null 和 undefined 类型是所有类型的子类型，即可以把 null 和 undefined 值赋给任何类型变量。
// 可以通过 --strictNullCheck 禁用这个特性