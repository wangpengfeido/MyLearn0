// 基本的构造器模式

function Animal(id) {
  this.id = id;
  this.toString = function () {
    return `Animal: id=${this.id}`
  }
}

let a = new Animal('1');
console.log(a.toString());

// 这种模式有两个缺点：
// 1. 继承困难
// 2. 不能共享函数实例，如上面的toString
