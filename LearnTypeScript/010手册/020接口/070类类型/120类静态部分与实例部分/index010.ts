interface AnimalConstructor {
  // 构造器签名
  // 构造器属于静态部分
  new(name: string);
}

interface AnimalInterface {
  name: string;
  breathe(): void;
}

// 使用 implements 实现接口时，只对实例部分进行检查
// 如果要检查静态部分，要将其与实例部分分开。即作为类的类型进行检查。
const Anima: AnimalConstructor = class implements AnimalInterface {
  name: string;
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log('breathe...');
  }
}
