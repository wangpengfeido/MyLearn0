// 利用二分思想，每次减去 2^k*divisor

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const halfMin = -1073741824; // -2^30

  const dividendSign = dividend >= 0 ? 1 : -1;
  const divisorSign = divisor >= 0 ? 1 : -1;
  const sign = dividendSign === divisorSign ? 1 : -1;

  let negativeDividend = dividend >= 0 ? -dividend : dividend;
  let negativeDivisor = divisor >= 0 ? -divisor : divisor;
  let ans = 0;
  while (negativeDividend <= negativeDivisor) {
    let n = -1,
      currentSum = negativeDivisor;
    while (currentSum >= halfMin) {
      let nextSum = currentSum << 1;
      if (nextSum >= negativeDividend) {
        n = n << 1;
        currentSum = nextSum;
      } else {
        break;
      }
    }

    negativeDividend -= currentSum;
    ans += n;
  }

  if (ans === -2147483648 && sign > 0) {
    return 2147483647;
  }
  return sign * -ans;
};

console.log(-2147483648, -1, divide(-2147483648, -1));
console.log(1, 1, divide(1, 1));
console.log(10, 3, divide(10, 3));
console.log(7, -3, divide(7, -3));
