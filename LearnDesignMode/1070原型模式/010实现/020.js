// 另一种实现方式
// 实际上这就是 Object.create 的 polyfill 实现方式

const animal = {
  name: 'tom',
  eat() {
    console.log('eat..........');
  }
};

function createDog() {
  function F() {
  }

  F.prototype = animal;

  const dog = new F();
  dog.name = "jerry";
  dog.run = function () {
    console.log('run..........');
  };
  return dog;
}

const dog = createDog();
dog.eat();
dog.run();




