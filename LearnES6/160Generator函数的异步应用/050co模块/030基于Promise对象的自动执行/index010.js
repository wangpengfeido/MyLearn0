let task = function (param) {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
           resolve(param);
       })
    });
};

let gen = function* () {
    let r1 = yield task('a');
    console.log(r1);
    let r2 = yield task('b');
    console.log(r2);
    let r3 = yield task('c');
    console.log(r3);
};

let run = (gen) => {
    let g = gen();

    let next = (data) => {
        let r = g.next(data);
        if (r.done) {
            return;
        }
        r.value.then(next);
    };

    next();
};

run(gen);