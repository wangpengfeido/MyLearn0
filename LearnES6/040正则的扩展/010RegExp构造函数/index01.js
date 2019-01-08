// ES5 参数1字符串，参数2修饰符
let regex1 = new RegExp('a', i); // /a/i
// ES5 参数1正则表达式
let regex2 = new RegExp(/a/i); // /a/i

// ES6新增 参数1正则表达式，参数2修饰符，原有修饰符会被覆盖
let regex3 = new RegExp(/a/ig, i); // /a/i