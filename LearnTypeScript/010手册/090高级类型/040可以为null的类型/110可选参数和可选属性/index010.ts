// (命令：tsc ./index010.ts --strictNullChecks)

// 使用了 --strictNullChecks，可选参数和可选属性会被自动地加上 | undefined

function add(x: number, y?: number) {
  return x + (y || 0);
}
add(1, undefined);

class C {
  a: number;
  b?: number;
}
let c = new C();
c.b = undefined;






