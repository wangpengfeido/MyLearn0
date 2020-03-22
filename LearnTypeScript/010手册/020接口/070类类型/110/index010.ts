// 使用接口强制一个类符合某种契约
// 接口只描述类的public部分

interface AnimalInterface {
  name: string;
  breathe(): void;
}

class Animal implements AnimalInterface {
  name:string;
  breathe() {
    console.log('breathe...');
  }
}

