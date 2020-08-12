// 利用字符串反转

// 实际上这个算法是不对的，因为用到了超出32位的数

// 可以进行优化，在最后一步parseInt前先检查字符串生成的数会不会溢出


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0 ? -1 : 1;
  const xAbs = Math.abs(x);
  const absReverse = parseInt(xAbs.toString().split("").reverse().join(""));
  const ans = isNegative * absReverse;
  if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return ans;
  }
};

console.log(123, reverse(123));
console.log(-123, reverse(-123));
console.log(120, reverse(120));
console.log(0, reverse(0));
console.log(Math.pow(-2, 31), reverse(Math.pow(-2, 31)));
console.log(Math.pow(2, 31) - 1, reverse(Math.pow(2, 31) - 1));
console.log(1534236469, reverse(1534236469));
