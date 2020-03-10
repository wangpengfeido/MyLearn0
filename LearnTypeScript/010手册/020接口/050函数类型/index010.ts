// 使用接口表示函数类型，在接口中定义一个函数签名
interface Eat {
  (name: string, foot: string): string;
}

let eat: Eat;
// 函数中参数名不需要与接口定义匹配
eat = function (n: string, f: string): string {
  return n + f;
}

// 函数声明类型后，函数定义会自动推断参数类型，并且由函数定义推断出的返回值类型必须与函数接口匹配
let eat2: Eat = function (n, f) {
  return n + f;
}
// 不允许
// eat2(1, 2);
