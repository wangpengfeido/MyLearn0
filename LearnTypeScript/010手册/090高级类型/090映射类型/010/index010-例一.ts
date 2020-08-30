// 映射类型用于以相同形式转换旧类型里的每个属性。
// 它内部使用了 for in 循环

// 一个简单的例子
type Keys = "option1" | "option2";
type Flags = {
  [K in Keys]: boolean;
};

// 相当于：
type _Flags = {
  option1: boolean;
  option2: boolean;
};
