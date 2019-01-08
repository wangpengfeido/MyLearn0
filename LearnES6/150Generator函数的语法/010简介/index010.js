// 理解：
// Generator 函数是一个状态机，封装了多个内部状态。
// Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

// 特征：
// 一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield表达式，定义不同的内部状态

// 调用 Generator 函数后，返回内部的遍历器对象

function* generator() {
    // 注意，在未调用next时函数会暂停在开始
    console.log('inner1');
    yield 'a';
    // yield表达式是暂停标志
    // 注意：先传出yield的参数后再暂停。即可认为暂停在yield执行之后，但是在yield返回从next()获取到的参数值之前
    console.log('inner2');
    yield 'b';
    return 'done';
}

let g = generator();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


setTimeout(()=>{
    console.log(g.next());
    setTimeout(()=>{
        console.log(g.next());
        setTimeout(()=>{
            console.log(g.next());
        },2000);
    },2000);
},2000);




