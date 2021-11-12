this.addEventListener('install', function (event) {
  console.log('install');
});

this.addEventListener('activate', function (event) {
  fetch('/called-activate');
  console.log('activate');
});

// 接收消息会使sw重新处于运行状态
// 并且如果一直给sw发消息，sw也不会停止
this.addEventListener('message', (event) => {
  fetch(`/message/${event.data.message}`);
});

// setInterval的运行并不能阻止sw停止
// let i = 0;
// setInterval(() => {
//   fetch(`/alive/${++i}`);
// }, 10000);
