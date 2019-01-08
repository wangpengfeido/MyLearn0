let str = '\u{20BB7}';  // \uD842\uDFB7

// 点字符可匹配四字节字符
console.log(/^.$/u.test(str));
console.log(/^.$/.test(str));


