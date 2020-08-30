let x: "a" | "b" | "c";

x = "a";
// 不允许
// x = "d";

// 字面量类型还可以区分函数重载
function f(n: "a");
function f(n: "b");
function f(n) {
  console.log(n);
}

f("a");
// 不允许
// f("c");
