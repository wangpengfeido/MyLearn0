let a: number | string;
if (1 + 1 === 2) {
  a = 1;
} else {
  a = 'a';
}

// typeof v === "typename"和 typeof v !== "typename" 会被识别为类型保护
// "typename"必须是 "number"， "string"， "boolean"或 "symbol"
if (typeof a === 'number') {
  a += 1;
} else {
  a = 'b';
}

