class Container {
  constructor(x) {
    this.__value = x;
  }

  fmap(f) {
    return Container.of(f(this.__value));
  }

  static of(x) {
    return new Container(x);
  }
}

Container.of(3)
  .fmap((x) => x + 1)
  .fmap((x) => x * x)
  .fmap((x) => console.log("res:",x));
