/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const numList = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };
  const max = Math.pow(2, 31) - 1; // 2147483647
  const min = Math.pow(-2, 31); // -2147483648

  let ans = 0;
  let isNegative = 1;
  for (
    let i = 0, spaceOver = false, signStarted = false, numStarted = false;
    i < str.length;
    i++
  ) {
    let char = str[i];

    // 检查开头空格
    if (char !== " ") {
      spaceOver = true;
    }
    if (!spaceOver) {
      continue;
    }

    // 检查非法字符及正负号
    if (!numStarted) {
      if (numList[char] === undefined) {
        if ((char === "+" || char === "-") && !signStarted) {
          isNegative = char === "-" ? -1 : 1;
          signStarted = true;
        } else {
          return 0;
        }
        continue;
      } else {
        signStarted = true;
        numStarted = true;
      }
    }

    // 数字累加
    if (numList[char] !== undefined) {
      if (
        ans > parseInt(max / 10) ||
        (ans === parseInt(max / 10) && numList[char] > 7)
      ) {
        return max;
      }
      if (
        ans < parseInt(min / 10) ||
        (ans === parseInt(min / 10) && isNegative * numList[char] < -8)
      ) {
        return min;
      }
      ans = ans * 10 + isNegative * numList[char];
    } else {
      break;
    }
  }
  return ans;
};

console.log("42", myAtoi("42"));
console.log("+42", myAtoi("+42"));
console.log("+-42", myAtoi("+-42"));
console.log("   -42", myAtoi("   -42"));
console.log("4193 with words", myAtoi("4193 with words"));
console.log("words and 987", myAtoi("words and 987"));
console.log("2147483648", myAtoi("2147483648"));
console.log("-2147483649", myAtoi("-2147483649"));
console.log("", myAtoi(""));
console.log("-", myAtoi("-"));
