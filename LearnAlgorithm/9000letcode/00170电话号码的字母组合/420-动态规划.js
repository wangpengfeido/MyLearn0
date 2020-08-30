// 我们换一种思考方式
// 假设，对于长度为 n 的整数列 S 的组合数为 C[n]，
// 有 C[n]=C[n-1] * S[n-1]对应的字母数（S从0开始）
// 边界条件为 C[1] = S[0]对应的字母数

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let numList = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "o", "n"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (!digits.length) {
    return [];
  }

  if (digits.length === 1) {
    return numList[digits];
  }

  const letters = numList[digits[digits.length - 1]];
  let ans = [];
  const lastAns = letterCombinations(digits.substring(0, digits.length - 1));
  lastAns.forEach((ansItem) => {
    letters.forEach((letter) => {
      ans.push(ansItem + letter);
    });
  });

  return ans;
};

console.log("", letterCombinations(""));
console.log("23", letterCombinations("23"));
console.log("234", letterCombinations("234"));
