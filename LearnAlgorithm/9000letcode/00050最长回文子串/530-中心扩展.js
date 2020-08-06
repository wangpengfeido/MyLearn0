// 每一个回文字符串都有其中心，可能是一个或两个字符
// 即520解法中的边界情况

// 我们可以从每种中心开始扩展找出回文串

// 时间复杂度为O(n^2)
// 空间复杂度为O(1)

/**
 * 从中心扩展，找出以其为中心的最长回文串
 * @param i 左边索引
 * @param j 右边索引
 */
function expand(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  i++;
  j--;
  return s.substr(i, j - i + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    const temp = expand(s, i, i);
    if (temp.length > ans.length) {
      ans = temp;
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    const temp = expand(s, i, i+1);
    if (temp.length > ans.length) {
      ans = temp;
    }
  }
  return ans;
};

const s1 = "babad";
console.log(s1, longestPalindrome(s1));
const s2 = "cbbd";
console.log(s2, longestPalindrome(s2));
