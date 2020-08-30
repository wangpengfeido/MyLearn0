// 更接近与 lodash 功能的柯里化函数

function curry(targetFn) {
  const numOfArgs = targetFn.length;
  let args = [];

  return function addArgs(...added) {
    args = args.concat(added);
    if (args.length === numOfArgs) {
      return targetFn.apply(this, args);
    } else {
      return addArgs;
    }
  };
}

////////////////////////////////////////
function addABC(a, b, c) {
  return a + b + c;
}
console.log(curry(addABC)(1)(2)(3));
console.log(curry(addABC)(1, 2)(3));
