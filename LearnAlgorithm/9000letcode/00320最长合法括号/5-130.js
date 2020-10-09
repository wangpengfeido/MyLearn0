// 修正了 ./110 的错误
// 将遍历完字符串后栈非空的情况，再进行一次从后向前的遍历

// 从前向后遍历一次
// 再将剩下的不能完整匹配的部分,从后向前遍历一次

// 其实直接将整个字符串从左向右和从右向左分别遍历一次亦可。这样代码实现更为明了，只需要将./110中代码再反向实现一次即可。
// 这里的实现实际上是省去了部分的从右向左遍历

// 时间复杂度为 O(n)

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;

  let subStrLength = 0;
  let oneSubLength = 0;

  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack++;
      oneSubLength++;
    } else if (s[i] === ")") {
      if (stack) {
        stack--;
        oneSubLength++;
        if (!stack) {
          // 出栈后栈空的情况
          // 说明形成了完整的匹配，更改结果
          subStrLength += oneSubLength;
          ans = Math.max(ans, subStrLength);
          oneSubLength = 0;
        }
      } else {
        subStrLength = 0;
      }
    }
  }

  if (stack) {
    // 如果 stack 不为空，则说明几个"("隔开了几个匹配子串，从后向前再迭代一次
    let maxStack = stack;
    subStrLength = 0;
    for (let i = s.length - 1; maxStack > 0; i--) {
      if (s[i] === ")") {
        stack++;
        subStrLength++;
      } else if (s[i] === "(") {
        stack--;
        if (stack < maxStack) {
          ans = Math.max(ans, subStrLength);
          subStrLength = 0;
          maxStack--;
        } else {
          subStrLength++;
        }
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
