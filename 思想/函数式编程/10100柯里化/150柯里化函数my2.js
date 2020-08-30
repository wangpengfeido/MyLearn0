// 更接近与 lodash 功能的柯里化函数
// 增加占位符功能

function curry(targetFn) {
  const numOfArgs = targetFn.length;
  let args = [];

  return function addArgs(...added) {
    let nextPos = 0;
    for (let i = 0; i < added.length; i++) {
      while (args[nextPos] !== "_" && nextPos < args.length) {
        nextPos++;
      }
      args[nextPos] = added[i];
      nextPos++;
    }
    if (args.length === numOfArgs) {
      return targetFn.apply(this, args);
    } else {
      return addArgs;
    }
  };
}

///////////////////////////////////
function addABC(a, b, c) {
  return a + b + c;
}
console.log(curry(addABC)(1)(2)(3));
console.log(curry(addABC)(1, 2)(3));
console.log(curry(addABC)("_", 2)(1, 3));
