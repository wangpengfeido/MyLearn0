let myLodash = (function () {
  // 预先声明模块，而不实现
  const module = {};
  module.id = "1";

  function add(a, b) {
    return a + b;
  }

  module.add = add;
  // 对预先声明的模块进行导出
  return module;
})();

let myModule = (function (lodash) {
  const module = {};
  let n = 0;
  module.add = function () {
    n = lodash.add(n, 1);
  };
  module.getN = function () {
    return n;
  };
  return module;
//  作为参数导入其他模块
})(myLodash);

myModule.add();
console.log(myModule.getN());
