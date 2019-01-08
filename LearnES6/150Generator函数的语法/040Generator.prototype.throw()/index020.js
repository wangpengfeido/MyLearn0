// 如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获。
let generator = function* () {
    yield;
};

let g = generator();
g.next();
try {
    g.throw(new Error('a'));
} catch (e) {
    console.log('outer', e);
}