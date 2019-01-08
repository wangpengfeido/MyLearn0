let str = 'a\u{20BB7}b';
console.log(str.charAt(1));
// (提案)at可识别出四字节字符
// console.log(str.at(1));