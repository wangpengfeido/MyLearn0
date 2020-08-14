// 将数字按照规律硬编码

// 这种算法的缺点是不便于扩展

// 时间复杂度 O(1)
// 空间复杂度 O(1)



/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanSymbols = {
    1: ["I", "V"],
    2: ["X", "L"],
    3: ["C", "D"],
    4: ["M"],
  };

  let ans = "";
  let digit = 1;
  while (num !== 0) {
    const figure = num % 10;
    num = Math.floor(num / 10);

    let temp = "";
    switch (figure) {
      case 1:
      case 2:
      case 3:
        for (let i = 0; i < figure; i++) {
          temp += romanSymbols[digit][0];
        }
        break;
      case 4:
        temp = `${romanSymbols[digit][0]}${romanSymbols[digit][1]}`;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        temp += romanSymbols[digit][1];
        for (let i = 0; i < figure - 5; i++) {
          temp += romanSymbols[digit][0];
        }
        break;
      case 9:
        temp = `${romanSymbols[digit][0]}${romanSymbols[digit + 1][0]}`;
        break;
    }
    ans = temp + ans;

    digit++;
  }

  return ans;
};

console.log(3, intToRoman(3));
console.log(4, intToRoman(4));
console.log(9, intToRoman(9));
console.log(58, intToRoman(58));
console.log(1994, intToRoman(1994));
console.log(199, intToRoman(199));
console.log(449, intToRoman(449));
