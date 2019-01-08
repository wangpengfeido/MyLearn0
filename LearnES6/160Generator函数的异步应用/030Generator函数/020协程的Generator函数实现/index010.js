// Generator 函数是协程在 ES6 的实现
// 整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器

let gen = function* (x) {
    let y = yield x;
    return y;
};

let g = gen(1);
console.log(g.next());
console.log(g.next());



