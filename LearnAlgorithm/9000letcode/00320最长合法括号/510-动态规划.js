// 假设 dp[i] 表示以 i 结尾的有效子串的长度。从前到后两两检查
// 如果 s[i]==='('，那么 dp[i]=0
// 如果 s[i]===')' 且 s[i-1]==='('，也就是形如 '...()'
//     那么 dp[i]=dp[i-2]+2
// 如果 s[i]===')' 且 s[i-1]===')'，也就是形如 '...))'
//     如果 s[i-dp[i-1]-1]==='('，那么 dp[i]=dp[i-1]+2+dp[i-dp[i-1]-2]
//       解释：假设 subS 表示 dp[i-1] 代表的有效子串。s[i-dp[i-1]-1] 表示的就是 subS 前面的那个字符，如果这个字符是"("，则可以与 s[i] 处的")"匹配
//            那么 dp[i] 就是三部分相加：subS的长度，即 dp[i-1]；subS 两端的括号，即2；"(subS)"前面的有效子串，即 dp[i-dp[i-1]-2]。
//            另外，如果没有以 s[i-1] 结尾的有效子串，s[i-dp[i-1]-1]=s[i-1]===')'，此时 dp[i]=0

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = new Proxy([0], {
    get: function (target, propKey) {
      if (propKey < 0) {
        return 0;
      } else {
        return target[propKey];
      }
    },
  });
  let ans = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      dp[i] = 0;
    } else if (s[i] === ")" && s[i - 1] === "(") {
      dp[i] = dp[i - 2] + 2;
    } else if (s[i] === ")" && s[i - 1] === ")") {
      if (s[i - dp[i - 1] - 1] === "(") {
        dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
      } else {
        dp[i] = 0;
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
};

console.log("(()(()((()))", longestValidParentheses("(()(()((()))"));
console.log("()(()", longestValidParentheses("()(()"));

console.log("()", longestValidParentheses("()"));
console.log("(()", longestValidParentheses("(()"));
console.log(")()())", longestValidParentheses(")()())"));
console.log("", longestValidParentheses(""));
