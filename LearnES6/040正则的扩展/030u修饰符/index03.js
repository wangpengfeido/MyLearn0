let str = 'a';

// 在正则表达式中使用花括号表示字符时，必须加u修饰符。否则会被解读为量词
console.log(/\u{61}/u.test(str));
console.log(/\u{61}/.test(str));
