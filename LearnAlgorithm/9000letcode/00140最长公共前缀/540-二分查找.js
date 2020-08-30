// 最长公共前缀一定不超过所有字符串的最小长度 minLenght
// 则按前缀长度执行二分查找，长度为 mid 的前缀是否全部相同，相同则继续查找大于等于mid的长度，不同则继续查找小于mid小的长度

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let minLength = Math.min(...strs.map((str) => str.length));

  let low = 0,
    high = minLength;
  while (true) {
    if (low === high) {
      return strs[0].substr(0, low);
    }
    let mid = Math.floor((high - low + 1) / 2) + low;
    let prefix = strs[0].substr(0, mid);
    let i = 1;
    for (; i < strs.length; i++) {
      if (prefix !== strs[i].substr(0, mid)) {
        break;
      }
    }
    if (i === strs.length) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
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
