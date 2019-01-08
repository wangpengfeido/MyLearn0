// 如果被代理的generator有return语句，return的值会被yield* 返回
let inner = function* () {
    yield 'a';
    return 'm';
};

let outer = function* () {
    let v = yield* inner();
    yield v;
};

let g = outer();
console.log(g.next());
console.log(g.next());



