// 暴力求解

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function isPalindromic(s) {
    return s === s.split('').reverse().join('');
  }

  let maxStr = '';
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const cStr = s.substr(i, j - i + 1);
      if (isPalindromic(cStr) && cStr.length > maxLength) {
        maxStr = cStr;
        maxLength = cStr.length;
      }
    }
  }

  return maxStr;
};

const s1 = 'babad';
console.log(s1, longestPalindrome(s1));
const s2 = 'cbbd';
console.log(s2, longestPalindrome(s2));
