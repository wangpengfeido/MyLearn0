// yield表达式只能用在 Generator 函数里面
// 注意：在Generator函数中定义的函数也不行
function* generator1() {
    [1, 2, 3].forEach(item => {
        // 不允许
        yield item;
    })
}

let g = generator1();
g.next();



