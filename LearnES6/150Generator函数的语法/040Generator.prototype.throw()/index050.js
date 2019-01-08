// throw方法和全局的throw互不影响

// 如果generator内部的异常未被内部捕获，那么会被认为遍历已结束

let generator = function* () {
    yield 'a';
    throw new Error('inner error');
    yield 'b';
    yield 'c';
};

let g = generator();
try {
    console.log(g.next());
    console.log(g.next());
} catch (e) {
    console.log(e);
}
console.log(g.next());


