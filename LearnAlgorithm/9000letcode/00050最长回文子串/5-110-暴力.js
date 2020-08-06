// 暴力求解
// 检测所有子串
// 时间复杂度为 O(n^3)

function isPalindromic(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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
