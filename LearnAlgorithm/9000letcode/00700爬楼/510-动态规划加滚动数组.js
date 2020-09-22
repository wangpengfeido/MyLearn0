// 使用滚动数组优化动态规划的实现

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

console.log(3, climbStairs(3));
