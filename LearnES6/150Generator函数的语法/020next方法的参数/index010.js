// yield返回next传入的参数
function* generator() {
    let v;
    while (true) {
        // 见../010/030/010 yield传出yield参数，暂停在yield执行之后，返回从next()参数获取到的值之前
        // 当next()方法传入参数之后，yield继续，返回传入的值，函数继续执行
        let temp = yield v;
        v = temp;
        console.log(v);
    }
}

let g = generator();
// 第一个next用于启动遍历器，所以它传入的参数是无效的
console.log('a',g.next('a'));
console.log('b',g.next('b'));
console.log('c',g.next('c'));

// next传入参数的意义在于，改变yield的执行行为



