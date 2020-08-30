// 由 ./110.js 代码优化而来

// 按字母搜索每个字符串。搜索到有字符串出现不同字符时停止

// 时间复杂度 O(mn)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let ans = "";
  for (let letterIndex = 0; letterIndex < strs[0].length; letterIndex++) {
    let letter = strs[0][letterIndex];
    for (let strIndex = 1; strIndex < strs.length; strIndex++) {
      if (letter !== strs[strIndex][letterIndex]) {
        return ans;
      }
    }
    ans += letter;
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
