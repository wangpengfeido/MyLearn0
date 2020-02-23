// 通过一个方法将现有类原型扩展到另一个类原型上
function augment(receivingClass, givingClass, ...list) {
  if (list.length) {
    list.forEach(methodName => {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    });
  } else {
    for (let methodName in givingClass.prototype) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}

////////////////////////////////////////////////////////////////////////

// 示例类
const MoveMixin = function () {
};
MoveMixin.prototype.moveForward = function () {
  console.log('move forward');
};
MoveMixin.prototype.moveBackward = function () {
  console.log('move backward');
};

const Animal = function () {
};

///////////////////////////////////////////////////////////////////////////

// 混入
augment(Animal, MoveMixin);

// 试验
const a = new Animal();
a.moveForward();
a.moveBackward();
