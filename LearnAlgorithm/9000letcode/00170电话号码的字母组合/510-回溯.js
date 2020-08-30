// 思路大致与 ./4-110.js 相同，但是使用回溯的方式来解决

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
  function backtrack(combine, remainingDigits) {
    if (remainingDigits.length === 0) {
      ans.push(combine);
      return;
    }
    letters = numList[remainingDigits[0]];
    const nextRemainingDigits = remainingDigits.substring(1);
    letters.forEach((letter) => {
      backtrack(combine + letter, nextRemainingDigits);
    });
  }
  
  if (digits.length) {
    backtrack("", digits);
  }

  return ans;
};

console.log("", letterCombinations(""));
console.log("23", letterCombinations("23"));
console.log("234", letterCombinations("234"));
