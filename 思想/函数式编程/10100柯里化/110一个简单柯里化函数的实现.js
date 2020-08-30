// 这个函数接受一个函数1，返回函数2。函数2可以接收一部分参数，返回函数3。函数3接收剩下的参数。

const curry = (fn) => (...args) => fn.bind(null, ...args);

//////////////////////////////////////////////////////////
function addABC(a, b, c) {
  return a + b + c;
}
console.log(curry(addABC)(1, 2)(3));
console.log(curry(addABC)(1)(2, 3));
console.log(curry(curry(addABC)(1))(2)(3));
