let str = 'a\u{20BB7}b';
// repeat表示把原字符串重复n次
console.log(':', str.repeat(3));
console.log(':', str.repeat(0));
console.log(':', str.repeat('2'));
// 不能是负数或Infinity，小数取证，NaN相当于0，非数字会先转换数字