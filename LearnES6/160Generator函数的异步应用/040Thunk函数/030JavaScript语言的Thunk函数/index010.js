// JavaScript 语言是传值调用，它的 Thunk 函数含义有所不同。
// 在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。

// 任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        };
    };
};

let f = (a, b, callback) => {
    callback(a, b);
};

let ft = Thunk(f);
ft(1, 2)(console.log);

