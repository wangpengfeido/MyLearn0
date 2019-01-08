let co = require('co');

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

// co可以不用编写Generator的执行器，自动执行Generator
co(gen).then(()=>{
    console.log('执行完成');
});