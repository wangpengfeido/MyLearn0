class Engine {}
class Tires {
  static getInstance() {
    return new Tires();
  }
}

class Container {
  constructor() {
    this.constructorPool = new Map();
  }

  register(name, constructor) {
    this.constructorPool.set(name, constructor);
  }

  get(name) {
    const target = this.constructorPool.get(name);
    return new target();
  }
}

const container = new Container();
container.register("engine", Engine);
container.register("tires", Tires);

// 通过 IoC 容器，engine 和 tires 的创建不再依赖于构造函数。
// Car 不再依赖于 具体的 Car 和 Tires，而是依赖于 container 抽象容器。即针对接口编程，而不针对实现编程。
// 将主动“拉”依赖，改为容器主动“推”依赖。

// 现在，如果想将 Engine 更换为 V8Engine，只需要修改 Container 就可以了。

class Car {
  constructor() {
    this.engine = container.get("engine");
    this.tires = container.get("tires");
  }
}
