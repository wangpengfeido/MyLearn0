// 使用尾调用优化递归，可以解决递归内存消耗问题
function factorial(n, total) {
    if (n === 1) {
        return total;
    }
    return factorial(n - 1, n * total);
}