interface ReadonlyStringArray {
  // 使用readonly修饰索引声明
  readonly [index: number]: string;
}

let a: ReadonlyStringArray = ['a', 'b', 'c'];

// 不允许
// a[1] = 'bbb';
