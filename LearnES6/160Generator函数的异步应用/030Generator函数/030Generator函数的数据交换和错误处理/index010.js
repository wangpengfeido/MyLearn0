// Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。
// 除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。

// next返回值的 value 属性，是 Generator 函数向外输出数据；next方法还可以接受参数，向 Generator 函数体内输入数据。
let gen = function* (x) {
    let y = yield x;
    return y;
};

let g = gen(1);
console.log(g.next());
console.log(g.next(2));


