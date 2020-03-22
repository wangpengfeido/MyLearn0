// 只读属性表示只能在对象刚创建时修改其值
interface Animal {
  readonly name: string;
}

let tom: Animal = { name: 'tom' };
// 不允许
// tom.name = "sam";

// 与const比较：作为一个变量用const，作为一个属性用readonly

