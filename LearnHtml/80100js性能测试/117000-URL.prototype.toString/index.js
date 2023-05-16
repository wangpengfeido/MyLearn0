function A() {
  const urlObj = new URL('https://a.com/path?query=1#hash=2');
  performance?.mark('timeM');
  for (let i = 0; i < 100; i++) {
    urlObj.toString();
  }
  performance?.mark('timeN');
  console.log(performance.measure('my-test', 'timeM', 'timeN'));
}
A();

// 结论，一次约消耗 0.001 ms 左右
