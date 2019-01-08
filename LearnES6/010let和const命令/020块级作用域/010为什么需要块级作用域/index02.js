// 循环时，计数变量泄露为全局变量

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
// 这里i仍然存在
console.log(i);