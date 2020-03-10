// 类型别名是给类型起个名字。
// 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

// 也可以是泛型
// TODO:






