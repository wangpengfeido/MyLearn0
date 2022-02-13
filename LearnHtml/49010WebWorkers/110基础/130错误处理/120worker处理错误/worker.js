let i = 0;

setInterval(() => {
  i++;
  if (i === 3) {
    // 抛出一个错误
    throw new Error('this is an error');
  } else {
    self.postMessage(i);
  }
}, 1000);

// 监听error
self.addEventListener('error', function(event) {
  console.log('=========catch error in worker',event);
});

