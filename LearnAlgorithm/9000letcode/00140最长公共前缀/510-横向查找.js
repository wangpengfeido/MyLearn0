// 遍历每个字符串中的每个字符
// 遍历每个字符串时更新前缀

// 时间复杂度 O(mn)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let ans = strs[0];
  for (let strIndex = 1; strIndex < strs.length; strIndex++) {
    const str = strs[strIndex];
    for (
      let letterIndex = 0;
      letterIndex < ans.length || letterIndex < str.length;
      letterIndex++
    ) {
      if (ans[letterIndex] !== str[letterIndex]) {
        ans = ans.substring(0, letterIndex);
        break;
      }
    }
  }

  return ans;
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
