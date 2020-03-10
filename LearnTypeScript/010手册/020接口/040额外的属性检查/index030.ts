interface I {
  a: string;
  b: number;
}

function test(param: I) {
  console.log(param.a, param.b);
}

// 还有一种方式跳过检查，将对象字面量赋给另一个变量
let o = { a: 'aaa', b: 1, c: 'bbb' };
test(o);
