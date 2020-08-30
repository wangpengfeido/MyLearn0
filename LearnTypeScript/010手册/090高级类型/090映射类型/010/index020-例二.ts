interface Person {
  name: string;
  age: number;
}

type PersonPartial = {
  [P in keyof Person]?: Person[P];
};
// 相当于
type _PersonPartial = {
  name?: string;
  age?: number;
};

type PersonNullable = {
  readonly [P in keyof Person]: Person[P] | null;
};
// 相当于
type _PersonReadonly = {
  readonly name: string;
  readonly age: number;
};
