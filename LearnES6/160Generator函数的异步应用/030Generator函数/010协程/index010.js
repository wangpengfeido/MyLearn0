// 协程有点像函数（子例程），又有点像线程。
// 协程与子例程的差异：子例程执行完后才会结束父例程，而协程可并行执行
// 协程与线程的区别：线程可同时执行，而协程同时只能执行一个，执行权可随时交换

let job = function () {
    console.log('job');
};

// async 可以看做一个协程，当执行到yield时，执行权交给其他协程，直到next被执行
let async = function* () {
    yield job();
};



