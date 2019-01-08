// 这个例子和上一个例子是基本相同的

let task = function (param) {
    return callback => {
        setTimeout(() => {
            callback(null, param);
        }, 1000);
    };
};

let gen = function* () {
    // 如果要实现这样的自动流程管理，yield后面跟的必须是Thunk函数
    let r1 = yield task('a');
    console.log(r1);
    let r2 = yield task('b');
    console.log(r2);
    let r3 = yield task('c');
    console.log(r3);
};

let run = (gen) => {
    let g = gen();

    // next函数就是放在Thunk回调参数中的函数
    let next = (err, data) => {
        if (err) throw err;
        let r = g.next(data);
        if (r.done) {
            return;
        }
        r.value(next);
    };

    next();
};

run(gen);


// Thunk 函数并不是 Generator 函数自动执行的唯一方案。
// 因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。
// 回调函数可以做到这一点，Promise 对象也可以做到这一点。


