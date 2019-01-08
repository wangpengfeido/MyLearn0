let str = 'a\u{20BB7}b';
// charAt方法不能识别四个字节表示的字符
console.log(str.charAt(0), str.charAt(1), str.charAt(2), str.charAt(3));
// charCodeAt会把四个字节的字符识别为两个双字节字符
console.log(str.charCodeAt(0), str.charCodeAt(1), str.charCodeAt(2), str.charCodeAt(3));
// codePointAt能正确识别出四字节字符
console.log(str.codePointAt(0), str.codePointAt(1), str.codePointAt(2), str.codePointAt(3));
for (let ch of str) {
    console.log(ch.codePointAt(0),ch.codePointAt(0).toString(16));
}

