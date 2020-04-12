/**
 * 相对于520的算法，当存在重复时，不是i+1，而是将i直接置为重复index+1
 * 时间复杂度 O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  const len = s.length;
  let ans = 0;

  for (let i = 0, j = 0; j < len; j++) {
    const char = s.charAt(j);
    const charIndex = map.get(char);
    if (charIndex !== undefined) {
      // 这里Math.max的原因是重复可能是滑动窗口之前的重复，这种情况不能让i前移
      i = Math.max(charIndex + 1, i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(char, j);
  }
  return ans;
};

console.log(lengthOfLongestSubstring('tmmzuxt'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
