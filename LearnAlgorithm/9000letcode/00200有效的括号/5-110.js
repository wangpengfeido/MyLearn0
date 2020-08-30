// 利用栈来解决

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const matchChar = stack.pop();
      if (
        (c === ")" && matchChar === "(") ||
        (c === "}" && matchChar === "{") ||
        (c === "]" && matchChar === "[")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};

console.log("[", isValid("["));
console.log("()", isValid("()"));
console.log("()[]{}", isValid("()[]{}"));
console.log("(]", isValid("(]"));
console.log("([)]", isValid("([)]"));
console.log("{[]}", isValid("{[]}"));
