// 按照一般的方法弹出推入数字。并在推入前进行溢出检查

// 详细请看代码。

// 时间复杂度 O(log(n))
// 空间复杂度 O(1)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = Math.pow(-2, 31); // -2147483648
  const max = Math.pow(2, 31) - 1; // 2147483647
  let ans = 0;
  while (x != 0) {
    let pop = x % 10;
    x = parseInt(x / 10);
    // 判断推入后是否会溢出
    if (ans > parseInt(max / 10) || (ans === parseInt(max / 10) && pop > 7)) {
      return 0;
    }
    if (ans < parseInt(min / 10) || (ans === parseInt(min / 10) && pop < -8)) {
      return 0;
    }
    ans = ans * 10 + pop;
  }
  return ans;
};

console.log(123, reverse(123));
console.log(-123, reverse(-123));
console.log(120, reverse(120));
console.log(0, reverse(0));
console.log(Math.pow(-2, 31), reverse(Math.pow(-2, 31)));
console.log(Math.pow(2, 31) - 1, reverse(Math.pow(2, 31) - 1));
console.log(1534236469, reverse(1534236469));
