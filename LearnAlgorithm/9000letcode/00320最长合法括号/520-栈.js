// 利用栈，保持栈底元素始终为上一个未匹配的")"，其他元素为上一个未匹配的"("

// 遇到"("，将其索引入栈
// 遇到")"，先将栈顶元素出栈，之后，
//     如果栈为空，将当前索引入栈，作为新的未匹配")"
//     如果栈不为空，则将当前索引减去栈顶元素索引，即为匹配的子串长度

// 方便起见，我们先在栈底放一个 -1

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  let stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }
  return ans;
};

console.log("(()(()((()))", longestValidParentheses("(()(()((()))"));
console.log("()(()", longestValidParentheses("()(()"));

console.log("()", longestValidParentheses("()"));
console.log("(()", longestValidParentheses("(()"));
console.log(")()())", longestValidParentheses(")()())"));
console.log("", longestValidParentheses(""));
