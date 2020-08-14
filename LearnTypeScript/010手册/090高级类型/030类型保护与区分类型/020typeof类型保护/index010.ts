let a: number | string;
if (1 + 1 === 2) {
  a = 1;
} else {
  a = "a";
}

// typeof v === "typename"和 typeof v !== "typename" 会被识别为类型保护
// "typename"必须是 "number"， "string"， "boolean"或 "symbol"
if (typeof a === "number") {
  // 知道了 a 此处是 number 类型
  console.log(a.toFixed(1));
} else {
  // 知道了 a 此处是 string 类型
  console.log(a.length);
}
