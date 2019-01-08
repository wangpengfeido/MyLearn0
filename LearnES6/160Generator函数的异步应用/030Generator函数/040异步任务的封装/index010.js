let async = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
};

// 封装异步操作
let gen = function* () {
    // 第一阶段
    let value = yield async();
    // 第二阶段
    console.log(value);
};

// 执行异步操作
let g = gen();
let result = g.next();
result.value.then(data=>{
    return data;
}).then(data=>{
   g.next(data);
});

