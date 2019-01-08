// yield* 表达式可以执行另一个generator函数，并可以在那个函数中的yield暂停
// yield* 后面跟的是一个可遍历数据
let inner = function* () {
    yield 'a';
    yield 'b';
};

let outer1 = function* () {
    yield 'x';
    yield* inner();
    yield 'y';
};

let g = outer1();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());




