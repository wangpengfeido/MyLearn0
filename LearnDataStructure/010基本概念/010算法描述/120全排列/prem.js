/**
 * @problem 给定n个不同值，求其全排列
 * @thought prem(n) = n * prem(n-1)
 */
exports.prem = function prem(n) {
  if (n === 1) {
    return n;
  } else {
    return n * prem(n - 1);
  }
};
