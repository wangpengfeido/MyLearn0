// yield* 相当于在内部使用一个for...of
let inner = function* () {
    yield 'a';
    yield 'b';
};

let outer1 = function* () {
    yield 'x';

    // yield* inner();
    // 相当于
    for(let i of inner()){
        yield i;
    }

    yield 'y';
};

let g = outer1();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());




