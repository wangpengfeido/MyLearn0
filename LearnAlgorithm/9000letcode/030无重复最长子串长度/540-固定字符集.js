// 如果固定字符集，我们可以用一个数组来取代map
// 例如ASCII字符集 0-255

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const indexArr = Array.from({ length: 256 });
  const len = s.length;
  let ans = 0;

  for (let i = 0, j = 0; j < len; j++) {
    const charCode = s.charCodeAt(j);
    const charIndex = indexArr[charCode];
    if (charIndex !== undefined) {
      // 这里Math.max的原因是重复可能是滑动窗口之前的重复，这种情况不能让i前移
      i = Math.max(charIndex + 1, i);
    }
    ans = Math.max(ans, j - i + 1);
    indexArr[charCode] = j;
  }
  return ans;
};

console.log(lengthOfLongestSubstring('tmmzuxt'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
