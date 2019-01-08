// 见150/110/020/index010.js，其中有同步时的流程管理。但那种做法不适合异步，因为不能保证前一步执行完才执行下一步

// 来看一下异步的情况
let task = function (param) {
    return callback => {
        setTimeout(() => {
            callback(null, param);
        }, 1000);
    };
};

let gen = function* () {
    let r1 = yield task('a');
    console.log(r1);
    let r2 = yield task('b');
    console.log(r2);
    let r3 = yield task('c');
    console.log(r3);
};
let g = gen();

// 手动调用流程控制
let next = (err, data) => {
    if (err) throw err;
    let r = g.next(data);
    if (r.done) {
        return;
    }
    r.value(next);
};

next();

