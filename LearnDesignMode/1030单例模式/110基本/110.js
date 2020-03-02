const mySingleton = (function () {
  let instance;

  function init() {
    const module = {};
    module.publicMethod = function () {
      console.log('this is a public method');
    };
    return module;
  }

  return {
    getInstance: function () {
      // 如果实例不存在则创建实例；存在则返回实例
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

// 多次获取到的是同一个实例
s1 = mySingleton.getInstance();
s2 = mySingleton.getInstance();
console.log(s1 === s2);
