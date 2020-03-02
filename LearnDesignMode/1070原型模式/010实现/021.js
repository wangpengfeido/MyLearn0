// 可以将其封装出来
function createWithPrototype(proto) {
  function F() {
  }

  F.prototype = proto;
  return new F();
}

const animal = {
  name: 'tom',
  eat() {
    console.log('eat..........');
  }
};

const dog = createWithPrototype(animal);
dog.name = "jerry";
dog.run = function () {
  console.log('run..........');
};
dog.eat();
dog.run();



