// async函数中return的值将传入返回的promise中
let asyncFunc1 = async function () {
  return 'hello world';
};
asyncFunc1().then(v => console.log(v));

// async函数中throw的值将是返回的promise reject
let asyncFunc2 = async function () {
  throw 'error';
};
asyncFunc2().then(
  v => console.log(v),
  e => console.log(e),
);




