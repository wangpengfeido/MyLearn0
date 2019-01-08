let str = '\u{20BB7}';  // \uD842\uDFB7

// 预定义模式可正确匹配四字节的字符。道理和.一样
console.log(/^\S$/u.test(str));
console.log(/^\S$/.test(str));

