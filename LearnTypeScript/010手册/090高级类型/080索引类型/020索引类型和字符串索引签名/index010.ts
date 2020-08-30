// 如果 keyof T 中，T 是一个具有字符串索引签名的类型，那么 keyof T 是 string，并且 T[string] 是索引签名的类型

interface MyMap<T> {
  [key: string]: T;
}
let key: keyof MyMap<number> = "a"; // string
let value: MyMap<number>["foo"] = 12; // number，即 T
