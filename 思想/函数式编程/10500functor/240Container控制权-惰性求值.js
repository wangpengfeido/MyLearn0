const lodash = require("lodash");

class LazyContainer {
  constructor(f) {
    this.__value = f;
  }

  static of(x) {
    return new LazyContainer(() => x);
  }

  fmap(f) {
    return new LazyContainer(lodash.flow(this.__value, f));
  }

  run() {
    this.__value();
  }
}

// 传入的操作没有立即调用，只有需要时才调用
LazyContainer.of({ title: "a" })
  .fmap((obj) => obj.title)
  .fmap((x) => {
    console.log(x);
  })
  .run();
