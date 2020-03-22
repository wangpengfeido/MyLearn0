// (命令：tsc ./index010.ts --strictNullChecks)
var a;
if (1 + 1 === 2) {
  a = 'a';
} else {
  a = null;
}

// 可以使用类型保护从可为null联合类型中去除null类型
var b;
if (a === null) {
  b = 'default';
} else {
  b = a;
}

// 也可以使用短路运算
b = a || 'default';
