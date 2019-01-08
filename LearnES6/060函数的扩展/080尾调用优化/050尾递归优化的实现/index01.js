// 尾递归优化的方法之一时，使用蹦床函数，将尾递归转换为循环
// 然而这不是真正的尾递归优化
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

// 将原来的递归改为每一步返回一个函数
function factorial(n, total = 1) {
    if (n === 1) {
        return total;
    }
    return factorial.bind(null, n - 1, n * total);
}

console.log(trampoline(factorial(5)));

