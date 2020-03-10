// (命令：tsc ./index020.ts --strictNullChecks)

// 当编译器不能自动去除null和undefined，可以使用 ! 后缀手动去除
// 例如签到函数的情况
function addString(x: string, y: string | null): string {
  function doAdd() {
    return x.charAt(0) + y!.charAt(0);
  }
  y = y || 'a';
  return doAdd()
}

addString('b', null);

