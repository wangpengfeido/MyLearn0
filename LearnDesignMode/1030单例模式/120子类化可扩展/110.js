const mySingleton = (function () {

  class BasicSingleton {
    a = 1
  }

  class FooSingleton extends BasicSingleton {
    constructor() {
      super()
    }

    b = 2
  }

  let instance;

  return {
    // 当原来的单例被扩展，我们不需要更新每个使用单例的地方
    // 子类必须实现与父类相同的接口
    getInstance: function () {
      if (!instance) {
        // 旧：
        // instance = new BasicSingleton();
        // 新：
        instance = new FooSingleton();
      }
      return instance;
    }
  }
})();


s1 = mySingleton.getInstance();
s2 = mySingleton.getInstance();
console.log(s1 === s2);
