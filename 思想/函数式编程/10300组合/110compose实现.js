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

function add(a, b) {
  return a + b;
}

function squal(n) {
  return n * n;
}

console.log(squal(add(1, 2)));
console.log(compose(add, squal)(1, 2));
// 这里就避免了函数嵌套



