// 一个接口可以同时混合函数、索引等多种类型
interface I {
  (name: string): void;
  [index: number]: any;
  length: number;
}

let a: I = function (name) {
  console.log(`I'm ${name}`);
};
a.length = 10;
a[1] = 'aaa'
