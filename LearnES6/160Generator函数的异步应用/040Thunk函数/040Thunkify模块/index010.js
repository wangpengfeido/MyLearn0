// thunkify模块生成thunk函数
// 特别的是，多了一个检查机制，确保回调函数只执行一次。这样的设计与下文的 Generator 函数相关。

const thunkify = require('thunkify');

let f = (a, b, callback) => {
    // 由于回调函数只执行一次，所以只打印一次
    callback(a, b);
    callback(a, b);
};

let ft = thunkify(f);
let print = console.log.bind(console);
ft(1, 2)(print);

