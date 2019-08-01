let i = 0;

setInterval(() => {
  i++;
  if (i === 3) {
    self.postMessage('close');
    // 使用close终止
    self.close();
  } else {
    self.postMessage(i);
  }
}, 1000);
