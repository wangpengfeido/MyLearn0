// 暴力

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += getOneNum(i);
  }
  return ans;
};

// 获取一个整数中数字1出现次数
function getOneNum(n) {
  let ans = 0;
  while (n) {
    if (n % 10 === 1) {
      ans++;
    }
    n = Math.floor(n / 10);
  }
  return ans;
}

console.log(13, countDigitOne(13));
console.log(188, countDigitOne(188));
console.log(388, countDigitOne(388));
