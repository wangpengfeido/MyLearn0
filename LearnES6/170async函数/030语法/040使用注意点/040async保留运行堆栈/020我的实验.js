let a = 0;
let b = async () => {
  a = a + await 10;
  console.log('2', a); // -> '2' 10
};
b();
a++;
console.log('1', a); // -> '1' 1


// 首先执行同步任务
// 执行到await 10，这里是一个异步任务，暂停，这是async保留了堆栈a=0
// 继续同步任务，a++变为1，输出
// 执行异步任务，a=a+10，这里a为0，后面输出a为10





