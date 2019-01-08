// fromCodePoint能正确生成由四字节表示的字符
console.log(String.fromCharCode(0x61,0x20bb7,0x62));
console.log(String.fromCodePoint(0x61,0x20bb7,0x62));