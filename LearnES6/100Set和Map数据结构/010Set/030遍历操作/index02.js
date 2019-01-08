// Set的遍历器对象就是values方法
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

let s = new Set([1, 2, 3]);
// 所以，可以用for...of...遍历
for (let x of s) {
    console.log(x);
}

