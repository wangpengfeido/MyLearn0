// 假设 A[n] 表示 n 个台阶的登顶方式数。那么有
// A[n] = A[n-1] + A[n-2]
// 边界条件为：A[0]=1; A[1]=1

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  let ans = climbStairs(n - 1) + climbStairs(n - 2);

  return ans;
};

console.log(3, climbStairs(3));
