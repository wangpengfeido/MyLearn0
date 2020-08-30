// 按字母搜索每个字符串。搜索到有字符串出现不同字符时停止

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }
  
  let ans = "";
  let letterIndex = 0;
  while (true) {
    let strIndex = 0;
    let letter = strs[0][letterIndex];
    for (; strIndex < strs.length; strIndex++) {
      const str = strs[strIndex];
      if (letterIndex >= str.length || letter !== str[letterIndex]) {
        break;
      }
    }
    if (strIndex >= strs.length) {
      ans += letter;
    } else {
      break;
    }
    letterIndex++;
  }
  return ans;
};

console.log([], longestCommonPrefix([]));
console.log(
  ["flower", "flow", "flight"],
  longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  ["dog", "racecar", "car"],
  longestCommonPrefix(["dog", "racecar", "car"])
);
