// 这是一种不好的方法
// 时间复杂度为O(n^3)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  function allUnick(s, start, end) {
    let set = new Set();
    for (let i = 0; i < end; i++) {
      let char = s.charAt(i);
      if (set.has(char)) {
        return false;
      }
    }
    return true;
  }
  let ans = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      
    }
  }
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(" "));
