class Animal {
  constructor(options) {
    this.name = options.name;
  }
}

class Dog extends Animal {
  constructor(options) {
    super(options);
  }

  bark() {
    console.log(`${this.name}:bark......`);
  }
}

class Monkey extends Animal {
  constructor(options) {
    super(options);
  }

  climb() {
    console.log(`${this.name}:climb...`);
  }
}

// 工厂类
class AnimalFactory {
  createAnimal(animalType, options) {
    switch (animalType) {
      case 'dog':
        return new Dog(options);
      case 'monkey':
        return new Monkey(options);
    }
  }
}

// 实例化工厂类，然后创建对象 ////////////////////////////////////////
const animalFactory = new AnimalFactory();

const tom = animalFactory.createAnimal('dog', {name: 'tom'});
tom.bark();

const jerry = animalFactory.createAnimal('monkey', {name: 'jerry'});
jerry.climb();

// 子类化AnimalFactory，创建一个DogFactory /////////////////////////////
class DogFactory extends AnimalFactory {
  createDog(options) {
    return super.createAnimal('dog', options);
  }
}

const dogFactory = new DogFactory();

const sam = dogFactory.createDog({name: 'sam'});
sam.bark();
