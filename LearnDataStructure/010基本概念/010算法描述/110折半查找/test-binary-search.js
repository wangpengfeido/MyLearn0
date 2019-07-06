const { binarySearch } = require("./binary-search.js");

function createTestCase() {
  const length = parseInt(Math.random() * 10000);
  const targetIndex = parseInt(Math.random() * length);
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(parseInt(Math.random() * 10000));
  }
  arr.sort((a, b) => a - b);
  return {
    arr,
    target: arr[targetIndex]
  };
}
for (let i = 0; i < 100; i++) {
  const testCase = createTestCase();
  console.log(
    testCase.target ===
      testCase.arr[binarySearch(testCase.arr, testCase.target)],
    testCase.target
  );
}
