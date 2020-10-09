// 从开头找出可匹配的最长子串。
// 剩下的子串是不可匹配的。抛弃剩下子串的第一个字符后继续向后查找

// 最坏情况时间复杂度 O(n^2)，最好情况时间复杂度 O(n)

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  let i = 0;
  while (i < s.length) {
    let subStrLength = getSubStrFromStart(s, i);
    ans = Math.max(ans, subStrLength);
    i += subStrLength + 1;
  }
  return ans;
};

// 获取 s 字符串中以 start 开头的可匹配子串
function getSubStrFromStart(s, start) {
  if (start >= s.length) {
    return 0;
  }

  let subStrLength = 0;
  let oneSubLength = 0;
  let stack = 0;
  let i = start;
  while (i < s.length) {
    if (s[i] === "(") {
      stack++;
      oneSubLength++;
    } else if (s[i] === ")") {
      if (stack) {
        stack--;
        oneSubLength++;
        if (!stack) {
          // 出栈后栈空的情况
          subStrLength += oneSubLength;
          oneSubLength = 0;
        }
      } else {
        break;
      }
    }
    i++;
  }

  return subStrLength;
}

console.log("(()(()((()))", longestValidParentheses("(()(()((()))"));
console.log("()(()", longestValidParentheses("()(()"));

console.log("()", longestValidParentheses("()"));
console.log("(()", longestValidParentheses("(()"));
console.log(")()())", longestValidParentheses(")()())"));
console.log("", longestValidParentheses(""));
