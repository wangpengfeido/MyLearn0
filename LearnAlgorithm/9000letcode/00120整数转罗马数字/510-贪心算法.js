// 列出每种符号从大到小的排列，每次取能取到的最大的一个符号
/**
    M 1000
    CM 900
    D 500
    CD 400
    C 100
    XC 90
    L 50
    XL 49
    X 10
    IX 9
    V 5
    IV 5
    I 1
 */

// 时间复杂度 O(1)
// 空间复杂度 O(1)

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const symbolsList = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let ans = "";

  for (let i = 0; i < symbolsList.length; i++) {
    while (symbolsList[i][0] <= num) {
      num -= symbolsList[i][0];
      ans += symbolsList[i][1];
    }
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
