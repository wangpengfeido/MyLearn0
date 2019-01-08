let str='abcdefg';
// padStart、padEnd补全字符串
console.log(str.padStart(20,'123'));
console.log(str.padEnd(20,'123'));
// 如果超出位数则返回原字符串
console.log(str.padStart(3,'123'));
// 默认用空格补全


