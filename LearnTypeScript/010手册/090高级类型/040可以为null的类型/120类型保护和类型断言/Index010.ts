// (命令：tsc ./index010.ts --strictNullChecks)

let a: string | null;
if (1 + 1 === 2) {
  a = "a";
} else {
  a = null;
}

// 可以使用类型保护从可为null联合类型中去除null类型
let b: string;
if (a === null) {
  // 这里可以知道 a 是 null 类型
  b = "default";
} else {
  // 这里可以知道 a 是 string 类型
  b = a;
}

// 也可以使用短路运算符
let c: string = a || "default";
