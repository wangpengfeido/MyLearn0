let task = function (param) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(param);
        })
    });
};
// async函数就是Generator函数的语法糖
// async函数将 Generator 函数的星号（*）替换成async，将yield替换成await
let asyncFunc = async function () {
    let r1 = await task('a');
    console.log(r1);
    let r2 = await task('b');
    console.log(r2);
    let r3 = await task('c');
    console.log(r3);
};

asyncFunc();




