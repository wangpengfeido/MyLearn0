// 当已传递的参数个数小于需要的参数个数，返回一个增加参数的辅助函数，辅助函数调用时递归调用curry，也同时实现了参数的存储
// 否则，对函数求值

function curry(targetFn, ...preset) {
  const numOfArgs = targetFn.length;

  if (preset.length === numOfArgs) {
    return targetFn.apply(this, preset);
  } else {
    return function (...added) {
      return curry.call(this, targetFn, ...preset, ...added);
    };
  }
}

////////////////////////////////////////////////////
function addABC(a, b, c) {
  return a + b + c;
}
console.log(curry(addABC)(1)(2)(3));
console.log(curry(addABC, 1, 2)(3));
console.log(curry(addABC)(1, 2)(3));
