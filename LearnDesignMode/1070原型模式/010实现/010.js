const animal = {
  name: 'tom',
  eat() {
    console.log('eat..........');
  }
};

// 使用 Object.create() 实现原型模式
const dog = Object.create(animal, {
  name: {
    value: 'jerry',
    enumerable: true
  },
  run: {
    value() {
      console.log('run..........');
    },
  }
});

dog.eat();
dog.run();
