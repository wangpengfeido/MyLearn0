// 任何一个await语句后边的Promise变为reject状态，将中断async函数的执行
let asyncFunc1 = async function () {
  await Promise.reject('error');
  return 'hello world';
};
asyncFunc1().then(
  v => console.log(v),
  e => console.log(e),
);

// 如果希望即使reject也不中断async，可以将其放在try...catch...中
let asyncFunc2 = async function () {
  try {
    await Promise.reject('error');
  } catch (e) {
  }
  return 'hello world';
};
asyncFunc2().then(
  v => console.log(v),
  e => console.log(e),
);

// 也可以在Promise后跟一个catch
let asyncFunc3 = async function () {
  await Promise.reject('error').catch(e => console.log('catch inner'));
  return 'hello world';
};
asyncFunc3().then(
  v => console.log(v),
  e => console.log(e),
);

