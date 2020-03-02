function Animal(id) {
  this.id = id;
}

Animal.prototype.toString = function () {
  return `Animal: id=${this.id}`;
};

let a = new Animal('1');
console.log(a.toString());

// 多个实例之间共享同一个原型

