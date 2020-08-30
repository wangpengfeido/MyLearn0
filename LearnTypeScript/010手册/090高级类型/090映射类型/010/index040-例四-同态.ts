interface Person {
  name: string;
  age: number;
}

// 类型转换是 “同态” 的。
// 映射只作用于 T 的属性，编译器在添加新属性之前会拷贝存在的属性修饰符。

type ReadonlyT<T> = {
  readonly [P in keyof T]: T[P];
};
type PersonReadonly = ReadonlyT<Person>;
