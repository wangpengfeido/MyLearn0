class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 可索引类型汇总同时存在number索引和string索引时，number索引值必须是string索引值的子类型
interface I {
  [index: number]: Dog;
  [index: string]: Animal;
}


