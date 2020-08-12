// 这个是对 110 的优化，使代码更条理，不臃肿

// 遍历字符串时，可以归纳出这几种状态：
//     start 处理开头空字符
//     sign 处理正负号
//     number 处理数字
//     end 结束

// 然后可归纳出这几种状态的转换条件，见代码

// 时间复杂度 O(n)
// 空间复杂度 O(1)

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

  let currentState = "start";
  let stateTable = {
    // 左边key表示原来的状态，四列表示对应字符时转换到的状态
    // 四列：' ', '+/-', 数字, 其他
    start: ["start", "sign", "number", "end"],
    sign: ["end", "end", "number", "end"],
    number: ["end", "end", "number", "end"],
    end: ["end", "end", "end", "end"],
  };
  function getNewState(currentState, newChar) {
    let col;
    switch (true) {
      case newChar === " ":
        col = 0;
        break;
      case newChar === "+" || newChar === "-":
        col = 1;
        break;
      case numList[newChar] !== undefined:
        col = 2;
        break;
      default:
        col = 3;
    }
    return stateTable[currentState][col];
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    currentState = getNewState(currentState, char);

    if (currentState === "start") {
      continue;
    } else if (currentState === "sign") {
      isNegative = char === "-" ? -1 : 1;
    } else if (currentState === "number") {
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
    } else if (currentState === "end") {
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
