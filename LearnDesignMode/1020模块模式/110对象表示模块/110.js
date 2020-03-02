// 这里，我们用对象表示了一个“模块”
// 但是它没有公有和私有的控制

let myModule = {
  n: 0,
  add() {
    this.n++;
  }
};

myModule.add();
console.log(myModule.n);
