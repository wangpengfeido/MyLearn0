class Fish {
  breath() {
    console.log('breath...');
  }
  swim() {
    console.log('swim.....')
  }
}

class Bird {
  breath() {
    console.log('breath...');
  }
  fly() {
    console.log('fly.....')
  }
}

// 返回一个类型谓词（pet is Fish），它将类型缩减为具体类型
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

let tom: Fish | Bird;
if (1 + 1 === 2) {
  tom = new Fish();
} else {
  tom = new Bird();
}

if (isFish(tom)) {
  // 经过类型保护后，编译器得知这里的tom必定是Fish类型
  tom.swim();
} else {
  // 还知道这里的tom必定是Bird类型
  tom.fly();
}

