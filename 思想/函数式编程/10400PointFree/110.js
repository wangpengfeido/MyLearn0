function curry(targetFn, ...preset) {
  const numOfArgs = targetFn.length;

  let nextPos = 0;
  const presetNoUnderline = preset.filter((arg) => arg !== "_");
  if (presetNoUnderline.length === numOfArgs) {
    return targetFn.apply(this, presetNoUnderline);
  } else {
    return function (...added) {
      for (let i = 0; i < added.length; i++) {
        while (preset[nextPos] !== "_" && nextPos < preset.length) {
          nextPos++;
        }
        preset[nextPos] = added[i];
        nextPos++;
      }
      return curry.call(this, targetFn, ...preset);
    };
  }
}

function compose(...fns) {
  return (...args) => {
    let i = 0,
      len = fns.length;
    let res = len ? fns[i].apply(this, args) : args[0];
    i++;
    while (i < len) {
      res = fns[i].call(this, res);
      i++;
    }
    return res;
  };
}

const pureToLowerCase = function (str) {
  return str.toLowerCase();
};

const pureReplace = curry(function (arg1, arg2, str) {
  return str.replace(arg1, arg2);
});

//////////////////////////////////////////

// 这个函数是非 point free 的，因为提到了数据 word
const snakeCase = function (word) {
  return word.toLowerCase().replace(/\s+/gi, "__");
};

// 它是 point free 的
const pointFreeSnakeCase = compose(pureToLowerCase, pureReplace(/\s+/gi, "__"));

console.log(snakeCase("point free"));
console.log(pointFreeSnakeCase("point free"));
