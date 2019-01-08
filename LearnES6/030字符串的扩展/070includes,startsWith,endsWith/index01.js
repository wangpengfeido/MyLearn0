let str = 'a\u{20BB7}b';
console.log(str.indexOf('b'));
// 是否包含
console.log(str.includes('b'));
// 是否在头部
console.log(str.startsWith('b'));
// 是否在尾部
console.log(str.endsWith('b'));
//上述方法都有第二个参数，includes/startsWith表示开始搜索位置，endsWith表示前n个字符