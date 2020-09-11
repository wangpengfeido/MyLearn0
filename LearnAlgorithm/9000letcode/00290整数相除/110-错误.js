// 依次相减
// 没有考虑越界的情况。计算过程中 absDividend 和 absDivisor 都有可能越界

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const dividendSign = dividend >= 0 ? 1 : -1;
  const divisorSign = divisor >= 0 ? 1 : -1;
  const sign = dividendSign === divisorSign ? 1 : -1;

  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let ans = 0;
  while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    ans++;
  }

  return sign * ans;
};

console.log(-2147483648, -1, divide(-2147483648, -1));
console.log(1, 1, divide(1, 1));
console.log(10, 3, divide(10, 3));
console.log(7, -3, divide(7, -3));
