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
  return arrSubLength.length ? Math.max(...arrSubLength) : 0;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
