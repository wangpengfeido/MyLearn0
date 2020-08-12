// 提取出数中所有的数字，来进行判断

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const figures = [];
  do {
    figures.push(x % 10);
    x = Math.floor(x / 10);
  } while (x !== 0);

  for (let i = 0, j = figures.length - 1; i <= j; i++, j--) {
    if (figures[i] !== figures[j]) {
      return false;
    }
  }

  return true;
};

console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));
console.log(0, isPalindrome(0));
