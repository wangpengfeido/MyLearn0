class Engine {
  async check() {
    const check1 = await Promise.resolve(true);
    const check2 = await Promise.resolve(true);
    const check3 = await Promise.resolve(true);
    return check1 && check2 && check3;
  }
}
class Tires {
  static getInstance() {
    return new Tires();
  }

  check() {
    return Promise.resolve(true);
  }
}

class Container {
  constructor() {
    this.constructorPool = new Map();
  }

  register(name, definition, dependencies) {
    this.constructorPool.set(name, {
      definition: definition,
      dependencies: dependencies,
    });
  }

  get(name) {
    const targetConstructor = this.constructorPool.get(name);
    if (this._isClass(targetConstructor.definition)) {
      return this._createInstance(targetConstructor);
    } else {
      return targetConstructor.definition;
    }
  }

  _getResolvedDependencies(target) {
    let classDependencies = [];
    if (target.dependencies) {
      classDependencies = target.dependencies.map((dependency) => {
        return this.get(dependency);
      });
    }
    return classDependencies;
  }

  _createInstance(target) {
    return new target.definition(...this._getResolvedDependencies(target));
  }

  _isClass(definition) {
    return Object.prototype.toString.call(definition) === "[object Function]";
  }
}

const container = new Container();

class Car {
  constructor() {
    this.engine = container.get("engine");
    this.tires = container.get("tires");
  }
}

// 测试时只需要在测试代码中注册不同的 engine 即可

class TestEngine {
  async check() {
    const check3 = await Promise.resolve(true);
    return check3;
  }
}

container.register("engine", TestEngine);
container.register("tires", Tires);
