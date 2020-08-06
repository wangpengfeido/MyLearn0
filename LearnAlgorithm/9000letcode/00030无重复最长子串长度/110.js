// 这种解法是完全错误的
// 因为没有遍历到所有情况。例如"abcadefg"，前面的abc全部被抛弃了

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let arrSubLength = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (!set.has(c)) {
      set.add(c);
    } else {
      arrSubLength.push(set.size);
      set.clear();
      set.add(c);
    }
  }
  arrSubLength.push(set.size);
  return Math.max(...arrSubLength);
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abcadefg"));
