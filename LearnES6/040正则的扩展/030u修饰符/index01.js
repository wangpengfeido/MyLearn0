let str = '\u{20BB7}';  // \uD842\uDFB7

// u修饰符不会把四字节字符识别为双字节字符
console.log(/\uD842/u.test(str));
console.log(/\uD842/.test(str));

console.log(/\uD842\uDFB7/u.test(str));
console.log(/\uD842\uDFB7/.test(str));