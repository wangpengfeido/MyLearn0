let str = 'a\u{20BB7}b';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// for...of循环可以识别出四字节字符
for (let ch of str) {
    console.log(ch);
}