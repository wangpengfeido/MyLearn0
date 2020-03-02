class Dog {
  eat() {
    console.log('eat....');
  }

  run() {
    console.log('run.....');
  }

  // 调用它的时候，会触发一系列行为，但用户不会接触到，不需要知道其具体实现细节
  do() {
    this.eat();
    this.run();
    this.run();
  }
}


const dog = new Dog();
dog.do();

