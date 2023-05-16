function A() {
  performance?.mark('timeM');
  for (let i = 0; i < 100; i++) {
    self.registration;
  }
  performance?.mark('timeN');
  console.log(performance.measure('my-test', 'timeM', 'timeN'));
}
A();

// 结论，一次约消耗 <0.001 ms
