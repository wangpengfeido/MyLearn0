// 问题的关键在于 "*" 的判断

// 如果 p 不是 "x*xxx"，那么只需要正常对比 s[0] 与 p[0]，
//     如果 s[0] 匹配 p[0] 再递归判断 s[1,...], p[1,...] 即可

// 如果 p 的格式是 "x*xxx"，有两种情况
//     s[0] 不匹配 p[0], "*" 表示的可能是0个字符， 再递归判断 s[0,...], p[2,...] 即可
//     s[0] 匹配 p[0], 又有两种可能
//         "*" 表示的是0个字符，此时递归判断 s[0,...], p[2,...]
//         "*" 表示的是多个s[0]字符， 此时递归判断 s[1,...], p[0,...]

// 边界条件为 s, p 全部比较完剩余为空，说明能正好匹配

// 此算法时间复杂度较大，是指数型的复杂度，答案给出的复杂度为 O((m+n)*2^m+n/2)

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p === "" && s === "") {
    return true;
  }
  const firstIsMatch = s[0] === p[0] || (s !== "" && p[0] === ".");

  if (p.length >= 2 && p[1] === "*") {
    if (firstIsMatch) {
      return isMatch(s.substr(1), p) || isMatch(s, p.substr(2));
    } else {
      return isMatch(s, p.substr(2));
    }
  } else {
    return firstIsMatch && isMatch(s.substr(1), p.substr(1));
  }
};

console.log("aa", "a", isMatch("aa", "a"));
console.log("aa", "a*", isMatch("aa", "a*"));
console.log("ab", ".*", isMatch("ab", ".*"));
console.log("aab", "c*a*b", isMatch("aab", "c*a*b"));
console.log("mississippi", "mis*is*p*.", isMatch("mississippi", "mis*is*p*."));
