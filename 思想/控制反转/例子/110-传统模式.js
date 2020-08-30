class Engine {}
class Tires {
  static getInstance() {
    return new Tires();
  }
}

// 在构造器中通过 new 和 工厂 实例化了依赖。
// 这种方式增加了单元测试和后期维护的成本。这不符合“开闭原则”。
// 例如，如果有多种 Car 都依赖同一个 Engine，如果需要把 Engine 全部替换为 V8Engine ，需要修改全部种类的 Car

class Car {
  constructor() {
    this.engine = new Engine();
    this.tires = Tires.getInstance();
  }
}
