// 可遍历数据(实现Iterator接口)都可以跟在yield*后面
let generator = function* () {
    yield* [1, 2];
    yield* 'ab';
};

let g = generator();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

