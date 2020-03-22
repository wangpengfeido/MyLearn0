class Animal{
  breath() {
    console.log('breath...');
  }
}

class Fish extends Animal {
  swim() {
    console.log('swim.....')
  }
}

class Bird extends Animal {
  fly() {
    console.log('fly.....')
  }
}


let tom: Animal;
if (1 + 1 === 2) {
  tom = new Fish();
} else {
  tom = new Bird();
}

// instanceof 将类型细化为Fish类型
if (tom instanceof Fish) {
  tom.swim();
}
if (tom instanceof Bird) {
  tom.fly();
}
