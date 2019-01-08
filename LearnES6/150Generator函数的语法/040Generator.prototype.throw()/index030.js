// 如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
let generator = function* () {
    yield;
};

let g = generator();
g.next();
g.throw(new Error('a'));