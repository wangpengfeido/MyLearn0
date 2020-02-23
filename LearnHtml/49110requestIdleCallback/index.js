let busy = false;

document.querySelector('.btn').addEventListener('click', () => {
  if (busy) return;
  /**
   * var handle = window.requestIdleCallback(callback[, options])
   * 当空闲时调用
   */
  requestIdleCallback(() => {
    busy = false;
    console.log('be idle');
  });
  busy = true;
  for (i = 0; i <= Math.pow(10, 9); i++) {}
});
