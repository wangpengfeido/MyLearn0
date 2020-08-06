// 设 P(i,j) 表示字符串 s [i,j] 子串是否为回文串

// 因为一个回文串去掉两端的字符后仍然是回文串
// 那么转换方程为
// P(i,j) = P(i+1,j-1) && s[i]==s[j] , i<=j

// 边界情况是
//     当 j-i=0, P(i,j) = true
//     当 j-i=1, P(i,j) = s[i]==s[j]

// 这样，我们从短到长遍历所有子串，就可以找到最长回文串

// 时间复杂度为 O(n^2)
// 空间复杂度为 O(n^2)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  let P = Array.from({ length: s.length }).map(() =>
    Array.from({ length: s.length })
  );

  // l 表示子串长度
  for (let l = 1; l <= s.length; l++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + l - 1;
      if (j >= s.length) {
        break;
      }
      if (j - i === 0) {
        P[i][j] = true;
      } else if (j - i === 1) {
        P[i][j] = s[i] === s[j];
      } else {
        P[i][j] = P[i + 1][j - 1] && s[i] === s[j];
      }
      if (P[i][j] && l > ans.length) {
        ans = s.substr(i, l);
      }
    }
  }

  return ans;
};

const s1 = "babad";
console.log(s1, longestPalindrome(s1));
const s2 = "cbbd";
console.log(s2, longestPalindrome(s2));
