// 尾调用时，不会保留外层函数的调用帧。前提是内层函数没有引用外层函数的变量
function g(n) {
    return n + 1;
}

function f() {
    let m = 1;
    let n = 2;
    // 由于此处是尾调用，所以执行g的时候不会保留m\n变量，从而节省内存
    return g(m + n);
}