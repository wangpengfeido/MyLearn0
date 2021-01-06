const lodash = require("lodash");

class Maybe {
  constructor(x) {
    this.__value = x;
  }

  static of(x) {
    return new Maybe(x);
  }

  fmap(f) {
    // 检查 value 非 null/undefined，符合条件时才调用函数。
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
  }

  isNothing() {
    return this.__value === null || this.__value === undefined;
  }
}

////////////////////////
Maybe.of({ name: "tom", age: 10 })
  .fmap(lodash.property("age"))
  .fmap(lodash.curry(lodash.add)(10))
  .fmap(console.log);

// 值为空时，fmap 的操作不会调用
Maybe.of()
  .fmap(lodash.property("age"))
  .fmap(lodash.curry(lodash.add)(10))
  .fmap(console.log);

//////////////////////////////////////////
// 可以使用柯里化简化 fmap
const map = lodash.curry((f, functor) => functor.fmap(f));
const getAgeAndAdd = map(
  lodash.flow(lodash.property("age"), lodash.curry(lodash.add)(10))
);

const functor = Maybe.of({ name: "sam", age: 20 });
getAgeAndAdd(functor).fmap(console.log);
