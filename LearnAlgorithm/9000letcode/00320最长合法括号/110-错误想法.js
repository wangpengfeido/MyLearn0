// 这个想法的错误之处在于：遍历完字符串后栈非空的情况，不能简单地将结果减去栈的长度。例如:"()(()".

// 使用栈来解决
// 遇到左括号入栈，所求结果+1。
// 遇到右括号，如果栈非空则出栈，所求结果+1。如果栈此时为空，则将所求结果重新计数。
// 如果遍历完字符串后，栈非空，则将所求结果减去栈的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  let subStrLength = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
      subStrLength++;
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
        subStrLength++;
      } else {
        ans = Math.max(ans, subStrLength);
        subStrLength = 0;
      }
    }
  }

  if (stack.length) {
    subStrLength -= stack.length;
  }
  ans = Math.max(ans, subStrLength);

  return ans;
};

console.log("(()(()((()))", longestValidParentheses("(()(()((()))"));
console.log("()(()", longestValidParentheses("()(()"));

console.log("()", longestValidParentheses("()"));
console.log("(()", longestValidParentheses("(()"));
console.log(")()())", longestValidParentheses(")()())"));
console.log("", longestValidParentheses(""));
