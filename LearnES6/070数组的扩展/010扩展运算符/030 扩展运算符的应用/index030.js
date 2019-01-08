// 字符串
console.log([...'abc']); // ['a','b','c']

// 它能正确识别四字节字符
console.log([...'a\u{20BB7}b'].length);

