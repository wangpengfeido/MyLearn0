class Engine {}
class Tires {
  static getInstance() {
    return new Tires();
  }
}

/**
 * 这个 Container 自动判断了是否为单例模式
 * 如果 register 传入一个类，每次 get 返回一个新的实例
 * 如果 register 传入一个实例，每次 get 返回同一实例
 */
class Container {
  constructor() {
    this.constructorPool = new Map();
  }

  /**
   * @param definition 依赖。如果是类则自动实例化，不是类则原样返回
   * @param dependencies definition 的依赖，在实例化时作为构造函数的参数传入
   */
  register(name, definition, dependencies) {
    this.constructorPool.set(name, {
      definition: definition,
      dependencies: dependencies
    });
  }

  /**
   * 取得依赖
   * 如果 definition 是类，则自动实例化
   * 否则返回原 definition
   */
  get(name) {
    const targetConstructor = this.constructorPool.get(name);
    if (this._isClass(targetConstructor.definition)) {
      return this._createInstance(targetConstructor);
    } else {
      return targetConstructor.definition;
    }
  }
  
  // 递归拿到类的所有依赖集合
  _getResolvedDependencies(target) {
    let classDependencies = [];
    if (target.dependencies) {
      classDependencies = target.dependencies.map(dependency => {
        return this.get(dependency);
      });
    }
    return classDependencies;
  }

  _createInstance(target) {
    return new target.definition(...this._getResolvedDependencies(target));
  }

  /** 判断是否为构造函数 */
  _isClass(definition) {
    return Object.prototype.toString.call(definition) === "[object Function]";
  }
}

const container = new Container();
container.register("engine", Engine);
container.register("tires", Tires);

class Car {
  constructor() {
    this.engine = container.get("engine");
    this.tires = container.get("tires");
  }
}
