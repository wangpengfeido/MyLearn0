// 参考阮一峰的实现

// 将一个类对象属性拷贝到另一个对象
function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    // 避免拷贝关键字属性
    if (key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

// 创建混入类
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        // 拷贝实例属性
        // 我认为这个拷贝有待商榷
        copyProperties(this, new mixin());
      }
    }
  }

  for (let mixin of mixins) {
    // 拷贝静态属性
    copyProperties(Mix, mixin);
    // 拷贝原型属性（在上一个例子中，我们只拷贝了原型属性，而没有拷贝实例属性和静态属性）
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
}

/////////////////////////////////////////////////////////////////

// 示例类
class MoveMixin {
  moveForward() {
    console.log('move forward');
  }

  moveBackward() {
    console.log('move backward');
  }
}

// 创建了混入类并继承
class Animal extends mix(MoveMixin) {
}

const a = new Animal();
a.moveForward();
a.moveBackward();


