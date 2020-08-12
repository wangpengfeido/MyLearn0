// 反转一半数字，如果反转后的数与剩下的数相同，那么它就是回文数

// 如果回文数有偶数位，那么会出现 反转数=剩下数
// 如果回文数有奇数位，那么会出现 反转数=剩下数/10
// 当 剩下数<反转数，结束判断

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  // 以0结尾的非0数都不是回文数
  // 这样的数会导致计算错误，因为 0*10=0，会导致条件判断错误
  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  let remainNum = x,
    reverseNum = 0;
  while (remainNum >= reverseNum) {
    if (reverseNum === remainNum || reverseNum === Math.floor(remainNum / 10)) {
      return true;
    }
    const figure = remainNum % 10;
    remainNum = Math.floor(remainNum / 10);
    reverseNum = reverseNum * 10 + figure;
  }
  return false;
};

console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));
console.log(101101, isPalindrome(101101));
console.log(0, isPalindrome(0));
