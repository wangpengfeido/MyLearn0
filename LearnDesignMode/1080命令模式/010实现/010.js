class Dog {
  eat() {
    console.log('eat......');
  }

  // 如果直接调用，当api修改时要修改所有调用的地方
  run() {
    console.log('run......');
  }

  // 通过执行函数调用命令
  execute(name, ...args) {
    return this[name] && this[name](...args);
  }
}

const dog = new Dog();
dog.execute('eat');
dog.execute('run');

