// 出现"1"的规律:
// 个位上，每10个数就会出现一次，每出现一次连续1个数
// 十位上，每100个数就会出现一次，每出现一次连续10个数
// 百位上，每1000个数就会出现一次，每出现一次连续100个数
// 总结公式: (n/(i*10))*i。其中 i 为每次迭代的基数，依次为(1,10,100,1000,...)。

// 除了上面的，还有结尾的一部分没有计算到
// 例如计算1234的十位时，最后的34中十位出现1时并未计算到当中（共出现了10次）
// 计算当前位时，要判断剩下的数是否大于等于i并小于2*i。如果大于2*i，则结果加i；如果大于等于i并小于2*i，则结果加剩下的数-i+1;如果小于i，则不加。
// 也就是说，k=剩下的数-i+1。如果k小于0，则不加；k>=i,则加i；0<=k<i，则加k
// 总结公式：min( max( (n mod (i*10))−i+1 ,0), i)。其中n mod (i*10)就是剩下的数。

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let ans = 0;
  for (let i = 1; i <= n; i *= 10) {
    let divider = i * 10;
    ans +=
      Math.floor(n / divider) * i +
      Math.min(Math.max((n % divider) - i + 1, 0), i);
  }
  return ans;
};

console.log(-1, countDigitOne(-1));
console.log(13, countDigitOne(13));
console.log(188, countDigitOne(188));
console.log(388, countDigitOne(388));
