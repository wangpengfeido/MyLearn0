// 下面是真正的尾递归优化实现
function tco(f) {
    let value;
    let active = false;
    let accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

function factorial(n, total = 1) {
    if (n === 1) {
        return total;
    }
    return factorial(n - 1, n * total);
}

const tail_factorial = tco(factorial);

console.log(tail_factorial(5));
