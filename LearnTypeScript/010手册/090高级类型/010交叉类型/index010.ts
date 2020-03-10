class Person {
  constructor(public name: string) { }
}

class Loggable {
  log() {
    console.log(this);
  }
}

// 交叉类型表示这个类型的对象同时拥有多种类型的成员
// 适合用于混入或其他不适合典型面向对象模型的地方

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = first[id];
  }
  for (let id in second) {
    (<any>result)[id] = second[id];
  }
  return result;
}

let tom = extend(new Person('tom'), new Loggable());

tom.log();






