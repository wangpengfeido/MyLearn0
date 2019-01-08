// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

let s = new Set([1, 2, 3]);
console.log(s.keys());
// 由于Set键名和键值相同，所以keys()和values()表现一致，entries()返回的键值对相等
console.log(s.values());
console.log(s.entries());

s.forEach((value, key) => {
    console.log(value, key);
}, null);

