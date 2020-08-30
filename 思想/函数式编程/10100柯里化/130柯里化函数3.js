// 增加了 "_" 占位符功能

function curry(targetFn, ...preset) {
  const numOfArgs = targetFn.length;

  let nextPos = 0; // 下一个输入的有效位置，可能是 "_" 或 preset 的结尾
  const presetNoUnderline = preset.filter((arg) => arg !== "_"); // 去掉 "_" 的 preset
  if (presetNoUnderline.length === numOfArgs) {
    // 已经有了足够的参数
    return targetFn.apply(this, presetNoUnderline);
  } else {
    return function (...added) {
      // 合并已有的和新加的参数
      for (let i = 0; i < added.length; i++) {
        while (preset[nextPos] !== "_" && nextPos < preset.length) {
          nextPos++;
        }
        preset[nextPos] = added[i];
        nextPos++;
      }
      // 递归调用 curry
      return curry.call(this, targetFn, ...preset);
    };
  }
}

///////////////////////////////////////////////////////
function addABC(a, b, c) {
  return a + b + c;
}
console.log(curry(addABC)(1)(2)(3));
console.log(curry(addABC, 1, 2)(3));
console.log(curry(addABC)(1, 2)(3));
console.log(curry(addABC)("_", 2)(1, 3));

