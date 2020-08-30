// exec 返回一个数组，第0个元素是匹配的全部文本，第1个元素匹配的是第1个子匹配组的文本，以此类推
// 另外，还有index是文本的开头索引
// 在正则表达式不启用全局搜索时，它的返回与match方法是相同的
const reg = /a(a)/;
console.log(reg.exec("aaaa"));
console.log(reg.exec("aaaa"));

console.log("==========================================");

// 当正则表达式开启全局搜索模式，在上一次搜索完成后会标记一个lastIndex表示上一次匹配完的位置
// 下一次匹配时从lastIndex处开始匹配
const reg2 = /a(a)/g;
console.log(reg2.lastIndex, reg2.exec("aaaa"));
console.log(reg2.lastIndex, reg2.exec("aaaa"));

console.log("==========================================");

// 如果想重新从头查找就需要手动将lastIndex设置为0
const reg3 = /a(a)/g;
console.log(reg3.lastIndex, reg3.exec("aaaa"));
reg3.lastIndex = 0;
console.log(reg3.lastIndex, reg3.exec("aaaa"));
