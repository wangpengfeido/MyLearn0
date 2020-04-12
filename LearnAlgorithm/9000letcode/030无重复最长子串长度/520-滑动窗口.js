// 滑动窗口是解决 数组/字符串 问题时经常用到的方式。
// 滑动窗口[i,j]，检查j+1是否存在于滑动窗口中。不存在则j+1；存在则i+1。
// 时间复杂度 O(2n)=O(n)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const len = s.length;
  let ans = 0;
  let i = 0,
    j = 0;
  while (i < len && j < len) {
    const char = s.charAt(j);
    if (!set.has(char)) {
      set.add(char);
      ans = Math.max(ans, j - i + 1);
      j++;
    } else {
      set.delete(s.charAt(i));
      i++;
    }
  }
  return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
