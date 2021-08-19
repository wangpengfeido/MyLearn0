class Functor {
  private __value: any;
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Functor(x);
  }
  map(f) {
    return Functor.of(f(this.__value));
  }
}
