// (命令：tsc ./index010.ts --strictNullChecks)
// --strictNullChecks 可使 null 和 undefined 值仅可赋给 null 和 undefined 类型
// 想要一个变量可被赋予null或undefined，可以使用联合类型
var s;
s = 'a';
s = null;
