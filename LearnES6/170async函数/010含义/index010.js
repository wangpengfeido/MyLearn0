let task = function (param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

// async的优点：
// 1.内置执行器。
// 2.更好的语义。
// 3.更广的适用性。await后面可以是promise，也可以是原始类型的值。
// 4.返回值是 Promise。





