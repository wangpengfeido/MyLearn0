// entries()\keys()\values()均返回遍历器对象
// 分别是键值对、键、值

let arr = ['a', 'b', 'c'];
for (let item of arr.entries()) {
    console.log(item);
}
for (let item of arr.keys()) {
    console.log(item);
}
// 这个好像没实现
// for (let item of arr.values()) {
//     console.log(item);
// }

// 当然也可以用next遍历
let entriesIterable = arr.entries();
console.log(entriesIterable.next());
console.log(entriesIterable.next());
console.log(entriesIterable.next());
console.log(entriesIterable.next());