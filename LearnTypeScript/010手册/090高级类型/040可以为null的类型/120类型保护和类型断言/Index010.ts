// (命令：tsc ./index010.ts --strictNullChecks)

let a: string | null;
if (1 + 1 === 2) {
  a = 'a';
} else {
  a = null;
}

// 可以使用类型保护从可为null联合类型中去除null类型
let b: string;
if (a === null) {
  b = 'default'
} else {
  b = a;
}

