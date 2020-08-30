// 遍历所有可能的有效情况

// 时间复杂度粗略大约为 O(2^n)

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  // 字符串累加.str:累加的字符串。releaseLeft:剩余的左括号。releaseRight:剩余的右括号
  function accu(str, releaseLeft, releaseRight) {
    if (releaseLeft === 0 && releaseRight === 0) {
      ans.push(str);
    } else if (releaseLeft === 0) {
      accu(str + ")", releaseLeft, releaseRight - 1);
    } else if (releaseLeft === releaseRight) {
      accu(str + "(", releaseLeft - 1, releaseRight);
    } else {
      accu(str + "(", releaseLeft - 1, releaseRight);
      accu(str + ")", releaseLeft, releaseRight - 1);
    }
  }

  if (n === 0) {
    return [];
  } else {
    accu("", n, n);
  }
  return ans;
};

console.log(0, generateParenthesis(0));
console.log(1, generateParenthesis(1));
console.log(2, generateParenthesis(2));
console.log(3, generateParenthesis(3));
console.log(4, generateParenthesis(4));

