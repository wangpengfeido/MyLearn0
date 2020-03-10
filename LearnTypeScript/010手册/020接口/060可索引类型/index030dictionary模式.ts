interface NumberDictionary {
  [index: string]: number;

  // 可索引类型必须保证所有属性与索引返回值相匹配

  // 允许
  length: number;

  // 不允许
  // name: string;
}
