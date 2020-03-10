class Animal {
  private name: string;
  breathe() {
    console.log('breathe...')
  }
}

// 接口继承类时，继承类成员但不继承实现。

// 接口会继承private和protected成员。
// 所以，当继承有private和protected成员的类时，一般这个接口由这个类活其子类实现


interface DogInterface extends Animal {
  run(): void;
}

class Dog extends Animal implements DogInterface {
  run() {
    console.log('run...')
  }
}

