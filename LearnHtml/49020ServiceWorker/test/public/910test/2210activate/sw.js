this.addEventListener('install', function (event) {
  console.log('install');
});

// 实验证明：即使浏览器退出后，重新打开页面时也不会被重新activate，这里的事件不会被执行。
this.addEventListener('activate', function (event) {
  fetch('/called-activate');
  console.log('activate');
});

// 外部调用也是仅执行一次
fetch('/outer');
console.log('111111111-outer');
