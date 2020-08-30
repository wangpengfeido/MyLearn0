interface Person {
  name: string;
  age: number;
}

// 可以定义通用的转换模板
// Readonly,Partial,Pick,Record被包含进了 typescript 标准库中
type PartialT<T> = {
  [P in keyof T]?: T[P];
};
type ReadonlyT<T> = {
  readonly [P in keyof T]: T[P];
};
type PickT<T, K extends keyof T> = {
  [P in K]: T[P];
};
type RecordT<K extends string, T> = {
  [P in K]: T;
};

type PersonPartial = PartialT<Person>;
// 相当于
type _PersonPartial = {
  name?: string;
  age?: number;
};

type PersonReadonly = ReadonlyT<Person>;
// 相当于
type _PersonReadonly = {
  readonly name: string;
  readonly age: number;
};

type PersonName = PickT<Person, "name">;
// 相当于
type _PersonName = {
  name: string;
};

type ThreeNumber = Record<"one" | "two" | "three", number>;
// 相当于
type _ThreeNumber = {
  one:number;
  two:number;
  three:number;
};
