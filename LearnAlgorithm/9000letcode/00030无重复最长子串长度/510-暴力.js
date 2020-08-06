// 检查所有的字串
// 这是一种不好的方法
// 时间复杂度为O(n^3)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 判断一个字串是否是无重复的
  function allUnique(str) {
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (set.has(char)) {
        return false;
      } else {
        set.add(char);
      }
    }
    return true;
  }
  let ans = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      const subStr = s.substring(i, j);
      if (allUnique(subStr)) {
        ans = Math.max(ans, subStr.length);
      }
    }
  }
  return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
