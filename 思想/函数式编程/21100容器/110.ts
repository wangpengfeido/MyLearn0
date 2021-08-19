class Container {
  private __value: any;
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Container(x);
  }
}
