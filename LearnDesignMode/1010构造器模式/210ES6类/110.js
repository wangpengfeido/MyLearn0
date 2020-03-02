// ES6 提供了类语法糖

// 使用ES6语法实现 ../120/110
class Animal {
  constructor(id) {
    this.id = id;
  }

  // 注：toString 实际被注册到 Animal.prototype 上
  toString() {
    return `Animal: id=${this.id}`;
  }
}

let a = new Animal('1');
console.log(a.toString());
