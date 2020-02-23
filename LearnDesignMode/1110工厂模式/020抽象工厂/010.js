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

// 抽象工厂
// 把所有具体类别的动物工厂归为一个动物工厂
class AbstractAnimalFactory {
  types = {};

  registerAnimal(type, animalClass) {
    if (Object.getPrototypeOf(animalClass) === Animal) {
      this.types[type] = animalClass;
    }
    return this;
  }

  createAnimal(type, options) {
    if (this.types[type]) {
      return new this.types[type](options);
    }
  }
}

const abstractAnimalFactory = new AbstractAnimalFactory();
abstractAnimalFactory.registerAnimal('dog', Dog);
abstractAnimalFactory.registerAnimal('monkey', Monkey);

const tom = abstractAnimalFactory.createAnimal('dog', {name: 'tom'});
tom.bark();

const jerry = abstractAnimalFactory.createAnimal('monkey', {name: 'jerry'});
jerry.climb();
