// 尾调用即函数的最后一步是调用另一个函数
function g() {

}

function f() {
    return g();
}
