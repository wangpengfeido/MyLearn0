let i = 0;

setInterval(() => {
  i++;
  if (i === 3) {
    self.postMessage('close');
  } else {
    self.postMessage(i);
  }
}, 1000);
