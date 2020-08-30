class BasicCalculator {
  public x: number;

  constructor(x: number) {
    this.x = x;
  }

  add(n): this {
    // add(n): BasicCalculator {
    this.x += n;
    return this;
  }
}

class AdvancedCalculator extends BasicCalculator {
  multiply(n): this {
    this.x *= n;
    return this;
  }
}

const c = new AdvancedCalculator(1);
c.add(1).multiply(2);

// 返回 this 类型能保持接口的连贯性
// 如果 add 方法不是返回的 this 类型而是返回的 BasicCalculator 类型，那么后面就不能继续调用 multiply 方法。
