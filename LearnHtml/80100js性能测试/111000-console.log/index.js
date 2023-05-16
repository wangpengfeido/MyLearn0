function A() {
  performance?.mark('timeM');
  for (let i = 0; i < 100; i++) {
    console.log('---------------');
  }
  performance?.mark('timeN');
  console.log(performance.measure('my-test', 'timeM', 'timeN'));
}
A();

// 结论，一次约消耗 0.1-0.2 ms
