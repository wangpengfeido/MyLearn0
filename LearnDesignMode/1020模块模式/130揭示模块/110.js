let myModule = (function () {
  let n = 0;

  function add() {
    n++;
  }

  function getN() {
    return n;
  }

  // 在模块底部导出匿名对象，对方法进行“揭示”
  return {
    add,
    getN
  }
})();

myModule.add();
console.log(myModule.getN());



