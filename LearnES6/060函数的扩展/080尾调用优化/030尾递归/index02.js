// 上一个例子中，阶乘函数需要传两个参数显得不直观

////////////////////////////////////////////////////////////////
// 一种方法是，在尾递归函数之外，再提供一个正常形式的函数。
function tailFactorial(n, total) {
    if (n === 1) {
        return total;
    }
    return tailFactorial(n - 1, n * total);
}

function factorial(n) {
    return tailFactorial(n, 1);
}

//使用柯里化达到此目的
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}

const factorial2 = currying(tailFactorial, 1);

////////////////////////////////////////////////////////////////
// 第二种方法是，使用默认参数
function factorial3(n, total = 1) {
    if (n === 1) {
        return total;
    }
    return factorial(n - 1, n * total);
}
