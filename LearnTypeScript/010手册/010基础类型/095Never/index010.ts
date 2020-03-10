// never表示永不存在的值的类型。
// 例如：总会抛出异常的函数，用不为真的类型保护约束的变量

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
  }
}

// never也是任何类型的子类型，但是除了never本身没有任何类型可以赋给never，即使any也不行

