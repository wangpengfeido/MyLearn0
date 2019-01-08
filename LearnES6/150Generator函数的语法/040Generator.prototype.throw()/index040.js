let generator = function* () {
    while (true) {
        try {
            yield console.log('yielded');
        } catch (e) {
            console.log('inner', e);
        }
    }

};

let g = generator();
g.next();
try {
    // 抛出错误时会执行一次next()方法
    g.throw(new Error('a'));
    // 抛出错误不会影响后面的执行
    // 注意：前提是catch没有使跳出当前执行过程。例如让外部捕获了错误，或捕获使直接跳过了后面的yield，那么后面的next就不会执行。
    g.next();
} catch (e) {
    console.log('outer', e);
}


