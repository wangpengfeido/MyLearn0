// 除去 4 与 9 的情况，都是从左到右逐渐减小，直接相加即可
// 如果遇到右边数字比左边数字大，则说明是 4 和 9 的情况，用下一个数减现在的数。

// 时间复杂的 O(N)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;
  for (let i = 0; i < s.length; ) {
    const currentSymbolValue = romanSymbols[s[i]];
    const nextSymbolValue = romanSymbols[s[i + 1]];

    if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
      ans += nextSymbolValue - currentSymbolValue;
      i += 2;
    } else {
      ans += currentSymbolValue;
      i++;
    }
  }
  return ans;
};

console.log("III", romanToInt("III"));
console.log("IV", romanToInt("IV"));
console.log("IX", romanToInt("IX"));
console.log("LVIII", romanToInt("LVIII"));
console.log("MCMXCIV", romanToInt("MCMXCIV"));
console.log("CXCIX", romanToInt("CXCIX"));
console.log("CDXLIX", romanToInt("CDXLIX"));
