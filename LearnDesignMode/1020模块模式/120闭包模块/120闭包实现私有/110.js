// 在模块外部禁止直接对变量 n 的访问
let myModule = (function () {
  // 私用属性
  let n = 0;
  return {
    // 公有属性
    add() {
      n++;
    },
    getN() {
      return n;
    }
  }
})();

myModule.add();
console.log(myModule.getN());
