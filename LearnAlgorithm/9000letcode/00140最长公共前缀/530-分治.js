// 设 字符串 s[1],...,s[n]
// 设 LCP(s[i],...,s[j]) 是字符串 s[i],...,s[j] 的最长公共前缀
// 有 LCP(s[m],...,s[n])=LCP(LCP(s[m],...,s[i]), LCP(s[i+1],...,s[n])), m<i<n
// 所以 LCP(s[1],...,s[n])=LCP(LCP(1,...,j), LCP(s[j+1,n])), 1<j<n
// 以此类推，将一个分体分解为多个子问题来解决。

// 时间复杂度 O(mn)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  function longestCommonPrefix(str1, str2) {
    let i = 0;
    for (; i < str1.length && i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        break;
      }
    }
    return str1.substring(0, i);
  }

  function indexLongestCommonPrefix(m, n) {
    if (m === n) {
      return strs[m];
    } else {
      const mid = Math.floor((m + n) / 2);
      const LCPLeft = indexLongestCommonPrefix(m, mid);
      const LCPRight = indexLongestCommonPrefix(mid + 1, n);
      return longestCommonPrefix(LCPLeft, LCPRight);
    }
  }

  if (!strs.length) {
    return "";
  }
  return indexLongestCommonPrefix(0, strs.length - 1);
};

console.log([], longestCommonPrefix([]));
console.log(["aa", "a"], longestCommonPrefix(["aa", "a"]));
console.log(
  ["flower", "flow", "flight"],
  longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  ["dog", "racecar", "car"],
  longestCommonPrefix(["dog", "racecar", "car"])
);
