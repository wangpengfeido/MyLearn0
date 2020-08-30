// 遍历数字字符串，每遍历一个数字，就是在已得出的每个结果后面分别加上数字代表的字符

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

  let ans = [];
  for (let i = 0; i < digits.length; i++) {
    if (i === 0) {
      ans = numList[digits[i]];
      continue;
    }
    const newAns = [];
    ans.forEach((oldAnsItem) => {
      numList[digits[i]].forEach((newLetter) => {
        newAns.push(oldAnsItem + newLetter);
      });
    });
    ans = newAns;
  }

  return ans;
};

console.log("23", letterCombinations("23"));
console.log("234", letterCombinations("234"));
