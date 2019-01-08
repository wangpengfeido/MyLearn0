// Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
let gen = function* (x) {
    let y;
    try {
        y = yield x;
    } catch (e) {
        console.log(e);
    }
    return y;
};

let g = gen(1);
console.log(g.next());
g.throw(new Error('错误'));
console.log(g.next());



