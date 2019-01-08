function* main() {
    // 异步操作可以写在yield表达式中
    let result = yield async();
    // 异步的后续操作放在yield下面，调用next后执行。相当于原来的异步回调
    console.log(result);
}

let g = main();
g.next();

function async() {
    setTimeout(() => {
        g.next('a');
    }, 2000);
}