// 可索引类型描述能够通过索引得到的类型
interface stringArray {
  // 可索引类型有一个索引签名，描述了索引类型和索引值类型
  [index: number]: string;
}

let a: stringArray = ['a', 'b'];

// 索引类型支持两种：number和string。实际number索引会被转换为字符串
