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

// 这里 engine 进行了 check1,check2,check3 三个检查
// 如果我们测试时只想进行 check3, 忽略 check1,check2，是很困难的
// 只能通过环境变量来进行判断

class Car {
  constructor() {
    this.engine = new Engine();
    this.tires = Tires.getInstance();
  }

  async run() {
    const engineStatus = await this.engine.check();
    const tiresStatus = await this.enigin.check();

    if (engineStatus && tiresStatus) {
      console.log("can running");
    }
  }
}
